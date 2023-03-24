<script setup lang='ts'>
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { NAutoComplete, NButton, NInput, useDialog, useMessage } from 'naive-ui'
import html2canvas from 'html2canvas'
import * as sdk from 'microsoft-cognitiveservices-speech-sdk'
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk'
import { Message } from './components'
import { useScroll } from './hooks/useScroll'
import { useChat } from './hooks/useChat'
import { useCopyCode } from './hooks/useCopyCode'
import { useUsingContext } from './hooks/useUsingContext'
import HeaderComponent from './components/Header/index.vue'
// import VoiceInputComponent from './components/VoiceInput/index.vue'
import { SvgIcon } from '@/components/common'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { useChatStore, usePromptStore } from '@/store'
import { fetchChatAPIProcess } from '@/api'

import { t } from '@/locales'
import { streamAPI } from '@/services/sse'
import client from '@/services'

let controller = new AbortController()

const openLongReply = import.meta.env.VITE_GLOB_OPEN_LONG_REPLY === 'true'

const route = useRoute()
const dialog = useDialog()
const ms = useMessage()

const chatStore = useChatStore()

useCopyCode()

const { isMobile } = useBasicLayout()
const { updateChat, updateChatSome } = useChat()
const { scrollRef, scrollToBottom } = useScroll()
const { usingContext, toggleUsingContext } = useUsingContext()

const { uuid } = route.params as { uuid: string }

// const dataSources = computed(() => chatStore.getChatByUuid(+uuid))
const dataSources = ref<Chat.Chat[]>([])
// const conversationList = computed(() => dataSources.value.filter(item => (!item.inversion && !item.error)))

const prompt = ref<string>('')
const loading = ref<boolean>(false)
const speaking = ref<boolean>(false)

// 添加PromptStore
const promptStore = usePromptStore()
// 使用storeToRefs，保证store修改后，联想部分能够重新渲染
const { promptList: promptTemplate } = storeToRefs<any>(promptStore)

async function handleSubmit() {
  if (chatStore.active == null)
    await chatStore.addHistory({ title: prompt.value, isEdit: false })

  onConversation()
}
const speechConfig = sdk.SpeechConfig.fromSubscription(import.meta.env.VITE_SPEECH_KEY, import.meta.env.VITE_SPEECH_REGION)
speechConfig.speechSynthesisVoiceName = 'en-US-JennyNeural'
speechConfig.speechRecognitionLanguage = 'en-US'
const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput()
let recognizer: any
function voiceInput() {
  if (speaking.value) {
    recognizer?.close?.()
    speaking.value = false
    return
  }
  speaking.value = true
  recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig)
  recognizer.recognizeOnceAsync((result: { reason: any; text: string }) => {
    if (result.reason === ResultReason.RecognizedSpeech)
      prompt.value = prompt.value + result.text
    recognizer.close()
    speaking.value = false
  })
}
function speakOnce(str: string) {
  const synthesizer = new sdk.SpeechSynthesizer(speechConfig)
  synthesizer.speakTextAsync(str)
}

async function onConversation() {
  const message = prompt.value
  // const openAIMsgList = []
  // conversationList.value.forEach((x) => {
  //   openAIMsgList.push({ role: 'user', content: x.requestOptions.prompt })
  //   openAIMsgList.push({ role: 'assistant', content: x.text })
  // })
  // openAIMsgList.push({ role: 'user', content: message })

  if (loading.value)
    return

  if (!message || message.trim() === '')
    return

  controller = new AbortController()
  dataSources.value.push(
    {
      dateTime: new Date().toLocaleString(),
      text: message,
      inversion: true,
      error: false,
      conversationOptions: null,
      requestOptions: { prompt: message, options: null },
    },
  )
  scrollToBottom()

  loading.value = true
  prompt.value = ''

  const options: Chat.ConversationRequest = {}

  dataSources.value.push(
    {
      dateTime: new Date().toLocaleString(),
      text: '',
      loading: true,
      inversion: false,
      error: false,
      conversationOptions: null,
      requestOptions: { prompt: message, options: { ...options } },
    },
  )
  const currentChat = dataSources.value[dataSources.value.length - 1]
  scrollToBottom()

  try {
    let spokenText = ''
    const speaker = new sdk.SpeechSynthesizer(speechConfig)
    const fetchChatAPIOnce = async () => {
      const res = await streamAPI<{
        prompt: string
        chatId: number
      }, { data: { completion: string; id: string } }
      >('/Chat/ChatSSE', {
        params: {
          prompt: message,
          chatId: +uuid,
        },
        controller,
      })
      const messages: string[] = []
      const msgStr = messages.join('')
      for await (const data of res) {
        messages.push(data.data.completion)
        currentChat.text = messages.join('')
        currentChat.loading = false
        currentChat.conversationOptions = { parentMessageId: data.data.id }
      }
      currentChat.loading = false
      speaker.speakTextAsync(msgStr.replace(spokenText, '').trim())
      spokenText = msgStr
      scrollToBottom()
    }

    await fetchChatAPIOnce()
  }
  catch (error: any) {
    const errorMessage = error?.message ?? t('common.wrong')
    currentChat.loading = false
    if (error.message === 'canceled') {
      scrollToBottom()
      return
    }

    if (currentChat?.text && currentChat.text !== '') {
      currentChat.text = `${currentChat.text}\n[${errorMessage}]`
      currentChat.error = false
      return
    }

    currentChat.text = errorMessage
    scrollToBottom()
  }
  finally {
    loading.value = false
  }
}

async function onRegenerate(index: number) {
  if (loading.value)
    return

  controller = new AbortController()

  const { requestOptions } = dataSources.value[index]

  let message = requestOptions?.prompt ?? ''

  let options: Chat.ConversationRequest = {}

  if (requestOptions.options)
    options = { ...requestOptions.options }

  loading.value = true

  updateChat(
    +uuid,
    index,
    {
      dateTime: new Date().toLocaleString(),
      text: '',
      inversion: false,
      error: false,
      loading: true,
      conversationOptions: null,
      requestOptions: { prompt: message, ...options },
    },
  )

  try {
    let lastText = ''
    let spokenText = ''
    const speaker = new sdk.SpeechSynthesizer(speechConfig)
    const fetchChatAPIOnce = async () => {
      await fetchChatAPIProcess<Chat.ConversationResponse>({
        prompt: message,
        options,
        signal: controller.signal,
        onDownloadProgress: ({ event }) => {
          const xhr = event.target
          const { responseText } = xhr
          // Always process the final line
          const lastIndex = responseText.lastIndexOf('\n')
          let chunk = responseText
          if (lastIndex !== -1)
            chunk = responseText.substring(lastIndex)
          try {
            const data = JSON.parse(chunk)
            updateChat(
              +uuid,
              index,
              {
                dateTime: new Date().toLocaleString(),
                text: lastText + data.text ?? '',
                inversion: false,
                error: false,
                loading: false,
                conversationOptions: { conversationId: data.conversationId, parentMessageId: data.id },
                requestOptions: { prompt: message, ...options },
              },
            )

            if (openLongReply && data.detail.choices[0].finish_reason === 'length') {
              options.parentMessageId = data.id
              lastText = data.text
              message = ''
              return fetchChatAPIOnce()
            }
            if (data.detail.choices[0].finish_reason === 'stop' || data.text.match(/[.!?,]\s*$/)) {
              speaker.speakTextAsync(data.text.replace(spokenText, '').trim())
              spokenText = data.text
            }
          }
          catch (error) {
            //
          }
        },
      })
    }
    await fetchChatAPIOnce()
  }
  catch (error: any) {
    if (error.message === 'canceled') {
      updateChatSome(
        +uuid,
        index,
        {
          loading: false,
        },
      )
      return
    }

    const errorMessage = error?.message ?? t('common.wrong')

    updateChat(
      +uuid,
      index,
      {
        dateTime: new Date().toLocaleString(),
        text: errorMessage,
        inversion: false,
        error: true,
        loading: false,
        conversationOptions: null,
        requestOptions: { prompt: message, ...options },
      },
    )
  }
  finally {
    loading.value = false
  }
}

function handleExport() {
  if (loading.value)
    return

  const d = dialog.warning({
    title: t('chat.exportImage'),
    content: t('chat.exportImageConfirm'),
    positiveText: t('common.yes'),
    negativeText: t('common.no'),
    onPositiveClick: async () => {
      try {
        d.loading = true
        const ele = document.getElementById('image-wrapper')
        const canvas = await html2canvas(ele as HTMLDivElement, {
          useCORS: true,
        })
        const imgUrl = canvas.toDataURL('image/png')
        const tempLink = document.createElement('a')
        tempLink.style.display = 'none'
        tempLink.href = imgUrl
        tempLink.setAttribute('download', 'chat-shot.png')
        if (typeof tempLink.download === 'undefined')
          tempLink.setAttribute('target', '_blank')

        document.body.appendChild(tempLink)
        tempLink.click()
        document.body.removeChild(tempLink)
        window.URL.revokeObjectURL(imgUrl)
        d.loading = false
        ms.success(t('chat.exportSuccess'))
        Promise.resolve()
      }
      catch (error: any) {
        ms.error(t('chat.exportFailed'))
      }
      finally {
        d.loading = false
      }
    },
  })
}

function handleDelete(index: number) {
  if (loading.value)
    return

  dialog.warning({
    title: t('chat.deleteMessage'),
    content: t('chat.deleteMessageConfirm'),
    positiveText: t('common.yes'),
    negativeText: t('common.no'),
    onPositiveClick: () => {
      chatStore.deleteChatByUuid(+uuid, index)
    },
  })
}

// function handleClear() {
//   if (loading.value)
//     return

//   dialog.warning({
//     title: t('chat.clearChat'),
//     content: t('chat.clearChatConfirm'),
//     positiveText: t('common.yes'),
//     negativeText: t('common.no'),
//     onPositiveClick: () => {
//       chatStore.clearChatByUuid(+uuid)
//     },
//   })
// }

function handleEnter(event: KeyboardEvent) {
  if (!isMobile.value) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSubmit()
    }
  }
  else {
    if (event.key === 'Enter' && event.ctrlKey) {
      event.preventDefault()
      handleSubmit()
    }
  }
}

function handleStop() {
  if (loading.value) {
    controller.abort()
    loading.value = false
  }
}

// 可优化部分
// 搜索选项计算，这里使用value作为索引项，所以当出现重复value时渲染异常(多项同时出现选中效果)
// 理想状态下其实应该是key作为索引项,但官方的renderOption会出现问题，所以就需要value反renderLabel实现
const searchOptions = computed(() => {
  if (prompt.value.startsWith('/')) {
    return promptTemplate.value.filter((item: { key: string }) => item.key.toLowerCase().includes(prompt.value.substring(1).toLowerCase())).map((obj: { value: any }) => {
      return {
        label: obj.value,
        value: obj.value,
      }
    })
  }
  else {
    return []
  }
})

// value反渲染key
const renderOption = (option: { label: string }) => {
  for (const i of promptTemplate.value) {
    if (i.value === option.label)
      return [i.key]
  }
  return []
}

const placeholder = computed(() => {
  if (isMobile.value)
    return t('chat.placeholderMobile')
  return t('chat.placeholder')
})

const buttonDisabled = computed(() => {
  return loading.value || !prompt.value || prompt.value.trim() === ''
})

const footerClass = computed(() => {
  let classes = ['p-4']
  if (isMobile.value)
    classes = ['sticky', 'left-0', 'bottom-0', 'right-0', 'p-2', 'pr-3', 'overflow-hidden']
  return classes
})

onMounted(() => {
  scrollToBottom()
})

onUnmounted(() => {
  if (loading.value)
    controller.abort()
})

watchEffect(async () => {
  const chatId = +(route.params as { uuid: string }).uuid
  if (chatId) {
    const { error, data } = await client.query({
      operationName: 'Chat/GetMyHistoryChats',
      input: {
        chatId,
      },
    })
    if (error) {
      dataSources.value = []
    }
    else {
      dataSources.value = data!.data!.map<Chat.Chat>(item => ({
        dateTime: item.createdAt!,
        text: item.text!,
        loading: !item.text,
        error: false,
        inversion: !item.parentMessageId,
        requestOptions: { prompt: item.text!, options: {} },
        conversationOptions: item.parentMessageId ? { parentMessageId: item.parentMessageId.toString() } : undefined,
      }))
    }
  }
  else {
    dataSources.value = []
  }
})
</script>

<template>
  <div class="flex flex-col h-full w-full">
    <HeaderComponent
      v-if="isMobile"
      :using-context="usingContext"
      @export="handleExport"
      @toggle-using-context="toggleUsingContext"
    />
    <main class="flex-1 overflow-hidden">
      <div
        id="scrollRef"
        ref="scrollRef"
        class="h-full overflow-hidden overflow-y-auto"
      >
        <div
          id="image-wrapper"
          class="m-auto max-w-screen-xl w-full dark:bg-[#101014]"
          :class="[isMobile ? 'p-2' : 'p-4']"
        >
          <template v-if="!dataSources.length">
            <div class="flex mt-4 text-center text-neutral-300 items-center justify-center">
              <SvgIcon icon="ri:bubble-chart-fill" class="mr-2 text-3xl" />
              <span>Aha~</span>
            </div>
          </template>
          <template v-else>
            <div>
              <Message
                v-for="(item, index) of dataSources"
                :key="index"
                :date-time="item.dateTime"
                :text="item.text"
                :inversion="item.inversion"
                :error="item.error"
                :loading="item.loading"
                @regenerate="onRegenerate(index)"
                @delete="handleDelete(index)"
                @speak="speakOnce(item.text)"
              />
              <div class="flex bottom-0 left-0 sticky justify-center">
                <NButton v-if="loading" type="warning" @click="handleStop">
                  <template #icon>
                    <SvgIcon icon="ri:stop-circle-line" />
                  </template>
                  Stop Responding
                </NButton>
              </div>
            </div>
          </template>
        </div>
      </div>
    </main>
    <footer :class="footerClass">
      <div class="m-auto max-w-screen-xl w-full">
        <div class="flex space-x-2 items-center justify-between">
          <!-- <HoverButton @click="handleClear">
            <span class="text-xl text-[#4f555e] dark:text-white">
              <SvgIcon icon="ri:delete-bin-line" />
            </span>
          </HoverButton>
          <HoverButton v-if="!isMobile" @click="handleExport">
            <span class="text-xl text-[#4f555e] dark:text-white">
              <SvgIcon icon="ri:download-2-line" />
            </span>
          </HoverButton>
          <HoverButton v-if="!isMobile" @click="toggleUsingContext">
            <span class="text-xl" :class="{ 'text-[#4b9e5f]': usingContext, 'text-[#a8071a]': !usingContext }">
              <SvgIcon icon="ri:chat-history-line" />
            </span>
          </HoverButton> -->
          <NAutoComplete v-model:value="prompt" :options="searchOptions" :render-label="renderOption">
            <template #default="{ handleInput, handleBlur, handleFocus }">
              <NInput
                v-model:value="prompt"
                type="textarea"
                :placeholder="placeholder"
                :autosize="{ minRows: 1, maxRows: isMobile ? 4 : 8 }"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                @keypress="handleEnter"
              />
            </template>
          </NAutoComplete>
          <NButton type="primary" :disabled="buttonDisabled" @click="handleSubmit">
            <template #icon>
              <span class="dark:text-black">
                <SvgIcon icon="ri:send-plane-fill" />
              </span>
            </template>
          </NButton>
          <NButton class="!w-[60px]" block @click="voiceInput">
            <template #icon>
              <span v-if="!speaking" class="dark:text-black">
                <SvgIcon icon="mdi:microphone" />
              </span>
              <NSpin v-if="speaking" class="scale-50" size="small" />
            </template>
          </NButton>
        </div>
      </div>
    </footer>
  </div>
</template>
