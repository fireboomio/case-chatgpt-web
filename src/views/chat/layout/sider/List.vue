<script setup lang='ts'>
import { computed } from 'vue'
import { NInput, NPopconfirm, NScrollbar, useMessage } from 'naive-ui'
import { useRoute } from 'vue-router'
import { SvgIcon } from '@/components/common'
import { useAppStore, useChatStore } from '@/store'
import { useBasicLayout } from '@/hooks/useBasicLayout'

const { isMobile } = useBasicLayout()

const message = useMessage()

const appStore = useAppStore()
const chatStore = useChatStore()
const route = useRoute()
// const uuid = computed(() => route.params.uuid)

const dataSources = computed(() => chatStore.history)
if (route.params.uuid)
  chatStore.setActive(Number(route.params.uuid))

async function handleSelect({ uuid }: Chat.History) {
  if (isActive(uuid))
    return

  if (chatStore.active)
    chatStore.resetEdit(chatStore.active)
  await chatStore.setActive(uuid)

  if (isMobile.value)
    appStore.setSiderCollapsed(true)
}

function handleEdit({ uuid, title }: Chat.History, isEdit: boolean, event?: MouseEvent) {
  event?.stopPropagation()
  if (!title && !isEdit)
    return message.error('名称不能为空')

  chatStore.updateHistory(uuid, { isEdit })
}

function handleDelete(index: number, event?: MouseEvent | TouchEvent) {
  event?.stopPropagation()
  chatStore.deleteHistory(index)
}

function handleEnter({ uuid, title }: Chat.History, isEdit: boolean, event: KeyboardEvent) {
  event?.stopPropagation()
  if (event.key === 'Enter') {
    if (!title) {
      return message.error('名称不能为空')
    }
    chatStore.updateHistory(uuid, {isEdit})
  }
}

function isActive(uuid: number) {
  return chatStore.active === uuid
}
</script>

<template>
  <NScrollbar class="px-4">
    <div class="flex flex-col text-sm gap-2">
      <template v-if="!dataSources.length">
        <div class="flex flex-col mt-4 text-center text-neutral-300 items-center">
          <SvgIcon icon="ri:inbox-line" class="mb-2 text-3xl" />
          <span>{{ $t('common.noData') }}</span>
        </div>
      </template>
      <template v-else>
        <div v-for="(item, index) of dataSources" :key="index">
          <a
            class="border rounded-md cursor-pointer flex py-3 px-3 gap-3 relative items-center break-all group dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-[#24272e]"
            :class="isActive(item.uuid) && ['border-[#4b9e5f]', 'bg-neutral-100', 'text-[#4b9e5f]', 'dark:bg-[#24272e]', 'dark:border-[#4b9e5f]', 'pr-14']"
            @click="handleSelect(item)"
          >
            <span>
              <SvgIcon icon="ri:message-3-line" />
            </span>
            <div class="flex-1 text-ellipsis relative overflow-hidden break-all whitespace-nowrap">
              <NInput
                v-if="item.isEdit"
                v-model:value="item.title"
                size="tiny"
                @keypress="handleEnter(item, false, $event)"
              />
              <span v-else>{{ item.title }}</span>
            </div>
            <div v-if="isActive(item.uuid)" class="flex right-1 z-10 absolute visible">
              <template v-if="item.isEdit">
                <button class="p-1" @click="handleEdit(item, false, $event)">
                  <SvgIcon icon="ri:save-line" />
                </button>
              </template>
              <template v-else>
                <button class="p-1">
                  <SvgIcon icon="ri:edit-line" @click="handleEdit(item, true, $event)" />
                </button>
                <NPopconfirm placement="bottom" @positive-click="handleDelete(index, $event)">
                  <template #trigger>
                    <button class="p-1">
                      <SvgIcon icon="ri:delete-bin-line" />
                    </button>
                  </template>
                  {{ $t('chat.deleteHistoryConfirm') }}
                </NPopconfirm>
              </template>
            </div>
          </a>
        </div>
      </template>
    </div>
  </NScrollbar>
</template>
