let currentAudio: HTMLAudioElement | null = null;

export async function playTextToSpeech(
  text: string,
  language: 'ps' | 'ur' | 'en' = 'en',
  onStart?: () => void,
  onEnd?: () => void,
  onError?: (err: unknown) => void
): Promise<void> {
  // Stop any currently playing audio
  stopTextToSpeech();

  try {
    onStart?.();

    // 1. Attempt server-side Gemini Flash Lite TTS
    const response = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, language }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.audioUrl) {
        currentAudio = new Audio(data.audioUrl);
        currentAudio.onended = () => {
          currentAudio = null;
          onEnd?.();
        };
        currentAudio.onerror = (e) => {
          console.warn('Audio playback error, falling back to speech synthesis', e);
          fallbackSpeechSynthesis(text, language, onEnd);
        };
        await currentAudio.play();
        return;
      }
    }

    // 2. Client-side fallback if server audio isn't returned
    fallbackSpeechSynthesis(text, language, onEnd);
  } catch (err) {
    console.warn('TTS fetch failed, falling back to Web Speech API', err);
    fallbackSpeechSynthesis(text, language, onEnd);
  }
}

function fallbackSpeechSynthesis(
  text: string,
  language: 'ps' | 'ur' | 'en',
  onEnd?: () => void
) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    onEnd?.();
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);

  // Match voice by language
  const langCode = language === 'ps' ? 'ps' : language === 'ur' ? 'ur-PK' : 'en-US';
  utterance.lang = langCode;
  utterance.rate = 0.95; // Slightly slower for clear comprehension

  utterance.onend = () => {
    onEnd?.();
  };
  utterance.onerror = () => {
    onEnd?.();
  };

  window.speechSynthesis.speak(utterance);
}

export function stopTextToSpeech(): void {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
