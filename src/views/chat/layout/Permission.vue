<script setup lang='ts'>
import { ref, watchEffect } from 'vue'
import { NButton, NModal } from 'naive-ui'
import Icon403 from '@/icons/403.vue'
import fbClient from '@/services'
import { useChatStore } from '@/store'

interface Props {
  visible: boolean
}

const props = defineProps<Props>()

// const authStore = useAuthStore()
const chatStore = useChatStore()

// const ms = useMessage()

const loading = ref(false)
// const token = ref('')

async function handleVerify() {
  fbClient.login('casdoor')
}

// function handlePress(event: KeyboardEvent) {
//   if (event.key === 'Enter' && !event.shiftKey) {
//     event.preventDefault()
//     handleVerify()
//   }
// }
watchEffect(() => {
  if (props.visible) {
    // const router = useRouter()
    // router.push('/')
    chatStore.setActive(null)
  }
})
</script>

<template>
  <NModal :show="visible" style="width: 90%; max-width: 640px">
    <div class="bg-white rounded p-10 dark:bg-slate-800">
      <div class="space-y-4">
        <header class="space-y-2">
          <h2 class="font-bold text-center text-2xl text-slate-800 dark:text-neutral-200">
            403
          </h2>
          <p class="text-base text-center text-slate-500 dark:text-slate-500">
            {{ $t('common.unauthorizedTips') }}
          </p>
          <Icon403 class="m-auto w-[200px]" />
        </header>
        <NButton
          block
          type="primary"
          :loading="loading"
          @click="handleVerify"
        >
          {{ $t('common.verify') }}
        </NButton>
      </div>
    </div>
  </NModal>
</template>
