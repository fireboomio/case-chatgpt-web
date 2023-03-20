import type * as sdk from 'microsoft-cognitiveservices-speech-sdk'

export function startSpeak(synthesizer: sdk.SpeechSynthesizer, str?: string) {
  const list: string[] = []
  let speaking = false

  function check() {
    if (list.length > 0 && !speaking) {
      speaking = true
      console.log('speak', list.join(''))
      synthesizer.speakTextAsync(list.join(''), () => {
        speaking = false
        check()
      })
      list.length = 0
    }
  }

  if (str) {
    list.push(str)
  }
  check()

  return function speak(str: string) {
    list.push(str)
    check()
  }
}
