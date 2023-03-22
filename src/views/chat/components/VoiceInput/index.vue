<script lang="ts" setup>
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
    <div class="mask" />
    录音中
    <Nbutton class="stop-btn">
      完成
    </Nbutton>
  </div>
</template>
