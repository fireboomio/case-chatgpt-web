<script setup lang='ts'>
import { ref } from 'vue'
import AvatarComponent from './Avatar.vue'
import TextComponent from './Text.vue'
import { SvgIcon } from '@/components/common'

interface Props {
  dateTime?: string
  text?: string
  inversion?: boolean
  error?: boolean
  loading?: boolean
}

interface Emit {
  (ev: 'regenerate'): void
  (ev: 'delete'): void
  (ev: 'speak'): void
}

defineProps<Props>()

const emit = defineEmits<Emit>()

// const { iconRender } = useIconRender()

const textRef = ref<HTMLElement>()

// const options = [
//   {
//     label: t('chat.copy'),
//     key: 'copyText',
//     icon: iconRender({ icon: 'ri:file-copy-2-line' }),
//   },
//   {
//     label: t('common.delete'),
//     key: 'delete',
//     icon: iconRender({ icon: 'ri:delete-bin-line' }),
//   },
// ]

// function handleSelect(key: 'copyRaw' | 'copyText' | 'delete') {
//   switch (key) {
//     case 'copyText':
//       copyText({ text: props.text ?? '' })
//       return
//     case 'delete':
//       emit('delete')
//   }
// }

// function handleRegenerate() {
//   emit('regenerate')
// }
</script>

<template>
  <div class="flex mb-6 w-full overflow-hidden" :class="[{ 'flex-row-reverse': inversion }]">
    <div
      class="rounded-full flex flex-shrink-0 h-8 items-center justify-center overflow-hidden basis-8"
      :class="[inversion ? 'ml-2' : 'mr-2']"
    >
      <AvatarComponent :image="inversion" />
    </div>
    <div class="text-sm overflow-hidden " :class="[inversion ? 'items-end' : 'items-start']">
      <p class="text-xs text-[#b4bbc4]" :class="[inversion ? 'text-right' : 'text-left']">
        {{ dateTime }}
      </p>
      <div
        class="flex mt-2 gap-1 items-end"
        :class="[inversion ? 'flex-row-reverse' : 'flex-row']"
      >
        <TextComponent
          ref="textRef"
          :inversion="inversion"
          :error="error"
          :text="text"
          :loading="loading"
        />
        <div class="flex flex-col">
          <button
            v-if="!inversion"
            class="mb-2 transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-300"
            @click="emit('speak')"
          >
            <SvgIcon icon="ph:speaker-high-bold" />
          </button>
          <!--          <button -->
          <!--            v-if="!inversion" -->
          <!--            class="mb-2 transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-300" -->
          <!--            @click="handleRegenerate" -->
          <!--          > -->
          <!--            <SvgIcon icon="ri:restart-line" /> -->
          <!--          </button> -->
          <!--          <NDropdown :placement="!inversion ? 'right' : 'left'" :options="options" @select="handleSelect"> -->
          <!--            <button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"> -->
          <!--              <SvgIcon icon="ri:more-2-fill" /> -->
          <!--            </button> -->
          <!--          </NDropdown> -->
        </div>
      </div>
    </div>
  </div>
</template>
