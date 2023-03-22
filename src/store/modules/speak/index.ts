import { defineStore } from 'pinia'
import * as sdk from 'microsoft-cognitiveservices-speech-sdk'
import type { SpeechConfig } from 'microsoft-cognitiveservices-speech-sdk'

export const useSpeakStore = defineStore('speak-store', {
  state: (): { speechConfig: SpeechConfig | null } => ({
    speechConfig: null,
  }),
  actions: {
    async getConfig() {
      // const { data } = await fetchSpeakConfig()
      // sdk.SpeechConfig.fromEndpoint()
      this.speechConfig = sdk.SpeechConfig.fromSubscription(import.meta.env.VITE_SPEECH_KEY, import.meta.env.VITE_SPEECH_REGION)
      this.speechConfig.speechSynthesisVoiceName = 'en-US-JennyNeural'
      this.speechConfig.speechRecognitionLanguage = 'en-US'
    },
  },
})
