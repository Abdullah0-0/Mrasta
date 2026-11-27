import React from 'react';
import { Search, Compass, ShieldAlert, Sparkles, Volume2 } from 'lucide-react';
import { Language } from '../types';

interface HeroBannerProps {
  language: Language;
  onSearchChange: (query: string) => void;
  searchQuery: string;
  onSelectQuickAction: (serviceId: string) => void;
  onPlayWelcomeAudio: () => void;
  isPlayingAudio: boolean;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  language,
  onSearchChange,
  searchQuery,
  onSelectQuickAction,
  onPlayWelcomeAudio,
  isPlayingAudio,
}) => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text & Search Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Metadata Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase mb-3">
              <span>{language === 'ps' ? 'د خیبر پښتونخوا د خلکو خدمت' : language === 'ur' ? 'خیبر پختونخوا شہریوں کی خدمت' : 'Khyber Pakhtunkhwa Citizen Support'}</span>
              <span aria-hidden="true">·</span>
              <span>{language === 'ps' ? 'پېښور مرسته' : language === 'ur' ? 'پشاور مرستہ' : 'Peshawar Civic Companion'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight md:leading-tight">
              {language === 'ps' ? (
                <>
                  پېښور ته پخیر راغلاست! <br />
                  <span className="text-emerald-800 font-bold">ټول سرکاري کارونه او سفر په اسانۍ وکړئ</span>
                </>
              ) : language === 'ur' ? (
                <>
                  پشاور میں خوش آمدید! <br />
                  <span className="text-emerald-800 font-bold">سرکاری کام، کاغذات اور بی آر ٹی کا آسان حل</span>
                </>
              ) : (
                <>
                  Welcome to Peshawar! <br />
                  <span className="text-emerald-800 font-bold">Public Procedures & Transit Made Effortless</span>
                </>
              )}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {language === 'ps'
                ? 'که تاسو له قبایلي سیمو، غرنیو ولسوالیو یا نورو سیمو څخه پېښور ته راغلي یاست او د پاسپورټ، پولیس کلیرنس، نادرا، روغتون یا بي آر ټي بس په اړه مرسته غواړئ، دلته ټول پړاوونه په اسانه او غږیزه بڼه زده کړئ.'
                : language === 'ur'
                ? 'قبائلی اضلاع اور خیبر پختونخوا سے پشاور آنے والے بھائیوں اور بہنوں کے لیے: پاسپورٹ، پولیس سرٹیفکیٹ، نادرا، ہسپتال اور بی آر ٹی بس کے تمام مراحل اب آسان زبان اور تصویری رہنمائی کے ساتھ۔'
                : 'Built for visitors arriving from merged tribal districts and across KPK: step-by-step pictorial checklists, landmark directions, and audio guidance for passports, police clearance, NADRA, and Zu BRT.'}
            </p>

            {/* Audio Read-Aloud Prompt for Low-Literacy Visitors */}
            <div className="mt-5 flex items-center gap-3">
              <button
                onClick={onPlayWelcomeAudio}
                className={`px-4 py-2.5 rounded-xl border font-semibold text-sm flex items-center gap-2 transition-all ${
                  isPlayingAudio
                    ? 'bg-amber-100 text-amber-900 border-amber-300 ring-2 ring-amber-400'
                    : 'bg-emerald-800 text-white border-transparent hover:bg-emerald-900 shadow-sm'
                }`}
              >
                <Volume2 className="w-5 h-5 shrink-0" />
                <span>
                  {isPlayingAudio
                    ? language === 'ps'
                      ? 'غږ روان دی...'
                      : language === 'ur'
                      ? 'آواز چل رہی ہے...'
                      : 'Playing audio...'
                    : language === 'ps'
                    ? 'لارښود په پښتو کې واورئ'
                    : language === 'ur'
                    ? 'آڈیو میں مکمل رہنمائی سنیں'
                    : 'Listen to Voice Overview'}
                </span>
              </button>
              <span className="text-xs text-slate-500">
                {language === 'ps'
                  ? 'د نالوستو او کم لوستو هیوادوالو لپاره غږیزه مرسته'
                  : language === 'ur'
                  ? 'کم پڑھے لکھے شہریوں کے لیے آسان آواز'
                  : 'Accessible voice guidance'}
              </span>
            </div>

            {/* Search Input Bar */}
            <div className="mt-6 relative max-w-xl">
              <div className="absolute inset-y-0 left-0 rtl:right-0 rtl:left-auto pl-3.5 rtl:pr-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={
                  language === 'ps'
                    ? 'د خپلې ستونزې لټون وکړئ (لکه پاسپورټ، صحت کارډ، بي آر ټي، نادرا...)'
                    : language === 'ur'
                    ? 'اپنا مسئلہ یا ادارہ تلاش کریں (جیسے پاسپورٹ، پولیس تصدیق، نادرا، ہسپتال...)'
                    : 'Search procedure or location (e.g. Passport, Police clearance, BRT...)'
                }
                className="w-full pl-11 rtl:pr-11 pr-4 rtl:pl-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition-all shadow-xs"
              />
            </div>

            {/* Quick Action Category Triggers */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-500 font-medium">
                {language === 'ps' ? 'چټک لاسرسی:' : language === 'ur' ? 'فوری رسائی:' : 'Quick shortcuts:'}
              </span>
              <button
                onClick={() => onSelectQuickAction('passport-office')}
                className="px-2.5 py-1 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-900 text-slate-700 font-medium rounded-md transition-colors"
              >
                {language === 'ps' ? 'پاسپورټ دفتر' : language === 'ur' ? 'پاسپورٹ آفس' : 'Passport'}
              </button>
              <button
                onClick={() => onSelectQuickAction('zu-brt-transit')}
                className="px-2.5 py-1 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-900 text-slate-700 font-medium rounded-md transition-colors"
              >
                {language === 'ps' ? 'بي آر ټي تمځایونه' : language === 'ur' ? 'بی آر ٹی اسٹاپس' : 'Zu BRT'}
              </button>
              <button
                onClick={() => onSelectQuickAction('police-clearance')}
                className="px-2.5 py-1 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-900 text-slate-700 font-medium rounded-md transition-colors"
              >
                {language === 'ps' ? 'پولیس تصدیق' : language === 'ur' ? 'کریکٹر سرٹیفکیٹ' : 'Police Clearance'}
              </button>
              <button
                onClick={() => onSelectQuickAction('hospitals-sehat-card')}
                className="px-2.5 py-1 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-900 text-slate-700 font-medium rounded-md transition-colors"
              >
                {language === 'ps' ? 'صحت کارډ / روغتون' : language === 'ur' ? 'ہسپتال و صحت کارڈ' : 'Hospitals'}
              </button>
              <button
                onClick={() => onSelectQuickAction('nadra-mega-center')}
                className="px-2.5 py-1 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-900 text-slate-700 font-medium rounded-md transition-colors"
              >
                {language === 'ps' ? 'نادرا ابداره سنټر' : language === 'ur' ? 'نادرا میگا سینٹر' : 'NADRA'}
              </button>
              <button
                onClick={() => onSelectQuickAction('budget-lodging-sarai')}
                className="px-2.5 py-1 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-900 text-slate-700 font-medium rounded-md transition-colors"
              >
                {language === 'ps' ? 'هوټلونه او مسافرخانې' : language === 'ur' ? 'ہوٹل و پناہ گاہ' : 'Lodging'}
              </button>
              <button
                onClick={() => onSelectQuickAction('famous-food-dining')}
                className="px-2.5 py-1 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-900 text-slate-700 font-medium rounded-md transition-colors"
              >
                {language === 'ps' ? 'نمک منډۍ ټکه او کباب' : language === 'ur' ? 'پشاوری کھانے و کباب' : 'Food & Tikka'}
              </button>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white group">
              <div className="aspect-16/10 w-full overflow-hidden relative">
                <img
                  src="/src/assets/images/peshawar_hero_gateway_1792834853404.jpg"
                  alt="Bab-e-Khyber Gateway Peshawar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 mb-1">
                    <Compass className="w-4 h-4" />
                    <span>{language === 'ps' ? 'تاریخي پېښور او د خیبر دروازه' : language === 'ur' ? 'تاریخی پشاور و باب خیبر' : 'Historic Peshawar Gateway'}</span>
                  </div>
                  <p className="text-sm font-medium text-slate-100 leading-snug">
                    {language === 'ps'
                      ? 'له باجوړ، خیبر، وزیرستان، سوات او ټولو ولسوالیو څخه راتلونکو هیوادوالو ته اسانه خدمت'
                      : language === 'ur'
                      ? 'قبائلی اضلاع، سوات اور دور دراز علاقوں سے آنے والے مسافروں کے لیے آسان شہری رہنمائی'
                      : 'Connecting every citizen from regional districts to Peshawar public facilities'}
                  </p>
                </div>
              </div>

              {/* Trust & Safe Practice Kicker Bar */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="font-medium">
                    {language === 'ps'
                      ? 'احتیاط: د دفترونو بهر ایجنټانو ته هیڅ پیسې مه ورکوئ'
                      : language === 'ur'
                      ? 'اہم تنبیہ: دفاتر کے باہر غیر مجاز ایجنٹوں کو رقم نہ دیں'
                      : 'Notice: Official fees are only paid at authorized bank desks'}
                  </span>
                </div>
                <span className="font-mono text-emerald-800 font-bold shrink-0">100% Free Info</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
