<script lang="ts" setup>

import {NAutoComplete, NButton, NInput, useDialog, useMessage} from 'naive-ui'
interface Props {
  usingContext: boolean
}

interface Emit {
  (ev: 'export'): void
  (ev: 'toggleUsingContext'): void
}

defineProps<Props>()

const emit = defineEmits<Emit>()

</script>

<template>
  <div class="voice-input">
    <div class="mask"></div>
    录音中
    <Nbutton class="stop-btn">完成</Nbutton>
  </div>
</template>
