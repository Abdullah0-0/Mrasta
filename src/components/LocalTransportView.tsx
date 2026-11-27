import React, { useState } from 'react';
import {
  Car,
  Users,
  CarFront,
  BusFront,
  Smartphone,
  Volume2,
  DollarSign,
  Compass,
  MapPin,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from 'lucide-react';
import { LOCAL_TRANSPORT_OPTIONS, TransportOption } from '../data/localTransport';
import { Language } from '../types';

interface LocalTransportViewProps {
  language: Language;
  onPlayAudio: (text: string) => void;
  isPlayingAudio: boolean;
  onStopAudio: () => void;
}

export const LocalTransportView: React.FC<LocalTransportViewProps> = ({
  language,
  onPlayAudio,
  isPlayingAudio,
  onStopAudio,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string>('auto-rickshaw');
  const [fareOrigin, setFareOrigin] = useState<string>('haji-camp');
  const [fareDest, setFareDest] = useState<string>('lrh');

  const selectedOption =
    LOCAL_TRANSPORT_OPTIONS.find((o) => o.id === selectedOptionId) ||
    LOCAL_TRANSPORT_OPTIONS[0];

  // Quick Fare Estimator Matrix
  const fareEstimatesMatrix: Record<string, Record<string, { rickshaw: string; taxi: string; qingqi: string }>> = {
    'haji-camp': {
      lrh: { rickshaw: 'Rs. 300 - 400', taxi: 'Rs. 700 - 900', qingqi: 'Rs. 40 / seat' },
      saddar: { rickshaw: 'Rs. 350 - 450', taxi: 'Rs. 800 - 1,000', qingqi: 'Rs. 50 / seat' },
      kth: { rickshaw: 'Rs. 500 - 650', taxi: 'Rs. 1,000 - 1,300', qingqi: 'Rs. 60 / seat' },
      karkhano: { rickshaw: 'Rs. 700 - 900', taxi: 'Rs. 1,400 - 1,800', qingqi: 'Rs. 70 / seat (Wagon)' },
      hayatabad: { rickshaw: 'Rs. 700 - 900', taxi: 'Rs. 1,300 - 1,600', qingqi: 'Rs. 70 / seat' },
    },
    karkhano: {
      lrh: { rickshaw: 'Rs. 700 - 900', taxi: 'Rs. 1,400 - 1,800', qingqi: 'Rs. 70 / seat' },
      saddar: { rickshaw: 'Rs. 600 - 750', taxi: 'Rs. 1,100 - 1,400', qingqi: 'Rs. 60 / seat' },
      kth: { rickshaw: 'Rs. 350 - 450', taxi: 'Rs. 700 - 900', qingqi: 'Rs. 40 / seat' },
      karkhano: { rickshaw: 'Rs. 150', taxi: 'Rs. 300', qingqi: 'Rs. 30 / seat' },
      hayatabad: { rickshaw: 'Rs. 250 - 350', taxi: 'Rs. 600 - 800', qingqi: 'Rs. 30 / seat' },
    },
    'kohat-adda': {
      lrh: { rickshaw: 'Rs. 350 - 450', taxi: 'Rs. 800 - 1,000', qingqi: 'Rs. 50 / seat' },
      saddar: { rickshaw: 'Rs. 300 - 400', taxi: 'Rs. 700 - 900', qingqi: 'Rs. 40 / seat' },
      kth: { rickshaw: 'Rs. 450 - 600', taxi: 'Rs. 900 - 1,200', qingqi: 'Rs. 60 / seat' },
      karkhano: { rickshaw: 'Rs. 650 - 850', taxi: 'Rs. 1,300 - 1,600', qingqi: 'Rs. 70 / seat' },
      hayatabad: { rickshaw: 'Rs. 600 - 800', taxi: 'Rs. 1,200 - 1,500', qingqi: 'Rs. 60 / seat' },
    },
    saddar: {
      lrh: { rickshaw: 'Rs. 200 - 300', taxi: 'Rs. 500 - 700', qingqi: 'Rs. 30 / seat' },
      saddar: { rickshaw: 'Rs. 150', taxi: 'Rs. 300', qingqi: 'Rs. 30 / seat' },
      kth: { rickshaw: 'Rs. 300 - 400', taxi: 'Rs. 600 - 800', qingqi: 'Rs. 40 / seat' },
      karkhano: { rickshaw: 'Rs. 550 - 700', taxi: 'Rs. 1,100 - 1,400', qingqi: 'Rs. 60 / seat' },
      hayatabad: { rickshaw: 'Rs. 500 - 650', taxi: 'Rs. 1,000 - 1,300', qingqi: 'Rs. 50 / seat' },
    },
  };

  const currentFareEstimate =
    fareEstimatesMatrix[fareOrigin]?.[fareDest] || {
      rickshaw: 'Rs. 300 - 500',
      taxi: 'Rs. 700 - 1,100',
      qingqi: 'Rs. 40 - 60 / seat',
    };

  const getTransportIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car':
        return <Car className="w-5 h-5 text-amber-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-700" />;
      case 'CarFront':
        return <CarFront className="w-5 h-5 text-blue-700" />;
      case 'BusFront':
        return <BusFront className="w-5 h-5 text-indigo-700" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-purple-700" />;
      default:
        return <Car className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Overview Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
              <span>{language === 'ps' ? 'د ښار محلي ګاډي او رکشې' : language === 'ur' ? 'شہری لوکل ٹرانسپورٹ' : 'City Local Transit'}</span>
              <span aria-hidden="true">·</span>
              <span>{language === 'ps' ? 'منصفانه کرایې او د چنې لارښود' : language === 'ur' ? 'مناسب کرایہ گائیڈ' : 'Fair Rates & Bargaining'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {language === 'ps'
                ? 'پېښور کې ټیکسي، رکشا او چنګچي څنګه پیدا کړو؟'
                : language === 'ur'
                ? 'پشاور میں ٹیکسی، رکشہ اور چنگچی تلاش کرنے کی رہنمائی'
                : 'How to Hail & Negotiate Taxis, Rickshaws & Qingqis in Peshawar'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              {language === 'ps'
                ? 'که بي آر ټي بس ستاسو ځای ته نږدې نه وي، په پېښور کې آټو رکشا، شریکه چنګچي، ټیکسي او انلاین ایپس شته. دلته اصلي کرایې او د چنې پښتو جملې وګورئ ترڅو چلوونکی ډیرې پیسې درنه ونه غواړي.'
                : language === 'ur'
                ? 'بی آر ٹی کے علاوہ پشاور میں پرائیویٹ رکشہ، 6 سیٹر چنگچی، ٹیکسی اور موبائل ایپس کے درست کرائے اور بھاؤ تاؤ کے طریقے جانیں۔'
                : 'Find expected fares, stand locations, and local negotiation phrases in Pashto & Urdu so you are never overcharged.'}
            </p>
          </div>

          <button
            onClick={() => {
              if (isPlayingAudio) onStopAudio();
              else onPlayAudio(selectedOption.audioGuide[language]);
            }}
            className={`min-h-[44px] px-4 py-2 rounded-xl border text-xs font-bold flex items-center gap-2 shrink-0 transition-all ${
              isPlayingAudio
                ? 'bg-amber-100 text-amber-900 border-amber-300 ring-2 ring-amber-400'
                : 'bg-emerald-800 text-white border-transparent hover:bg-emerald-900'
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span>
              {isPlayingAudio
                ? language === 'ps'
                  ? 'غږ بند کړئ'
                  : 'آواز روکیں'
                : language === 'ps'
                ? 'د کرایې غږ واورئ'
                : 'کرایہ آڈیو میں سنیں'}
            </span>
          </button>
        </div>

        {/* Transport Type Segmented Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {LOCAL_TRANSPORT_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedOptionId(opt.id)}
              className={`p-3 rounded-2xl border text-left rtl:text-right flex flex-col justify-between transition-all ${
                selectedOptionId === opt.id
                  ? 'bg-emerald-50/80 border-emerald-500 ring-2 ring-emerald-500/20 text-emerald-950 font-bold shadow-xs'
                  : 'bg-slate-50 hover:bg-white border-slate-200 text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                  {getTransportIcon(opt.icon)}
                </div>
                <span className="text-[10px] font-mono text-slate-500 font-semibold">{opt.capacity}</span>
              </div>
              <span className="text-xs leading-tight">{opt.name[language]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Transport Option Deep Dive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Detail & Routes (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-xl font-extrabold text-slate-900">
                  {selectedOption.name[language]}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                {selectedOption.summary[language]}
              </p>
            </div>
          </div>

          {/* Where to find & Fare model */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                <MapPin className="w-4 h-4 text-emerald-800" />
                {language === 'ps' ? 'چیرته ولاړ وي؟ (اډې)' : language === 'ur' ? 'کہاں سے ملے گا؟' : 'Where to Find:'}
              </span>
              <p className="text-slate-600 leading-relaxed">{selectedOption.whereToFind[language]}</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                <DollarSign className="w-4 h-4 text-emerald-800" />
                {language === 'ps' ? 'د کرایې اصول:' : language === 'ur' ? 'کرائے کا اصول:' : 'Fare Model:'}
              </span>
              <p className="text-slate-600 leading-relaxed">{selectedOption.fareModel[language]}</p>
            </div>
          </div>

          {/* Estimated Routes & Standard Fares */}
          <div>
            <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-3">
              {language === 'ps' ? 'د پېښور د مشهورو لارو منصفانه کرایې' : language === 'ur' ? 'اہم روٹس کا متوقع اور مناسب کرایہ' : 'Standard Peshawar Route Fares:'}
            </h5>

            <div className="space-y-2.5">
              {selectedOption.estimatedFares.map((f, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {f.route[language]}
                  </span>
                  <span className="font-mono font-bold text-emerald-800 text-xs sm:text-sm bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 shrink-0 self-start sm:self-auto">
                    {f.fareRange}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bargaining Dialogue in Pashto/Urdu */}
          <div className="p-5 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 font-bold text-sm text-amber-950">
              <MessageSquare className="w-4 h-4 text-amber-700" />
              <span>
                {language === 'ps' ? 'له ډرایور سره د چنې وهلو خبرې (Bargaining)' : language === 'ur' ? 'ڈرائیور سے بھاؤ تاؤ کا طریقہ' : 'Local Bargaining Phrase'}
              </span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-amber-100 text-sm font-semibold text-amber-900">
              "{selectedOption.bargainingAdvice.pashtoPhrase}"
            </div>

            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>{language === 'ps' ? 'مشوره: ' : 'مشورہ: '}</strong>
              {selectedOption.bargainingAdvice.adviceText[language]}
            </p>
          </div>
        </div>

        {/* Right: Quick Interactive Fare Calculator (5 cols) */}
        <div className="lg:col-span-5 bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-7 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wide mb-1">
              <DollarSign className="w-4 h-4" />
              <span>{language === 'ps' ? 'فوري کرایه محاسبه کونکی' : language === 'ur' ? 'فوری کرایہ کیلکولیٹر' : 'Instant Fare Estimator'}</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900">
              {language === 'ps' ? 'د رکشا او ټيکسي کرایه پرتله کړئ' : language === 'ur' ? 'رکشہ اور ٹیکسی کرایہ کا موازنہ' : 'Compare Local Fares'}
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              {language === 'ps' ? 'خپل ځای او منزل وټاکئ ترڅو مناسبه بیه معلومه شي.' : 'اپنا اسٹاپ منتخب کر کے اندازہ لگائیں۔'}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {language === 'ps' ? 'له کوم ځای څخه؟ (پیل)' : language === 'ur' ? 'کہاں سے؟ (مقام)' : 'From:'}
              </label>
              <select
                value={fareOrigin}
                onChange={(e) => setFareOrigin(e.target.value)}
                className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-900 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
              >
                <option value="haji-camp">{language === 'ps' ? 'زوړ حاجي کیمپ / جنرل بس سټینډ' : 'پرانا حاجی کیمپ / بس اڈہ'}</option>
                <option value="karkhano">{language === 'ps' ? 'کارخانو مارکیټ / خیبر اډه' : 'کارخانو مارکیٹ / خیبر اڈہ'}</option>
                <option value="kohat-adda">{language === 'ps' ? 'کوهاټ بس اډه (رنګ روډ)' : 'کوہاٹ بس اڈہ (رنگ روڈ)'}</option>
                <option value="saddar">{language === 'ps' ? 'پېښور کینټ / صدر بازار' : 'پشاور کینٹ / صدر بازار'}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {language === 'ps' ? 'چیرته ځئ؟ (منزل)' : language === 'ur' ? 'کہاں جانا ہے؟ (منزل)' : 'To:'}
              </label>
              <select
                value={fareDest}
                onChange={(e) => setFareDest(e.target.value)}
                className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-900 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
              >
                <option value="lrh">{language === 'ps' ? 'ليډي ریډینګ روغتون (LRH) / خیبر بازار' : 'لیڈی ریڈنگ ہسپتال (LRH) / خیبر بازار'}</option>
                <option value="saddar">{language === 'ps' ? 'صدر کینټ / ریلوې سټیشن' : 'صدر کینٹ / ریلوے اسٹیشن'}</option>
                <option value="kth">{language === 'ps' ? 'خیبر ټیچینګ روغتون (KTH) / پوهنتون' : 'کے ٹی ایچ ہسپتال / یونیورسٹی'}</option>
                <option value="karkhano">{language === 'ps' ? 'کارخانو مارکیټ / لنډي کوتل لور' : 'کارخانو مارکیٹ'}</option>
                <option value="hayatabad">{language === 'ps' ? 'حیات آباد فیز ۳ یا ۴ (پاسپورټ او HMC)' : 'حیات آباد فیز 3 یا 4 (پاسپورٹ و ایچ ایم سی)'}</option>
              </select>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="space-y-3 pt-2">
            <div className="p-3.5 bg-white rounded-2xl border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Car className="w-5 h-5 text-amber-600" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">{language === 'ps' ? 'شخصي رکشا' : 'پرائیویٹ رکشہ'}</span>
                  <span className="text-[11px] text-slate-500">{language === 'ps' ? 'مستقیم او چټک' : 'براہ راست'}</span>
                </div>
              </div>
              <span className="font-mono font-bold text-emerald-900 text-sm">{currentFareEstimate.rickshaw}</span>
            </div>

            <div className="p-3.5 bg-white rounded-2xl border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Users className="w-5 h-5 text-emerald-700" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">{language === 'ps' ? 'چنګچي ۶ سیټره' : 'چنگچی (فی سیٹ)'}</span>
                  <span className="text-[11px] text-slate-500">{language === 'ps' ? 'شریکه ارزانه' : 'سستی سواری'}</span>
                </div>
              </div>
              <span className="font-mono font-bold text-emerald-900 text-sm">{currentFareEstimate.qingqi}</span>
            </div>

            <div className="p-3.5 bg-white rounded-2xl border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <CarFront className="w-5 h-5 text-blue-700" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">{language === 'ps' ? 'ټیکسي / شخصي کار' : 'ٹیکسی / پرائیویٹ کار'}</span>
                  <span className="text-[11px] text-slate-500">{language === 'ps' ? 'کورنیو او سامانونو ته' : 'فیملی اور سامان'}</span>
                </div>
              </div>
              <span className="font-mono font-bold text-emerald-900 text-sm">{currentFareEstimate.taxi}</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 leading-relaxed pt-2 border-t border-slate-200">
            💡 {language === 'ps' ? 'یادونه: په ګڼه ګوڼه یا باران کې رکشې لږ زیاتې پیسې غواړي. له ۵۰ تر ۱۰۰ چنه وهل عادي خبره ده.' : 'نوٹ: بارش یا شدید رش کے وقت کرایہ 50 سے 100 روپے بڑھ سکتا ہے۔'}
          </div>
        </div>
      </div>
    </div>
  );
};
