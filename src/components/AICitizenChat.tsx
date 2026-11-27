import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Copy,
  Check,
  Sparkles,
  User,
  Bot,
  RefreshCw,
} from 'lucide-react';
import { ChatMessage, Language } from '../types';

interface AICitizenChatProps {
  language: Language;
  onPlayAudio: (text: string) => void;
  isPlayingAudio: boolean;
  onStopAudio: () => void;
}

export const AICitizenChat: React.FC<AICitizenChatProps> = ({
  language,
  onPlayAudio,
  isPlayingAudio,
  onStopAudio,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      role: 'assistant',
      content:
        language === 'ps'
          ? 'سلام وروره / خورې! زه ستاسو د پېښور ښاري مرستیال (مرسته) یم. تاسو کولای شئ د پاسپورټ جوړولو، د پولیس پاکۍ (کرکټر سرټیفکیټ)، بي آر ټي بس تمځایونو، روغتون او صحت کارډ، نادرا او پوهنتون په اړه په خپله خوږه پښتو یا هره ژبه پوښتنه وکړئ.'
          : language === 'ur'
          ? 'السلام علیکم! میں آپ کا پشاور سٹیزن اسسٹنٹ (مرستہ) ہوں۔ آپ پاسپورٹ دفاتر، پولیس کلیئرنس، بی آر ٹی بس روٹس، ہسپتالوں، نادرا اور تعلیمی اسناد کے بارے میں کوئی بھی سوال پوچھ سکتے ہیں۔'
          : 'Welcome! I am Mrasta, your Peshawar civic companion. Ask me any question regarding passport offices, police clearance, Zu BRT bus routes, hospitals & Sehat Card, or university attestation in Pashto, Urdu, or English.',
      timestamp: new Date(),
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [autoSpeak, setAutoSpeak] = useState(true);

  const sampleQuestions = [
    {
      ps: 'د کوهاټ اډې نه ليډي ریډینګ روغتون ته د رکشا کرایه څو ده؟',
      ur: 'کوہاٹ اڈے سے ایل آر ایچ تک رکشے کا کتنا کرایہ ہے؟',
      en: 'What is the rickshaw fare from Kohat Adda to LRH hospital?',
    },
    {
      ps: 'پېښور کې د ناروغانو د پایوازانو لپاره ارزانه مسافرخانې یا پناه ګاه چیرته ده؟',
      ur: 'پشاور میں مریضوں کے تیمارداروں کے لیے سستے ہوٹل یا پناہ گاہ کہاں ہیں؟',
      en: 'Where are cheap hotels or free Panahgah for patient attendants in Peshawar?',
    },
    {
      ps: 'نمک منډۍ کې چرسی ټکه او دم پخت چیرته دي او کله خلاص وي؟',
      ur: 'نمک منڈی میں چرسی تکہ اور کڑاہی کے اوقات کیا ہیں؟',
      en: 'Where is Charsi Tikka in Namak Mandi and what are the hours?',
    },
    {
      ps: 'د حیات آباد پاسپورټ دفتر ته د ټیکسي یا بي آر ټي لاره او فیس راوښایه',
      ur: 'حیات آباد پاسپورٹ آفس کا ٹیکسی یا بی آر ٹی روٹ اور فیس کیا ہے؟',
      en: 'How to reach Hayatabad Passport Office and what are the fees?',
    },
    {
      ps: 'د پولیس کرکټر سرټیفکیټ لپاره کوم اسناد او څو ورځې وخت پکار دی؟',
      ur: 'پولیس کلیئرنس سرٹیفکیٹ کے لیے کیا کاغذات درکار ہیں؟',
      en: 'What documents are required for a Police Character Certificate?',
    },
    {
      ps: 'په پېښور کې چنګچي رکشا او ټيکسي څنګه پیدا کړو او څومره پیسې اخلي؟',
      ur: 'پشاور میں چنگچی اور ٹیکسی کہاں سے ملتے ہیں اور کتنا کرایہ ہوتا ہے؟',
      en: 'Where to find Qingqis and taxis in Peshawar and what are their rates?',
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string, wasVoiceInstruction: boolean = false) => {
    const userText = (textToSend || input).trim();
    if (!userText || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: userText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText,
          language,
          conversationHistory: messages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          generateAudio: wasVoiceInstruction || autoSpeak,
        }),
      });

      if (!response.ok) {
        throw new Error('Server returned an error');
      }

      const data = await response.json();
      const replyContent = data.reply || 'بخښنه غواړم، هیڅ ځواب ترلاسه نه شو.';
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: replyContent,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);

      // If audio was instructed or auto-speak is enabled, immediately read response aloud in Pashto/Urdu!
      if (wasVoiceInstruction || autoSpeak) {
        if (data.audioUrl) {
          const directAudio = new Audio(data.audioUrl);
          directAudio.play().catch((e) => {
            console.warn('Direct audio play failed, using speech synthesis fallback', e);
            onPlayAudio(replyContent);
          });
        } else {
          onPlayAudio(replyContent);
        }
      }
    } catch (err) {
      console.error('Chat error:', err);
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content:
          language === 'ps'
            ? 'بخښنه غواړم، له سرور سره اړیکه ونه شوه. مهرباني وکړئ لږ وروسته بیا هڅه وکړئ.'
            : language === 'ur'
            ? 'معذرت، رابطہ قائم نہیں ہو سکا۔ برائے مہربانی دوبارہ کوشش کریں۔'
            : 'Sorry, could not connect to the assistant server. Please try again.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Voice recording using Web Speech Recognition
  const toggleSpeechRecognition = () => {
    if (isRecording) {
      setIsRecording(false);
      return;
    }

    const SpeechRecognition =
      (window as unknown as { SpeechRecognition?: any }).SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: any }).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        language === 'ps'
          ? 'ستاسو په براوزر کې د غږ پیژندنه نشته، مهرباني وکړئ په لیکلو وپوښتئ.'
          : 'آپ کا براؤزر وائس ریکگنیشن سپورٹ نہیں کرتا۔ برائے مہربانی لکھ کر پوچھیں۔'
      );
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = language === 'ps' ? 'ps' : language === 'ur' ? 'ur-PK' : 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInput(transcript);
          // Pass wasVoiceInstruction = true so the response is automatically read aloud in Pashto/Urdu!
          handleSendMessage(transcript, true);
        }
      };

      recognition.onerror = () => {
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.start();
    } catch (e) {
      console.warn('Speech recognition error:', e);
      setIsRecording(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <section className="py-8 md:py-12 bg-[#FAFAF8] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ps' ? 'د پېښور هوښیار مرستیال' : language === 'ur' ? 'پشاور سٹیزن اسسٹنٹ' : 'Gemini-Powered Civic AI'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {language === 'ps'
              ? 'هر ډول پوښتنه په پښتو او اردو کې وپوښتئ'
              : language === 'ur'
              ? 'سرکاری کاموں کے متعلق کوئی بھی سوال پوچھیں'
              : 'Ask Mrasta Any Peshawar Civic Question'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
            {language === 'ps'
              ? 'تاسو کولای شئ په غږ یا لیکلو سره د پاسپورټ، تاڼې کلیرنس، بي آر ټي، او روغتونونو لارښوونه وغواړئ.'
              : language === 'ur'
              ? 'مائیک پر بول کر یا لکھ کر مکمل رہنمائی حاصل کریں۔'
              : 'Voice-enabled assistance tailored for low-literacy travelers and local residents.'}
          </p>
        </div>

        {/* Chat Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md flex flex-col h-[660px] overflow-hidden">
          {/* Internal Chat Header Bar */}
          <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span className="text-xs font-bold text-slate-900">
                {language === 'ps' ? 'مرسته ژوندی مرستیال' : language === 'ur' ? 'مرستہ لائیو اسسٹنٹ' : 'Mrasta Live AI'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Auto Voice Readout Toggle */}
              <button
                type="button"
                onClick={() => setAutoSpeak(!autoSpeak)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  autoSpeak
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    : 'bg-slate-200/80 text-slate-600'
                }`}
              >
                {autoSpeak ? <Volume2 className="w-3.5 h-3.5 text-emerald-800" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
                <span>
                  {autoSpeak
                    ? language === 'ps'
                      ? 'غږیز ځواب: فعال'
                      : 'آڈیو جواب: آن'
                    : language === 'ps'
                    ? 'غږیز ځواب: بند'
                    : 'آڈیو جواب: آف'}
                </span>
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
            {messages.map((msg) => {
              const isAssistant = msg.role === 'assistant';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${
                    isAssistant ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {isAssistant && (
                    <div className="w-8 h-8 rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-xs">
                      مر
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 text-sm leading-relaxed shadow-xs ${
                      isAssistant
                        ? 'bg-slate-50 border border-slate-200 text-slate-900'
                        : 'bg-emerald-800 text-white'
                    }`}
                  >
                    <div className="whitespace-pre-wrap font-sans">{msg.content}</div>

                    {/* Action Bar for Assistant Messages */}
                    {isAssistant && (
                      <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between gap-3 text-xs text-slate-500">
                        <span className="text-[11px] font-mono">
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onPlayAudio(msg.content)}
                            title={language === 'ps' ? 'په غږ کې واورئ' : language === 'ur' ? 'آواز سنیں' : 'Listen aloud'}
                            className="p-1.5 hover:text-emerald-900 hover:bg-slate-200/60 rounded-md transition-colors flex items-center gap-1"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                            <span className="text-[11px] font-semibold">{language === 'ps' ? 'واورئ' : language === 'ur' ? 'سنیں' : 'Listen'}</span>
                          </button>

                          <button
                            onClick={() => handleCopy(msg.id, msg.content)}
                            title="Copy text"
                            className="p-1.5 hover:text-emerald-900 hover:bg-slate-200/60 rounded-md transition-colors flex items-center gap-1"
                          >
                            {copiedId === msg.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-700" />
                                <span className="text-[11px] text-emerald-700 font-semibold">{language === 'ps' ? 'کاپي شو' : 'کاپی'}</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span className="text-[11px] font-semibold">{language === 'ps' ? 'کاپي' : 'کاپی'}</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {!isAssistant && (
                    <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0 text-xs font-bold">
                  مر
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-600 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 animate-spin text-emerald-800" />
                  <span>
                    {language === 'ps'
                      ? 'مرسته ستاسو لپاره مالومات چمتو کوي...'
                      : language === 'ur'
                      ? 'مرستہ معلومات تلاش کر رہا ہے...'
                      : 'Mrasta is preparing your guidance...'}
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Chips Bar */}
          <div className="p-2 sm:px-4 bg-slate-50 border-t border-slate-100 flex items-center gap-2 overflow-x-auto text-xs whitespace-nowrap">
            <span className="text-slate-500 font-medium shrink-0">
              {language === 'ps' ? 'عامې پوښتنې:' : language === 'ur' ? 'اکثر پوچھے جانے والے سوالات:' : 'Suggested:'}
            </span>
            {sampleQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q[language])}
                className="px-2.5 py-1 bg-white hover:bg-emerald-50 hover:text-emerald-900 border border-slate-200 rounded-lg text-slate-700 font-medium transition-colors shrink-0"
              >
                {q[language]}
              </button>
            ))}
          </div>

          {/* Input Control Box */}
          <div className="p-3 sm:p-4 bg-white border-t border-slate-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              {/* Voice Input Trigger */}
              <button
                type="button"
                onClick={toggleSpeechRecognition}
                title={isRecording ? 'ریکارډ بند کړئ' : 'په غږ وپوښتئ'}
                className={`min-h-[44px] min-w-[44px] p-2.5 rounded-xl border flex items-center justify-center transition-all ${
                  isRecording
                    ? 'bg-rose-500 text-white border-rose-600 animate-pulse'
                    : 'bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 border-slate-200'
                }`}
              >
                {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  isRecording
                    ? language === 'ps'
                      ? 'واوریدل روان دي... خبرې وکړئ'
                      : 'آواز سنی جا رہی ہے... بولیں'
                    : language === 'ps'
                    ? 'خپله پوښتنه دلته ولیکئ یا په مایک خبرې وکړئ...'
                    : language === 'ur'
                    ? 'اپنا سوال لکھیں یا مائیک پر بولیں...'
                    : 'Ask your civic question in Pashto, Urdu, or English...'
                }
                className="flex-1 py-3 px-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition-all"
              />

              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="min-h-[44px] min-w-[44px] px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 disabled:opacity-40 text-white font-semibold text-sm flex items-center justify-center transition-colors shadow-xs"
              >
                <Send className="w-4 h-4 rtl:rotate-180" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
