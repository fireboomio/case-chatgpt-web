<script setup lang='ts'>
import { ref } from 'vue'
import { NButton, NModal, useMessage } from 'naive-ui'
import { useAuthStore } from '@/store'
import Icon403 from '@/icons/403.vue'
import fbClient from '@/services'

interface Props {
  visible: boolean
}

defineProps<Props>()

const authStore = useAuthStore()

const ms = useMessage()

const loading = ref(false)
const token = ref('')

async function handleVerify() {
  fbClient.login('authing')
}

function handlePress(event: KeyboardEvent) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    handleVerify()
  }
}
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
