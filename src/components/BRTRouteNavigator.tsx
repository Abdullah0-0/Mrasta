import React, { useState, useMemo } from 'react';
import {
  Bus,
  MapPin,
  ArrowRight,
  ArrowLeft,
  Clock,
  Banknote,
  Volume2,
  Navigation,
  Compass,
  CreditCard,
  Building,
} from 'lucide-react';
import { BRT_STATIONS, REGIONAL_ADDAS } from '../data/brtStations';
import { Language } from '../types';

interface BRTRouteNavigatorProps {
  language: Language;
  onPlayAudio: (text: string) => void;
  isPlayingAudio: boolean;
  onStopAudio: () => void;
}

export const BRTRouteNavigator: React.FC<BRTRouteNavigatorProps> = ({
  language,
  onPlayAudio,
  isPlayingAudio,
  onStopAudio,
}) => {
  const isRtl = language !== 'en';

  const [selectedOriginType, setSelectedOriginType] = useState<'adda' | 'station'>('adda');
  const [selectedAddaId, setSelectedAddaId] = useState<string>('haji-camp');
  const [originStationNum, setOriginStationNum] = useState<number>(5);
  const [destStationNum, setDestStationNum] = useState<number>(25); // Default: Passport office Hayatabad

  // Pre-configured popular destinations
  const popularDestinations = [
    { name: { ps: 'د حیات آباد پاسپورټ دفتر', ur: 'پاسپورٹ آفس حیات آباد', en: 'Hayatabad Passport Office' }, station: 25 },
    { name: { ps: 'ليډي ریډینګ روغتون (LRH)', ur: 'لیڈی ریڈنگ ہسپتال (LRH)', en: 'Lady Reading Hospital' }, station: 10 },
    { name: { ps: 'خیبر ټیچینګ روغتون او پوهنتون', ur: 'کے ٹی ایچ ہسپتال و یونیورسٹی', en: 'KTH Hospital & UoP' }, station: 21 },
    { name: { ps: 'حیات آباد میډیکل کمپلیکس (HMC)', ur: 'حیات آباد میڈیکل کمپلیکس', en: 'Hayatabad Medical Complex' }, station: 28 },
    { name: { ps: 'نادرا میګا سنټر (ابداره روډ)', ur: 'نادرا میگا سینٹر (ابدارہ)', en: 'NADRA 24/7 Mega Center' }, station: 19 },
    { name: { ps: 'د پولیس خدمت مرکز (کرکټر)', ur: 'پولیس خدمت مرکز (کریکٹر)', en: 'Police Khidmat Markaz' }, station: 9 },
    { name: { ps: 'صدر کینټ بازار او پاسپورټ', ur: 'صدر کینٹ و پاسپورٹ آفس', en: 'Saddar Cantt Passport' }, station: 15 },
    { name: { ps: 'د تعلیمی بورډ دفتر (BISE)', ur: 'پشاور تعلیمی بورڈ (BISE)', en: 'BISE Education Board' }, station: 22 },
  ];

  // Effective origin station
  const effectiveOriginStation = useMemo(() => {
    if (selectedOriginType === 'adda') {
      const adda = REGIONAL_ADDAS.find((a) => a.id === selectedAddaId);
      return adda?.nearestBrtStation || 5;
    }
    return originStationNum;
  }, [selectedOriginType, selectedAddaId, originStationNum]);

  // Route calculation
  const routeCalculation = useMemo(() => {
    const origin = BRT_STATIONS.find((s) => s.number === effectiveOriginStation) || BRT_STATIONS[4];
    const destination = BRT_STATIONS.find((s) => s.number === destStationNum) || BRT_STATIONS[24];

    const stopsCount = Math.abs(destination.number - origin.number);
    const direction =
      destination.number > origin.number
        ? {
            ps: 'لویدیځ لور ته (د کارخانو مارکیټ / حیات آباد لور ته)',
            ur: 'مغرب کی طرف (حیات آباد اور کارخانو مارکیٹ روٹ)',
            en: 'Westbound (Towards Hayatabad & Karkhano Market)',
          }
        : destination.number < origin.number
        ? {
            ps: 'ختیځ لور ته (د صدر، خیبر بازار او څمکني لور ته)',
            ur: 'مشرق کی طرف (صدر، خیبر بازار اور چمکنی روٹ)',
            en: 'Eastbound (Towards Saddar, Khyber Bazar & Chamkani)',
          }
        : {
            ps: 'تاسو په همدې تمځای کې یاست',
            ur: 'آپ اسی اسٹیشن پر موجود ہیں',
            en: 'You are at this station',
          };

    // Calculate approximate fare in PKR
    let fare = 15;
    if (stopsCount > 20) fare = 50;
    else if (stopsCount > 15) fare = 40;
    else if (stopsCount > 10) fare = 30;
    else if (stopsCount > 5) fare = 20;

    // Approximate travel time (about 1.8 mins per station + wait)
    const travelTime = stopsCount === 0 ? 0 : Math.round(stopsCount * 1.8 + 4);

    // Audio guidance narrative
    const audioScript = {
      ps: `له ${origin.name.ps} څخه سواره شئ. بس ${direction.ps} ته روان وي. تر ${destination.name.ps} پورې ټولټال ${stopsCount} سټیشنونه دي. کرایه شاوخوا ${fare} روپۍ کیږي او وخت به شاوخوا ${travelTime} دقیقې واخلي. کله چې ${destination.name.ps} ته ورسیږئ، هلته ${destination.landmarks.ps} ته ځان ورسوئ.`,
      ur: `اسٹیشن نمبر ${origin.number} ${origin.name.ur} سے بس لیں، جو کہ ${direction.ur} جائے گی۔ اسٹیشن نمبر ${destination.number} ${destination.name.ur} تک کل ${stopsCount} اسٹاپس ہیں۔ متوقع کرایہ ${fare} روپے اور سفر کا وقت تقریباً ${travelTime} منٹ ہوگا۔`,
      en: `Board at Station ${origin.number} ${origin.name.en} heading ${direction.en}. Travel for ${stopsCount} stations to Station ${destination.number} ${destination.name.en}. Estimated fare is PKR ${fare} and duration is approximately ${travelTime} minutes.`,
    };

    return {
      origin,
      destination,
      stopsCount,
      direction,
      fare,
      travelTime,
      audioScript,
    };
  }, [effectiveOriginStation, destStationNum]);

  const selectedAdda = REGIONAL_ADDAS.find((a) => a.id === selectedAddaId);

  return (
    <section className="py-8 md:py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
              <span>{language === 'ps' ? 'د زو پېښور ترانسپورت' : language === 'ur' ? 'زو پشاور اربن ٹرانسپورٹ' : 'Zu TransPeshawar'}</span>
              <span aria-hidden="true">·</span>
              <span>{language === 'ps' ? '۳۰ چټک تمځایونه' : language === 'ur' ? '30 ایکسپریس اسٹیشنز' : '30 Rapid Stations'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {language === 'ps'
                ? 'د بي آر ټي سمارټ سفر لارښود'
                : language === 'ur'
                ? 'بی آر ٹی اسمارٹ روٹ نیویگیٹر'
                : 'Zu Peshawar BRT Smart Navigator'}
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              {language === 'ps'
                ? 'که تاسو له سوات، خیبر، وزیرستان، پنجاب یا بل هر ځای څخه پېښور ته داخل شوي یاست، دلته وټاکئ چې چیرته کوز شوي یاست او چیرته تلل غواړئ ترڅو دقیق بس او لاره دروښيي.'
                : language === 'ur'
                ? 'پشاور کے کسی بھی بس اڈے پر اترنے کے بعد اپنی مطلوبہ منزل منتخب کریں، سسٹم آپ کو درست اسٹیشن، کرایہ اور سفر کا وقت بتائے گا۔'
                : 'Select where you arrived in Peshawar and your destination to calculate the fastest BRT bus route, fare, and walking directions.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (isPlayingAudio) onStopAudio();
                else onPlayAudio(routeCalculation.audioScript[language]);
              }}
              className={`min-h-[44px] px-4 py-2 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
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
                    : language === 'ur'
                    ? 'آواز روکیں'
                    : 'Stop Voice'
                  : language === 'ps'
                  ? 'د لارې غږ واورئ'
                  : language === 'ur'
                  ? 'روٹ کی آواز سنیں'
                  : 'Listen Route'}
              </span>
            </button>
          </div>
        </div>

        {/* BRT Showcase Photo Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 mb-8 max-h-56 group">
          <img
            src="/src/assets/images/zu_peshawar_brt_1792834854571.jpg"
            alt="Zu Peshawar Bus Rapid Transit System"
            referrerPolicy="no-referrer"
            className="w-full h-56 object-cover object-center group-hover:scale-101 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/40 to-transparent flex items-center p-6">
            <div className="max-w-xl text-white">
              <span className="px-2.5 py-1 rounded bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider">
                Zu Peshawar
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2">
                {language === 'ps' ? 'له څمکني تر کارخانو پورې ارام او چټک سفر' : language === 'ur' ? 'چمکنی سے کارخانو تک جدید اور محفوظ سفر' : 'East to West in 45 Minutes'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mt-1">
                {language === 'ps'
                  ? 'په بسونو کې د ښځو لپاره ځانګړې برخه، ای سي، برقي ټکټ او ډیجیټل تختې شتون لري.'
                  : language === 'ur'
                  ? 'واتان کولڈ ہائبرڈ بسیں، خواتین کے لیے مخصوص محفوظ کیبن اور ہر 3 منٹ بعد آمد۔'
                  : 'Air-conditioned hybrid buses, dedicated women & family sections, and automated ticketing.'}
              </p>
            </div>
          </div>
        </div>

        {/* Planner Interactive Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-5 sm:p-6 space-y-6">
            {/* Step 1: Origin Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-2">
                1. {language === 'ps' ? 'تاسو پېښور کې چیرته راغلي یاست؟' : language === 'ur' ? 'آپ پشاور کہاں پہنچے ہیں؟' : 'Where are you in Peshawar?'}
              </label>

              {/* Mode switch: By Regional Adda vs By Station */}
              <div className="flex items-center p-1 bg-slate-200/70 rounded-xl mb-3 text-xs font-semibold">
                <button
                  onClick={() => setSelectedOriginType('adda')}
                  className={`flex-1 py-1.5 rounded-lg transition-colors ${
                    selectedOriginType === 'adda' ? 'bg-white text-emerald-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  {language === 'ps' ? 'د مسافرو بس اډه' : language === 'ur' ? 'بس اڈہ (آمد)' : 'Regional Bus Adda'}
                </button>
                <button
                  onClick={() => setSelectedOriginType('station')}
                  className={`flex-1 py-1.5 rounded-lg transition-colors ${
                    selectedOriginType === 'station' ? 'bg-white text-emerald-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  {language === 'ps' ? 'د بي آر ټي سټیشن' : language === 'ur' ? 'بی آر ٹی اسٹیشن' : 'BRT Station'}
                </button>
              </div>

              {selectedOriginType === 'adda' ? (
                <div className="space-y-2">
                  <select
                    value={selectedAddaId}
                    onChange={(e) => setSelectedAddaId(e.target.value)}
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                  >
                    {REGIONAL_ADDAS.map((adda) => (
                      <option key={adda.id} value={adda.id}>
                        {adda.name[language]}
                      </option>
                    ))}
                  </select>

                  {selectedAdda && (
                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
                      <strong className="text-slate-900 block font-semibold mb-1">
                        {language === 'ps' ? 'له کومو سیمو راغلي خلک؟' : language === 'ur' ? 'کس علاقے سے مسافر؟' : 'Regions Served:'}
                      </strong>
                      <p className="text-slate-700">{selectedAdda.regionsServed[language]}</p>
                      <div className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-emerald-800 font-semibold">
                        <Navigation className="w-3.5 h-3.5 shrink-0" />
                        <span>{selectedAdda.directions[language]}</span>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <select
                  value={originStationNum}
                  onChange={(e) => setOriginStationNum(Number(e.target.value))}
                  className="w-full p-3 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                >
                  {BRT_STATIONS.map((station) => (
                    <option key={station.number} value={station.number}>
                      #{station.number} - {station.name[language]}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {/* Step 2: Destination Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-2">
                2. {language === 'ps' ? 'چیرته تلل غواړئ؟ (منزل وټاکئ)' : language === 'ur' ? 'کہاں جانا چاہتے ہیں؟ (منزل)' : 'Where do you want to go?'}
              </label>

              {/* Popular quick picks */}
              <div className="mb-3 flex flex-wrap gap-1.5">
                {popularDestinations.slice(0, 6).map((pop, idx) => (
                  <button
                    key={idx}
                    onClick={() => setDestStationNum(pop.station)}
                    className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                      destStationNum === pop.station
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {pop.name[language]}
                  </button>
                ))}
              </div>

              <select
                value={destStationNum}
                onChange={(e) => setDestStationNum(Number(e.target.value))}
                className="w-full p-3 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
              >
                {BRT_STATIONS.map((station) => (
                  <option key={station.number} value={station.number}>
                    #{station.number} - {station.name[language]} ({station.landmarks[language]})
                  </option>
                ))}
              </select>
            </div>

            {/* Zu Card & Ticketing Tip */}
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl text-xs text-amber-900 leading-relaxed">
              <div className="flex items-center gap-1.5 font-bold text-amber-950 mb-1">
                <CreditCard className="w-4 h-4 text-amber-700" />
                <span>{language === 'ps' ? 'د زو کارت او ټکټ مالومات' : language === 'ur' ? 'زو کارڈ و ٹکٹ ہدایات' : 'Zu Card & Ticketing'}</span>
              </div>
              <p>
                {language === 'ps'
                  ? 'که کارت نلرئ، په هر سټیشن کې له ماشین څخه نغدې ۱۰، ۲۰ یا ۵۰ روپۍ ورکوئ او یو واره ټوکن واخلئ. که ډیر تګ راتګ کوئ د ۳۰۰ روپیو زو کارت تر ټولو اسانه دی.'
                  : language === 'ur'
                  ? 'اگر زو کارڈ نہیں ہے تو ہر اسٹیشن کے کاؤنٹر یا وینڈنگ مشین سے نقد رقم ادا کر کے پلاسٹک کا ٹوکن حاصل کریں۔ واپسی تک ٹوکن محفوظ رکھیں۔'
                  : 'Single ride plastic tokens are available at every station ticket vending machine (TVM) using cash bills.'}
              </p>
            </div>
          </div>

          {/* Results Column (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                {language === 'ps' ? 'د سفر غوره لار' : language === 'ur' ? 'بہترین سفری روٹ' : 'Calculated Optimal Route'}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 font-bold text-xs border border-emerald-200">
                Zu Main Line
              </span>
            </div>

            {/* Metrics Strip (Fare, Stops, Duration) */}
            <div className="grid grid-cols-3 gap-3 my-6 text-center">
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
                  {language === 'ps' ? 'کرایه' : language === 'ur' ? 'کرایہ' : 'Fare'}
                </span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-800">
                  Rs. {routeCalculation.fare}
                </span>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
                  {language === 'ps' ? 'تمځایونه' : language === 'ur' ? 'اسٹیشنز' : 'Stops'}
                </span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-slate-900">
                  {routeCalculation.stopsCount}
                </span>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
                  {language === 'ps' ? 'وخت' : language === 'ur' ? 'وقت' : 'Duration'}
                </span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-slate-900">
                  ~{routeCalculation.travelTime} m
                </span>
              </div>
            </div>

            {/* Journey Stations Visual Flow */}
            <div className="relative pl-6 rtl:pr-6 rtl:pl-0 border-l-2 rtl:border-r-2 rtl:border-l-0 border-emerald-500 space-y-8 my-6">
              {/* Origin Station */}
              <div className="relative">
                <div className="absolute -left-[31px] rtl:-right-[31px] rtl:left-auto top-1 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow-xs" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-xs font-bold text-emerald-900 uppercase">
                    {language === 'ps' ? 'پورته کېدل (پیل):' : language === 'ur' ? 'بورڈنگ اسٹیشن:' : 'Boarding Station:'}
                  </span>
                  <span className="font-mono text-xs text-slate-500">Station #{routeCalculation.origin.number}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                  {routeCalculation.origin.name[language]}
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  {routeCalculation.origin.landmarks[language]}
                </p>
                <div className="mt-2 text-xs font-medium text-emerald-800 bg-emerald-50/80 p-2 rounded-lg inline-block">
                  👉 {language === 'ps' ? 'لارښوونه:' : 'رہنمائی:'} {routeCalculation.direction[language]}
                </div>
              </div>

              {/* Destination Station */}
              <div className="relative">
                <div className="absolute -left-[31px] rtl:-right-[31px] rtl:left-auto top-1 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-xs" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-xs font-bold text-rose-900 uppercase">
                    {language === 'ps' ? 'کوزېدل (منزل):' : language === 'ur' ? 'منزل اسٹیشن:' : 'Destination Station:'}
                  </span>
                  <span className="font-mono text-xs text-slate-500">Station #{routeCalculation.destination.number}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                  {routeCalculation.destination.name[language]}
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  {routeCalculation.destination.landmarks[language]}
                </p>
              </div>
            </div>

            {/* Exit & Landmark Arrival Tips */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-emerald-800" />
                <span>{language === 'ps' ? 'له بس څخه د کوزیدو لارښوونه:' : language === 'ur' ? 'منزل پر پہنچ کر رہنمائی:' : 'Arrival Walking Guidance:'}</span>
              </div>
              <p className="leading-relaxed">
                {language === 'ps'
                  ? `کله چې سټیشن #${routeCalculation.destination.number} ته ورسیږئ، د وتلو په دروازه کې خپل ټوکن په سلاټ کې واچوئ. بهر د ${routeCalculation.destination.landmarks.ps} نښې نښانې وګورئ او خپلو کارونو ته لاړ شئ.`
                  : language === 'ur'
                  ? `اسٹیشن نمبر ${routeCalculation.destination.number} پر اتر کر ایگزٹ گیٹ میں ٹوکن ڈالیں۔ باہر نکلتے ہی ${routeCalculation.destination.landmarks.ur} کی جانب تشریف لے جائیں۔`
                  : `Upon arriving at Station #${routeCalculation.destination.number}, insert your token at the turnstile slot. Walk towards ${routeCalculation.destination.landmarks.en}.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
