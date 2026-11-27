import { ServiceGuide } from '../types';

export const CIVIC_SERVICES: ServiceGuide[] = [
  {
    id: 'passport-office',
    category: 'identity',
    icon: 'BookOpen',
    title: {
      ps: 'د پاسپورټ جوړول او تجدید',
      ur: 'پاسپورٹ کا اجرا اور تجدید',
      en: 'Passport Issuance & Renewal',
    },
    shortDesc: {
      ps: 'د حیات آباد او صدر پاسپورټ دفترونو ته تګ، اړین اسناد او فیس لارښود',
      ur: 'حیات آباد اور صدر پاسپورٹ دفاتر کا مکمل طریقہ کار، کاغذات اور فیس',
      en: 'Complete procedure, required documents, fees, and office locations in Peshawar',
    },
    officeName: {
      ps: 'سیمه ییز پاسپورټ او ویزې دفتر پېښور',
      ur: 'ریجنل پاسپورٹ اینڈ ویزا آفس پشاور',
      en: 'Regional Passport & Visa Office Peshawar',
    },
    locations: [
      {
        name: {
          ps: 'د حیات آباد فیز ۳ پاسپورټ دفتر (مرکزي دفتر)',
          ur: 'حیات آباد فیز 3 پاسپورٹ آفس (مین برانچ)',
          en: 'Hayatabad Phase 3 Passport Office (Main Branch)',
        },
        nearestBrtStation: 'Hayatabad Phase 3 (سټیشن ۲۵)',
        brtStationNumber: 25,
        landmarkDescription: {
          ps: 'د حیات آباد فیز ۳ چوک مخامخ، د کسٹم هاس او جمرود سړک په پیل کې',
          ur: 'حیات آباد فیز 3 چوک کے سامنے، جمرود روڈ پر واقع',
          en: 'Opposite Phase 3 Chowk on Jamrud Road, adjacent to Customs House',
        },
        mapQuery: 'Regional Passport Office Hayatabad Peshawar',
      },
      {
        name: {
          ps: 'د صدر کینټ پاسپورټ دفتر',
          ur: 'صدر کینٹ پاسپورٹ آفس',
          en: 'Saddar Cantt Passport Office',
        },
        nearestBrtStation: 'Saddar Bazar (سټیشن ۱۵)',
        brtStationNumber: 15,
        landmarkDescription: {
          ps: 'د پېښور کینټ، صدر بازار، پریس کلب او سنګم هوټل نږدې',
          ur: 'پشاور کینٹ، صدر بازار سنگم ہوٹل کے قریب',
          en: 'Near Saddar Cantt, near Sangam Hotel & Peshawar Press Club',
        },
        mapQuery: 'Passport Office Saddar Peshawar',
      },
    ],
    workingHours: {
      ps: 'دوشنبه تر جمعې، د سهار له ۸:۰۰ تر ماسپښین ۲:۰۰ پورې (ټوکن تر ۱۲:۰۰ ویشل کیږي)',
      ur: 'پیر تا جمعہ، صبح 8:00 تا دوپہر 2:00 (ٹوکن 12:00 بجے تک جاری ہوتے ہیں)',
      en: 'Monday to Friday, 8:00 AM to 2:00 PM (Tokens issued until 12:00 PM)',
    },
    feeInfo: {
      ps: 'نورمل فیس: شاوخوا ۴,۵۰۰ روپۍ (۵ کلن، ۳۶ پاڼې) | ارجنټ فیس: ۷,۵۰۰ روپۍ. فیس په نشنل بانک یا 1Link ایپ ورکول کیږي.',
      ur: 'نارمل فیس: تقریباً 4,500 روپے (5 سال، 36 صفحات) | ارجنٹ فیس: 7,500 روپے۔ نیشنل بینک یا ون لنک ایپ پر ادائیگی۔',
      en: 'Normal Fee: ~PKR 4,500 (5 Years, 36 Pages) | Urgent: PKR 7,500. Paid via National Bank or 1Link App.',
    },
    processingTime: {
      ps: 'نورمل پاسپورټ: ۱۵ تر ۲۱ ورځې | ارجنټ: ۵ تر ۷ کاري ورځې',
      ur: 'نارمل: 15 تا 21 دن | ارجنٹ: 5 تا 7 ورکنگ ڈیز',
      en: 'Normal: 15 to 21 working days | Urgent: 5 to 7 working days',
    },
    documents: [
      {
        id: 'doc-cnic',
        name: {
          ps: 'اصل نادرا شناختي کارډ (CNIC) او دوه فوټوکاپۍ',
          ur: 'اصل کمپیوٹرائزڈ شناختی کارڈ اور دو فوٹو کاپیاں',
          en: 'Original NADRA CNIC and two photocopies',
        },
        mandatory: true,
      },
      {
        id: 'doc-old-passport',
        name: {
          ps: 'پخوانی پاسپورټ (که تجدید وي) او د هغې کاپي',
          ur: 'پرانا پاسپورٹ (اگر رینیو کروانا ہو) اور کاپی',
          en: 'Previous passport (if renewal) and copy',
        },
        mandatory: false,
      },
      {
        id: 'doc-fee-receipt',
        name: {
          ps: 'د پاسپورټ فیس تادیه شوی رسید (چالان فارم یا ډیجیټل رسید)',
          ur: 'پاسپورٹ فیس کی اصل رسید (بینک چالان یا ڈیجیٹل سلپ)',
          en: 'Original paid fee challan or digital payment receipt',
        },
        mandatory: true,
      },
      {
        id: 'doc-children-bform',
        name: {
          ps: 'د ۱۸ کلونو کم عمره ماشومانو لپاره: اصل ب-فارم او د مور او پلار دواړو اصل شناختي کارډونه',
          ur: '18 سال سے کم عمر کے لیے: اصل ب فارم اور والدین دونوں کے اصل شناختی کارڈ',
          en: 'For minors under 18: Original B-Form and both parents’ original CNICs',
        },
        mandatory: false,
      },
      {
        id: 'doc-noc-govt',
        name: {
          ps: 'د سرکاري کارکوونکو لپاره: د اړوندې ادارې د بې اعتراضۍ سند (NOC)',
          ur: 'سرکاری ملازمین کے لیے: ادارے کا این او سی (NOC)',
          en: 'For government employees: Official NOC certificate',
        },
        mandatory: false,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          ps: '۱. دفتر ته ژر رسیدل او ټوکن اخیستل',
          ur: '1. دفتر جلد پہنچنا اور ٹوکن حاصل کرنا',
          en: '1. Early Arrival & Token Collection',
        },
        instruction: {
          ps: 'د سهار له ۸:۰۰ بجو وړاندې د حیات آباد فیز ۳ یا صدر پاسپورټ دفتر ته ورشئ. په اصلي دروازه کې خپل شناختي کارډ وښایئ او د ورځې ټوکن ترلاسه کړئ.',
          ur: 'صبح 8:00 بجے تک حیات آباد فیز 3 یا صدر پاسپورٹ آفس پہنچیں۔ مین گیٹ پر شناختی کارڈ دکھا کر ٹوکن حاصل کریں۔',
          en: 'Arrive at Hayatabad Phase 3 or Saddar Passport office by 8:00 AM. Present your original CNIC at the entrance to receive a computerized token.',
        },
        landmarkHint: {
          ps: 'که له باجوړ، خیبر یا سوات څخه راځئ، په بي آر ټي سټیشن ۲۵ (حیات آباد فیز ۳) کوز شئ او پیاده ۲ دقیقې مزل دی.',
          ur: 'بی آر ٹی اسٹیشن 25 (حیات آباد فیز 3) پر اتر کر 2 منٹ پیدل چلیں۔',
          en: 'Alight at BRT Station #25 (Hayatabad Phase 3) and walk 2 minutes across the pedestrian crossing.',
        },
      },
      {
        stepNumber: 2,
        title: {
          ps: '۲. د بایومټریک او ډیجیټل عکس اخیستل',
          ur: '2. بائیومیٹرک اور تصویر کاؤنٹر',
          en: '2. Biometrics & Digital Photograph',
        },
        instruction: {
          ps: 'کله چې ستاسو نمبر راشي، لومړي کاونټر ته لاړ شئ. دلته ستاسو د ګوتو نښې (بایومټریک) او ډیجیټل عکس اخیستل کیږي.',
          ur: 'اپنا نمبر پکارے جانے پر پہلے کاؤنٹر پر جائیں۔ وہاں فنگر پرنٹس اور لائیو تصویر لی جائے گی۔',
          en: 'When your token is called, proceed to Counter 1 for digital fingerprint scanning and an on-site photo.',
        },
      },
      {
        stepNumber: 3,
        title: {
          ps: '۳. د معلوماتو ثبت او کتل',
          ur: '3. کوائف کا اندراج اور جانچ',
          en: '3. Data Verification Desk',
        },
        instruction: {
          ps: 'کاونټر کارمند ستاسو نوم، پته او نور معلومات په کمپیوټر کې تاییدوي. مهرباني وکړئ خپل نوم، د پلار نوم او پته په دقت وګورئ.',
          ur: 'ڈیٹا اینٹری کاؤنٹر پر اپنے نام، تاریخ پیدائش اور پتہ کی اچھی طرح تسلی کریں تاکہ پاسپورٹ پر غلطی نہ ہو۔',
          en: 'Verify your name spelling, date of birth, and home district on the clerk screen to avoid printing errors.',
        },
      },
      {
        stepNumber: 4,
        title: {
          ps: '۴. د معاون ډایرکټر انټرویو او تاییدي رسید',
          ur: '4. اسسٹنٹ ڈائریکٹر کاؤنٹر اور حتمی رسید',
          en: '4. Assistant Director Interview & Tracking Slip',
        },
        instruction: {
          ps: 'په وروستي کاونټر کې اسسټنټ ډایرکټر ستاسو اسناد ګوري او ټاپه لګوي. تاسو ته د پاسپورټ ترلاسه کولو نیټه او د ټریکینګ رسید درکول کیږي.',
          ur: 'اسسٹنٹ ڈائریکٹر کے کاؤنٹر پر فائل منظور ہوگی اور آپ کو وصولی کی تاریخ والی ٹریکنگ سلپ مل جائے گی۔',
          en: 'The Assistant Director will verify the file and stamp your tracking slip, noting the passport collection date.',
        },
      },
    ],
    audioScript: {
      ps: 'که تاسو غواړئ پېښور کې پاسپورټ جوړ کړئ، اصلي شناختي کارډ او د هغې دوه کاپۍ له ځانه سره راوړئ. د حیات آباد فیز درې سټیشن په بي آر ټي پنځویشت کوز شئ. د سهار اتو بجو مخکې ورشئ چې ټوکن درکړي. ایجنټانو ته هیڅ پیسې مه ورکوئ.',
      ur: 'پاسپورٹ بنوانے کے لیے اصل شناختی کارڈ اور دو فوٹو کاپیاں لے کر صبح 8 بجے حیات آباد فیز 3 یا صدر پاسپورٹ آفس پہنچیں۔ بی آر ٹی اسٹیشن 25 پر اتریں۔ باہر ایجنٹوں کو پیسے نہ دیں، تمام فیس بینک میں جمع ہوتی ہے۔',
      en: 'To obtain a passport in Peshawar, bring your original CNIC and photocopies to Hayatabad Phase 3 or Saddar Passport Office. Alight at BRT Station 25. Arrive before 8 AM for a token. Do not pay unofficial agents outside.',
    },
    helpline: '091-9217482',
    criticalTips: [
      {
        ps: 'د پاسپورټ دفتر څخه بهر ولاړو ایجنټانو ته هیڅ پیسې مه ورکوئ؛ ټول کار په قانوني توګه دننه کیږي.',
        ur: 'دفتر کے باہر ایجنٹوں سے بچیں، وہ سادہ لوح شہریوں سے بلاوجہ پیسے بٹورتے ہیں۔',
        en: 'Beware of touts outside the gate; official fees are paid directly to National Bank or 1Link.',
      },
      {
        ps: 'د سهار ۸:۰۰ بجو پورې حتماً ورسیږئ، ځکه چې ټوکنونه په ۱۱:۰۰ یا ۱۲:۰۰ بجو بندیږي.',
        ur: 'صبح 8:00 بجے تک پہنچنا ضروری ہے کیونکہ روزانہ ٹوکنز کی تعداد محدود ہوتی ہے۔',
        en: 'Arrive early by 8:00 AM as daily token quotas fill quickly by midday.',
      },
    ],
  },
  {
    id: 'police-clearance',
    category: 'legal',
    icon: 'ShieldCheck',
    title: {
      ps: 'د پولیس پاکي (کرکټر سرټیفکیټ)',
      ur: 'پولیس کلیئرنس (کریکٹر سرٹیفکیٹ)',
      en: 'Police Character Clearance Certificate',
    },
    shortDesc: {
      ps: 'د پولیس خدمت مرکز (PKM) له لارې د اخلاقي پاکوالي سند اخیستل د نوکرۍ، ویزې او پوهنتون لپاره',
      ur: 'پولیس خدمت مرکز سے کردار اور کلیئرنس سرٹیفکیٹ حاصل کرنے کا آسان طریقہ',
      en: 'Obtaining character clearance for overseas visas, jobs, and admissions from Police Khidmat Markaz',
    },
    officeName: {
      ps: 'د خیبر پښتونخوا پولیس خدمت مرکز (PKM)',
      ur: 'خیبر پختونخوا پولیس خدمت مرکز (PKM)',
      en: 'KPK Police Khidmat Markaz (PKM)',
    },
    locations: [
      {
        name: {
          ps: 'د ملک سعد شهید پولیس لاین خدمت مرکز (مرکزي)',
          ur: 'ملک سعد شہید پولیس لائنز خدمت مرکز (مرکزی)',
          en: 'Malik Saad Shaheed Police Lines PKM (Main)',
        },
        nearestBrtStation: 'Malik Saad Shaheed (سټیشن ۹)',
        brtStationNumber: 9,
        landmarkDescription: {
          ps: 'د بي آر ټي سټیشن ۹ سره پیوسته، د باچا خان چوک او سنټرل پولیس لاین دروازې مخامخ',
          ur: 'بی آر ٹی اسٹیشن 9 کے بالکل ساتھ، باچا خان چوک اور سینٹرل پولیس لائنز کے سامنے',
          en: 'Directly linked to BRT Station #9, opposite Bacha Khan Chowk & Central Police Lines',
        },
        mapQuery: 'Police Khidmat Markaz Malik Saad Shaheed Peshawar',
      },
      {
        name: {
          ps: 'د ګلبهار پولیس خدمت مرکز',
          ur: 'گلبہار پولیس خدمت مرکز',
          en: 'Gulbahar Police Khidmat Markaz',
        },
        nearestBrtStation: 'Gulbahar Chowk (سټیشن ۷)',
        brtStationNumber: 7,
        landmarkDescription: {
          ps: 'د ګلبهار روډ، د ګلبهار تاڼې او ټرافیک مرکزي بلاک مخامخ',
          ur: 'گلبہار چوک، گلبہار تھانے اور ٹریفک ہیڈکوارٹرز کے قریب',
          en: 'Near Gulbahar Chowk & Police Station Gulbahar',
        },
        mapQuery: 'Police Khidmat Markaz Gulbahar Peshawar',
      },
    ],
    workingHours: {
      ps: 'دوشنبه تر شنبې، د سهار له ۸:۳۰ تر مازدیګر ۵:۰۰ پورې',
      ur: 'پیر تا ہفتہ، صبح 8:30 تا شام 5:00',
      en: 'Monday to Saturday, 8:30 AM to 5:00 PM',
    },
    feeInfo: {
      ps: 'د غوښتنلیک رسمي فیس: شاوخوا ۳۵۰ تر ۵۰۰ روپۍ (په کاونټر کې رسید ورکول کیږي)',
      ur: 'سرکاری فیس: تقریباً 350 سے 500 روپے (کاؤنٹر پر سرکاری رسید ملتی ہے)',
      en: 'Official fee: ~PKR 350 to 500 (Government receipt provided at counter)',
    },
    processingTime: {
      ps: '۷ تر ۱۰ کاري ورځې (د تاڼې تصدیق وروسته)',
      ur: '7 تا 10 ورکنگ ڈیز (متعلقہ تھانے کی انکوائری کے بعد)',
      en: '7 to 10 working days (post local police station inquiry)',
    },
    documents: [
      {
        id: 'doc-pkm-cnic',
        name: {
          ps: 'د غوښتونکي اصل نادرا شناختي کارډ (CNIC) او درې کاپۍ',
          ur: 'اصل کمپیوٹرائزڈ شناختی کارڈ اور 3 فوٹو کاپیاں',
          en: 'Original NADRA CNIC and 3 photocopies',
        },
        mandatory: true,
      },
      {
        id: 'doc-pkm-photos',
        name: {
          ps: '۳ تر ۴ تازه پاسپورټ سایز عکسونه (سپین یا اسماني شالید)',
          ur: '3 تا 4 پاسپورٹ سائز تازہ تصاویر (نیلے یا سفید بیک گراؤنڈ)',
          en: '3 to 4 passport-size photographs (white or blue background)',
        },
        mandatory: true,
      },
      {
        id: 'doc-pkm-stamp',
        name: {
          ps: 'د ۵۰ یا ۱۰۰ روپیو سټامپ پیپر (بیان حلفي) چې د اوت کمشنر لخوا تایید شوی وي',
          ur: '50 یا 100 روپے کا اسٹامپ پیپر (بیان حلفی) اوتھ کمشنر سے تصدیق شدہ',
          en: 'Rs. 50/100 Judicial Stamp Paper (Affidavit) attested by Oath Commissioner',
        },
        mandatory: true,
      },
      {
        id: 'doc-pkm-passport',
        name: {
          ps: 'د بهرني سفر لپاره: د اوسني پاسپورټ کاپي',
          ur: 'بیرون ملک سفر کے لیے: موجودہ پاسپورٹ کی کاپی',
          en: 'For overseas travel: Copy of valid passport',
        },
        mandatory: false,
      },
      {
        id: 'doc-pkm-parents-cnic',
        name: {
          ps: 'د مور او پلار شناختي کارډ کاپۍ',
          ur: 'والدین کے شناختی کارڈز کی کاپیاں',
          en: 'Photocopies of father and mother CNIC',
        },
        mandatory: false,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          ps: '۱. خدمت مرکز ته تګ او فارم ترلاسه کول',
          ur: '1. خدمت مرکز حاضری اور فارم وصولی',
          en: '1. Visit Khidmat Markaz & Get Form',
        },
        instruction: {
          ps: 'د بي آر ټي سټیشن ۹ (ملک سعد شهید) کې کوز شئ. د پولیس خدمت مرکز ته ننوځئ او د کرکټر سرټیفکیټ ډیسک څخه ټوکن او فارم واخلئ.',
          ur: 'بی آر ٹی اسٹیشن 9 (ملک سعد شہید) پر اتر کر پولیس خدمت مرکز جائیں اور کریکٹر سرٹیفکیٹ کاؤنٹر سے ٹوکن لیں۔',
          en: 'Alight at BRT Station #9 (Malik Saad Shaheed) right by Central Police Lines. Collect your token and application form.',
        },
      },
      {
        stepNumber: 2,
        title: {
          ps: '۲. د ګوتو نښې (بایومټریک) او عکس',
          ur: '2. بائیو میٹرک اور چہرہ سکین',
          en: '2. Biometrics & Face Capture',
        },
        instruction: {
          ps: 'کاونټر ته ننوځئ، ستاسو عکس او بایومټریک به په ډیجیټل سیسټم کې ثبت شي ترڅو معلومه شي چې هیڅ جرمي ریکارډ نلرئ.',
          ur: 'کاؤنٹر پر آپ کے فنگر پرنٹس اور لائیو تصویر سسٹم میں فیڈ ہوگی۔',
          en: 'Your fingerprints and digital photograph are recorded to cross-reference with the police record database.',
        },
      },
      {
        stepNumber: 3,
        title: {
          ps: '۳. د اړوندې تاڼې تصدیق (لوکل انکوائري)',
          ur: '3. مقامی تھانے کی رپورٹ اور انکوائری',
          en: '3. Local Police Station Clearance Check',
        },
        instruction: {
          ps: 'ستاسو غوښتنلیک ستاسو د استوګنې سیمه ییزې تاڼې (SHO او بیټ افسر) ته لیږل کیږي ترڅو تصدیق کړي چې په تاسو هیڅ ایف ای آر (FIR) نشته.',
          ur: 'آپ کی فائل آپ کے آبائی یا موجودہ تھانے بھیجی جائے گی جہاں بیٹ افسر تصدیق کرے گا کہ کوئی مقدمہ درج نہیں ہے۔',
          en: 'The request is forwarded to your local police station (Beat Officer/SHO) for community verification.',
        },
      },
      {
        stepNumber: 4,
        title: {
          ps: '۴. د سرټیفکیټ ترلاسه کول',
          ur: '4. سرٹیفکیٹ کی وصولی',
          en: '4. Certificate Collection',
        },
        instruction: {
          ps: 'د ۷ تر ۱۰ ورځو وروسته خپل رسید خدمت مرکز ته راوړئ او اصلي تصدیق شوی سرټیفکیټ ترلاسه کړئ.',
          ur: '7 سے 10 دن بعد ٹریکنگ رسید لے کر تشریف لائیں اور تصدیق شدہ سرٹیفکیٹ حاصل کریں۔',
          en: 'After 7-10 working days, return with your receipt to collect your stamped Police Clearance Certificate.',
        },
      },
    ],
    audioScript: {
      ps: 'د پولیس کرکټر سرټیفکیټ لپاره شناختي کارډ، درې عکسونه او د پچاس روپیو سټامپ پیپر پکار دی. د بي آر ټي سټیشن ۹ ملک سعد شهید ته ورشئ. هلته پولیس خدمت مرکز دی. ستاسو د ګوتو نښې اخلي او له اوو تر لسو ورځو کې سرټیفکیټ تیاروي.',
      ur: 'پولیس کریکٹر سرٹیفکیٹ بنوانے کے لیے شناختی کارڈ، 3 تصاویر اور 50 روپے کا اسٹامپ پیپر لے کر بی آر ٹی اسٹیشن 9 ملک سعد شہید اتریں۔ وہاں پولیس خدمت مرکز میں آپ کا بائیو میٹرک ہوگا اور 7 سے 10 دن میں سرٹیفکیٹ مل جائے گا۔',
      en: 'For police clearance, bring your CNIC, 3 photos, and an attested stamp paper to BRT Station 9 Malik Saad Shaheed. Proceed to the Police Khidmat Markaz for biometrics. The certificate is issued in 7 to 10 days.',
    },
    helpline: '091-9212058 / 15',
    criticalTips: [
      {
        ps: 'که ستاسو په شناختي کارډ د بلې ولسوالۍ (لکه سوات یا وزیرستان) پته وي، ستاسو د کلي له تاڼې څخه هم تاییدي اخیستل کیږي.',
        ur: 'اگر شناختی کارڈ پر کسی اور ضلع کا پتہ درج ہے تو دونوں اضلاع کے تھانوں سے کلیرنس ضروری ہوتی ہے۔',
        en: 'If your CNIC has a permanent address in another district (e.g. Swat or Waziristan), inter-district verification may take 2-3 extra days.',
      },
    ],
  },
  {
    id: 'zu-brt-transit',
    category: 'transit',
    icon: 'Bus',
    title: {
      ps: 'د زو پېښور بي آر ټي (سفر او کارت لارښود)',
      ur: 'زو پشاور بی آر ٹی (سفر اور کارڈ گائیڈ)',
      en: 'Zu Peshawar BRT Travel & Card Guide',
    },
    shortDesc: {
      ps: 'له څمکني تر کارخانو د ۳۰ سټیشنونو بشپړ سفر، د کارت اخیستل او له لرې پرتو اډو څخه داخلېدل',
      ur: 'چمکنی تا کارخانو 30 اسٹیشنز کا سفر، زو کارڈ اور دور دراز علاقوں سے پشاور آمد پر رہنمائی',
      en: 'Complete guide to Zu Peshawar BRT: 30 stations, Zu Card, single tokens, and regional arrivals',
    },
    officeName: {
      ps: 'ټرانس پېښور (TransPeshawar)',
      ur: 'ٹرانس پشاور (TransPeshawar)',
      en: 'TransPeshawar (Urban Mobility Authority)',
    },
    locations: [
      {
        name: {
          ps: 'د بي آر ټي مرکزي ټرمینلونه او ۳۰ سټیشنونه',
          ur: 'بی آر ٹی مین کوریڈور اور 30 اسٹیشنز',
          en: 'Zu Main Corridor (Chamkani to Karkhano)',
        },
        nearestBrtStation: 'ټول ۳۰ سټیشنونه (له ۱ تر ۳۰ پورې)',
        brtStationNumber: 1,
        landmarkDescription: {
          ps: 'د پېښور له ختیځ (څمکني) څخه د لویدیځ (کارخانو مارکیټ) تر پایه پر جی ټي سړک، صدر او پوهنتون سړک',
          ur: 'پشاور جی ٹی روڈ، صدر اور یونیورسٹی روڈ پر 27 کلومیٹر طویل کوریڈور',
          en: '27.6 km dedicated corridor along GT Road, Saddar, and University Road',
        },
        mapQuery: 'Zu Peshawar BRT Stations',
      },
    ],
    workingHours: {
      ps: 'هره ورځ د سهار له ۶:۰۰ تر د شپې ۱۰:۰۰ پورې پرله پسې بسونه',
      ur: 'روزانہ صبح 6:00 تا رات 10:00 مسلسل بس سروس',
      en: 'Daily from 6:00 AM to 10:00 PM (Buses every 2-5 minutes)',
    },
    feeInfo: {
      ps: 'د سفر کرایه: له ۱۵ روپیو څخه تر ۵۵ روپیو پورې (د فاصلې په اساس). د نوي زو کارت قیمت شاوخوا ۳۰۰ روپۍ (د کریډیټ سره).',
      ur: 'کرایہ: 15 روپے سے 55 روپے فاصلے کے حساب سے۔ نیا زو کارڈ تقریباً 300 روپے بمعہ بیلنس۔',
      en: 'Fare: PKR 15 to PKR 55 depending on distance. Zu Card: ~PKR 300 (includes balance).',
    },
    processingTime: {
      ps: 'ټکټ ماشین سمدستي ټوکن ورکوي (۱ دقیقه)',
      ur: 'مشین سے 1 منٹ میں ٹوکن جاری ہوتا ہے',
      en: 'Instant ticketing via Ticket Vending Machine (TVM) or cash counters',
    },
    documents: [
      {
        id: 'doc-brt-money',
        name: {
          ps: 'خردې پیسې (د ټوکن یا کارت لپاره ۱۰، ۲۰، ۵۰، ۱۰۰ نوټونه)',
          ur: 'کھلے پیسے یا نوٹ (مشین میں 10، 20، 50، 100 کے نوٹ چلتے ہیں)',
          en: 'Cash currency notes (Rs. 10, 20, 50, 100) for ticket machines',
        },
        mandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          ps: '۱. سټیشن ته ننوتل او ټکټ اخیستل',
          ur: '1. اسٹیشن پر آمد اور ٹکٹ کاؤنٹر',
          en: '1. Station Entry & Ticket Purchase',
        },
        instruction: {
          ps: 'د سټیشن په زینو یا برقي لفټ پورته شئ. که زو کارت لرئ نیغ ورشئ، که نه وي د ټکټ ماشین (TVM) یا کاونټر ته نغدې پیسې ورکړئ او ګرد ټوکن یا نوی کارت واخلئ.',
          ur: 'اسٹیشن پر چڑھیں۔ کاؤنٹر یا وینڈنگ مشین سے سفر کے لیے ٹوکن حاصل کریں یا مستقل زو کارڈ خریدیں۔',
          en: 'Enter the station via escalators or lift. Buy a round plastic single-journey token at the TVM machine or buy a reloadable Zu Card.',
        },
      },
      {
        stepNumber: 2,
        title: {
          ps: '۲. د دروازې له لارې تیریدل (ټیپ کول)',
          ur: '2. گیٹ پر ٹوکن یا کارڈ ٹیپ کرنا',
          en: '2. Tap at Entry Turnstile Gate',
        },
        instruction: {
          ps: 'خپل زو کارت یا ګرد ټوکن د شنه تیر نښې په سر ټیپ کړئ. دروازه به پرانیستل شي او تاسو پلیټ فارم ته داخل شئ.',
          ur: 'گیٹ پر کارڈ یا ٹوکن لگائیں، بیپ کی آواز کے ساتھ گیٹ کھلے گا۔ ٹوکن جیب میں محفوظ رکھیں!',
          en: 'Tap your card or token against the green glowing sensor on the turnstile gate. Keep your token safe for exiting!',
        },
      },
      {
        stepNumber: 3,
        title: {
          ps: '۳. په سم بس کې کښیناستل (Xpress که Stopping)',
          ur: '3. درست بس میں سوار ہونا (ایکسپریس یا اسٹاپنگ)',
          en: '3. Boarding Correct Bus (Express vs Stopping)',
        },
        instruction: {
          ps: 'پلیټ فارم ته وګورئ: که بس ته "Xpress" لیکلي وي، په هر سټیشن نه ودریږي. که تاسو واړه سټیشن ته ځئ، عادي "Stopping" بس کې کښینئ.',
          ur: 'اسٹاپنگ بس ہر اسٹیشن رکتی ہے جبکہ ایکسپریس بس صرف بڑے اسٹاپس پر رکتی ہے۔ بورڈ دیکھ کر سوار ہوں۔',
          en: 'Check the bus digital display: "Stopping" buses stop at all 30 stations; "Xpress" buses only stop at major hubs.',
        },
      },
      {
        stepNumber: 4,
        title: {
          ps: '۴. کوزیدل او وتل',
          ur: '4. منزل پر اترنا اور ایگزٹ',
          en: '4. Alighting & Exit Scan',
        },
        instruction: {
          ps: 'خپل سټیشن ته په رسیدو سره کوز شئ. د وتلو په دروازه کې ټوکن په سوري کې واچوئ، یا کارت بیا ټیپ کړئ چې کرایه ترې کم شي.',
          ur: 'منزل پر اتر کر ایگزٹ گیٹ پر ٹوکن سلاٹ میں ڈال دیں تاکہ گیٹ کھل جائے، یا کارڈ دوبارہ ٹیپ کریں۔',
          en: 'Drop your token into the exit turnstile slot, or tap your Zu Card again to deduct the distance-based fare.',
        },
      },
    ],
    audioScript: {
      ps: 'د بي آر ټي بس لپاره سټیشن ته پورته شئ. هلته له ماشین یا کاونټر څخه ټوکن واخلئ. ټوکن په دروازه ووهئ چې لاړ شئ. په وتلو کې به ټوکن بیرته په ماشین کې اچوئ. بسونه ډیر ارامه او د ښځو لپاره جلا برخه لري.',
      ur: 'بی آر ٹی میں سفر کے لیے اسٹیشن پہنچ کر کاؤنٹر سے ٹوکن لیں۔ گیٹ پر ٹچ کر کے اندر جائیں۔ بس میں خواتین اور بزرگوں کی مخصوص نشستیں ہیں۔ واپسی پر گیٹ میں ٹوکن ڈال کر باہر نکلیں۔',
      en: 'To travel on Zu Peshawar, enter any station and purchase a token or Zu Card. Tap to enter. Dedicated compartments for families and women are at the front. Insert token at exit gate.',
    },
    helpline: '091-111-477-477',
    criticalTips: [
      {
        ps: 'د ګرد ټوکن په جیب کې ساتل اړین دي؛ که ټوکن مو ورک کړ نو په وتلو کې به جریمه درکوي.',
        ur: 'سفر کے دوران پلاسٹک کا ٹوکن ہرگز نہ پھینکیں، ایگزٹ پر ٹوکن کے بغیر گیٹ نہیں کھلتا۔',
        en: 'Never lose your plastic token during the ride; you must insert it to open the exit turnstile.',
      },
      {
        ps: 'د بس مخکینۍ برخه د میرمنو او کورنیو لپاره ځانګړې ده.',
        ur: 'بس کا اگلا حصہ خواتین اور فیملیز کے لیے مخصوص ہے۔',
        en: 'The front section of all Zu buses is strictly reserved for women and families.',
      },
    ],
  },
  {
    id: 'nadra-mega-center',
    category: 'identity',
    icon: 'CreditCard',
    title: {
      ps: 'نادرا شناختي کارډ او ب-فارم (میګا سنټر)',
      ur: 'نادرا شناختی کارڈ، ب-فارم اور خاندانی تصدیق',
      en: 'NADRA Smart CNIC, B-Form & FRC',
    },
    shortDesc: {
      ps: 'د ابداره سړک ۲۴ ساعته پرانیستي میګا سنټر او حیات آباد کې د نوي شناختي کارډ او کورنۍ اسنادو جوړول',
      ur: 'ابدارہ روڈ 24 گھنٹے میگا سینٹر اور حیات آباد میں شناختی کارڈ، ب فارم اور ایف آر سی کا اجرا',
      en: '24/7 Mega Center Abdara Road and Phase 5 centers for Smart CNIC, B-Form, and FRC',
    },
    officeName: {
      ps: 'نادرا میګا سنټر او سیمه ایز دفتر پېښور',
      ur: 'نادرا میگا سینٹر اور ریجنل ہیڈ آفس پشاور',
      en: 'NADRA Mega Center Peshawar',
    },
    locations: [
      {
        name: {
          ps: 'نادرا میګا سنټر ابداره روډ (۲۴ ساعته پرانیستی)',
          ur: 'نادرا میگا سینٹر ابدارہ روڈ (24 گھنٹے کھلا)',
          en: 'NADRA Mega Center Abdara Road (24/7 Open)',
        },
        nearestBrtStation: 'Abdara Road (سټیشن ۱۹)',
        brtStationNumber: 19,
        landmarkDescription: {
          ps: 'د یونیورسټي سړک، ابداره چوڪ مخامخ، پیاده ۳ دقیقې لاره',
          ur: 'یونیورسٹی روڈ، ابدارہ چوک کے سامنے، بی آر ٹی اسٹیشن سے 3 منٹ پیدل',
          en: 'University Road, opposite Abdara Chowk, 3 minutes walk from BRT Station #19',
        },
        mapQuery: 'NADRA Mega Center Abdara Road Peshawar',
      },
      {
        name: {
          ps: 'نادرا ریجنل هیډکوارټر حیات آباد فیز ۵',
          ur: 'نادرا ریجنل ہیڈکوارٹرز حیات آباد فیز 5',
          en: 'NADRA Regional Headquarters Phase 5 Hayatabad',
        },
        nearestBrtStation: 'Hospital Chowk (سټیشن ۲۸) + Feeder',
        brtStationNumber: 28,
        landmarkDescription: {
          ps: 'فیز ۵ حیات آباد، د ډیوو بس اډې شاته',
          ur: 'فیز 5 حیات آباد، بالمقابل پارک روڈ',
          en: 'Phase 5 Hayatabad, accessible via Feeder or Rickshaw from Hospital Chowk',
        },
        mapQuery: 'NADRA Regional Head Office Hayatabad Peshawar',
      },
    ],
    workingHours: {
      ps: 'ابداره روډ میګا سنټر: ۲۴ ساعته خلاص (شپه او ورځ) | نور دفترونه: ۸:۳۰ تر ۴:۳۰',
      ur: 'ابدارہ میگا سینٹر: 24 گھنٹے 7 دن کھلا رہتا ہے | دیگر برانچز: 8:30 صبح تا 4:30 شام',
      en: 'Abdara Road Mega Center: 24 Hours / 7 Days | Other Tehsil offices: 8:30 AM to 4:30 PM',
    },
    feeInfo: {
      ps: 'سمارټ کارډ نورمل: ۷۵۰ روپۍ | ارجنټ: ۱,۵۰۰ روپۍ | ایګزیکټیو: ۲,۵۰۰ روپۍ | ب-فارم: ۵۰۰ روپۍ',
      ur: 'اسمارٹ کارڈ نارمل: 750 روپے | ارجنٹ: 1,500 روپے | ایگزیکٹو: 2,500 روپے | ب فارم: 500 روپے',
      en: 'Smart CNIC Normal: PKR 750 | Urgent: PKR 1,500 | Executive: PKR 2,500 | B-Form: PKR 500',
    },
    processingTime: {
      ps: 'نورمل: ۳۰ ورځې | ارجنټ: ۱۵ ورځې | ایګزیکټیو: ۷ ورځې',
      ur: 'نارمل: 30 دن | ارجنٹ: 15 دن | ایگزیکٹو: 7 دن',
      en: 'Normal: 30 days | Urgent: 15 days | Executive: 7 working days',
    },
    documents: [
      {
        id: 'doc-nadra-old',
        name: {
          ps: 'پخوانی شناختي کارډ (که تجدید وي) یا اصلي زیږون سند / ب-فارم',
          ur: 'پرانا شناختی کارڈ یا اصل برتھ سرٹیفکیٹ / ب فارم',
          en: 'Old CNIC (if renewal) or Original Birth Certificate / B-Form',
        },
        mandatory: true,
      },
      {
        id: 'doc-nadra-blood',
        name: {
          ps: 'د کورنۍ نږدې وینې د غړي (پلار، مور، ورور یا بالغ اولاد) شناختي کارډ او موجودیت د تصدیق لپاره',
          ur: 'خونی رشتہ دار (والد، والدہ، بھائی یا بالغ اولاد) کا شناختی کارڈ اور موقع پر موجودگی',
          en: 'Blood relative (Father, Mother, Brother, or Adult Child) CNIC and biometric witness',
        },
        mandatory: true,
      },
      {
        id: 'doc-nadra-nikah',
        name: {
          ps: 'د واده شوو میرمنو لپاره: د میړه شناختي کارډ او اصلي نکاح نامه',
          ur: 'شادی شدہ خواتین کے لیے: شوہر کا شناختی کارڈ اور نکاح نامہ',
          en: 'For married women: Husband’s CNIC and official Nikahnama',
        },
        mandatory: false,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          ps: '۱. میګا سنټر ته ورتلل او ټوکن اخیستل',
          ur: '1. میگا سینٹر میں آمد اور ٹوکن',
          en: '1. Center Entry & Token Issuance',
        },
        instruction: {
          ps: 'د بي آر ټي په ۱۹ نمبر سټیشن (Abdara Road) کوز شئ. د ابداره میګا سنټر ته ننوځئ او خپل اړوند ټوکن (نورمل یا ایګزیکټیو) واخلئ.',
          ur: 'بی آر ٹی اسٹیشن 19 (ابدارہ روڈ) پر اتریں۔ میگا سینٹر میں داخل ہو کر مطلوبہ کیٹیگری کا ٹوکن لیں۔',
          en: 'Alight at BRT Station #19 (Abdara Road). Walk across to the Mega Center and select your queue token (Normal or Executive).',
        },
      },
      {
        stepNumber: 2,
        title: {
          ps: '۲. د عکس او بایومټریک کاونټر',
          ur: '2. تصویر اور فنگر پرنٹ کاؤنٹر',
          en: '2. Photograph & Biometric Capture',
        },
        instruction: {
          ps: 'کله چې ټوکن وبلل شي، ډیجیټل کیمرې ته کښینئ او د دواړو لاسونو د ګوتو نښې ورکړئ.',
          ur: 'ٹوکن نمبر پر لائیو تصویر اور دونوں ہاتھوں کے فنگر پرنٹس سسٹم میں داخل کرائیں۔',
          en: 'Have your official facial photo taken and roll all 10 fingers on the digital biometric scanner.',
        },
      },
      {
        stepNumber: 3,
        title: {
          ps: '۳. د معلوماتو اندراج او د خپلوانو تصدیق',
          ur: '3. ڈیٹا انٹری اور بائیو میٹرک تصدیق',
          en: '3. Data Entry & Relative Verification',
        },
        instruction: {
          ps: 'کارمند به ستاسو پته او معلومات داخل کړي. ستاسو سره راغلی پلار، ورور یا نږدې خپلوان به خپل د ګوتې نښه د شاهد په توګه لګوي.',
          ur: 'ہمراہ آئے ہوئے والد یا بھائی کے بائیو میٹرک سے تصدیق مکمل ہوگی۔',
          en: 'Data entry is completed. Your accompanying blood relative (father, mother, sibling) provides their thumbprint verification.',
        },
      },
      {
        stepNumber: 4,
        title: {
          ps: '۴. فارم چک کول او د رسید اخیستل',
          ur: '4. پرنٹ چیک کرنا اور ٹریکنگ سلپ',
          en: '4. Printed Form Check & Tracking Slip',
        },
        instruction: {
          ps: 'چاپ شوی فارم په دقت ولولئ ترڅو په نوم یا تاریخ کې غلطي نه وي. رسید وساتئ او کله چې پېغام راشي، کارډ واخلئ.',
          ur: 'فارم پر اپنے کوائف کی تصدیق کر کے رسید حاصل کریں۔ ایس ایم ایس موصول ہونے پر کارڈ وصول کریں۔',
          en: 'Carefully proofread the printed confirmation sheet before leaving. Keep your tracking receipt until SMS notification arrives.',
        },
      },
    ],
    audioScript: {
      ps: 'د نادرا کارډ لپاره د بي آر ټي سټیشن ۱۹ ابداره روډ ته ورشئ. دا میګا سنټر ۲۴ ساعته شپه او ورځ خلاص وي. خپل پلار یا ورور له ځانه سره راولئ چې د ګوتې نښه ولګوي. که ارجنټ غواړئ نو ژر تیاریږي.',
      ur: 'شناختی کارڈ بنوانے کے لیے بی آر ٹی اسٹیشن 19 ابدارہ روڈ پر واقع میگا سینٹر تشریف لائیں جو 24 گھنٹے کھلا رہتا ہے۔ اپنے ساتھ والد یا بھائی کو ضرور لائیں تاکہ بائیو میٹرک گواہی ہو سکے۔',
      en: 'For NADRA CNIC services, visit the 24/7 Mega Center at Abdara Road (BRT Station 19). Bring an immediate blood relative with their CNIC for biometric witness.',
    },
    helpline: '1777 (له موبایل) / 051-111-786-100',
    criticalTips: [
      {
        ps: 'که په ورځ کې د خلکو ګڼه ګوڼه ډیره وي، د شپې له خوا د ابداره میګا سنټر ته لاړ شئ ځکه ۲۴ ساعته فعال وي او رش کم وي.',
        ur: 'دن کے وقت رش سے بچنے کے لیے شام یا رات کو ابدارہ میگا سینٹر کا رخ کریں، وہاں 24 گھنٹے کام ہوتا ہے۔',
        en: 'To avoid heavy daytime queues, visit the Abdara Road Mega Center in the evening or night hours (open 24/7).',
      },
    ],
  },
  {
    id: 'hospitals-sehat-card',
    category: 'health',
    icon: 'HeartPulse',
    title: {
      ps: 'روغتونونه او د صحت کارډ پلس وړیا علاج',
      ur: 'بڑے ہسپتال اور صحت کارڈ پلس مفت علاج',
      en: 'Major Hospitals & Sehat Card Plus',
    },
    shortDesc: {
      ps: 'د ليډي ریډینګ (LRH)، خیبر ټیچینګ (KTH) او حیات آباد کمپلیکس (HMC) ته لارښود او د صحت کارډ کارول',
      ur: 'لیڈی ریڈنگ ہسپتال، خیبر ٹیچنگ اور ایچ ایم سی کا راستہ اور صحت کارڈ سے مفت داخلے کا طریقہ',
      en: 'Navigating LRH, KTH, and HMC hospitals and utilizing Sehat Card Plus for free inpatient care',
    },
    officeName: {
      ps: 'د خیبر پښتونخوا د روغتیا څانګه او عامه روغتونونه',
      ur: 'محکمہ صحت خیبر پختونخوا و تدریسی ہسپتال',
      en: 'KPK Health Department & Tertiary Teaching Hospitals',
    },
    locations: [
      {
        name: {
          ps: 'ليډي ریډینګ هسپتال - LRH (تاریخي ښار او خیبر بازار)',
          ur: 'لیڈی ریڈنگ ہسپتال - LRH (خیبر بازار پشاور)',
          en: 'Lady Reading Hospital - LRH (Khyber Bazar)',
        },
        nearestBrtStation: 'Khyber Bazar (سټیشن ۱۰)',
        brtStationNumber: 10,
        landmarkDescription: {
          ps: 'د بي آر ټي سټیشن ۱۰ دروازې سره مخامخ، د ایمرجنسي او باچا خان ودانۍ دروازه',
          ur: 'بی آر ٹی اسٹیشن 10 کے بالکل سامنے، مین ایمرجنسی گیٹ',
          en: 'Directly in front of BRT Station #10 (Khyber Bazar), main emergency and OPD gates',
        },
        mapQuery: 'Lady Reading Hospital Peshawar',
      },
      {
        name: {
          ps: 'خیبر ټیچینګ هسپتال - KTH (یونیورسټي روډ)',
          ur: 'خیبر ٹیچنگ ہسپتال - KTH (یونیورسٹی روڈ)',
          en: 'Khyber Teaching Hospital - KTH (University Road)',
        },
        nearestBrtStation: 'University of Peshawar (سټیشن ۲۱)',
        brtStationNumber: 21,
        landmarkDescription: {
          ps: 'د اسلامیه کالج او پېښور پوهنتون مخامخ، پښتونخوا روغتیايي پوهنځی',
          ur: 'اسلامیہ کالج کے بالکل سامنے، بی آر ٹی اسٹیشن 21',
          en: 'Directly opposite Islamia College on University Road, BRT Station #21',
        },
        mapQuery: 'Khyber Teaching Hospital Peshawar',
      },
      {
        name: {
          ps: 'حیات آباد میډیکل کمپلیکس - HMC (فیز ۴ حیات آباد)',
          ur: 'حیات آباد میڈیکل کمپلیکس - HMC (فیز 4 حیات آباد)',
          en: 'Hayatabad Medical Complex - HMC (Phase 4 Hayatabad)',
        },
        nearestBrtStation: 'Hospital Chowk (سټیشن ۲۸)',
        brtStationNumber: 28,
        landmarkDescription: {
          ps: 'د بي آر ټي سټیشن ۲۸ سره متصل، د پښتورګو انسټیټیوټ (IKD) او کینسر سنټر',
          ur: 'بی آر ٹی اسٹیشن 28 ہسپتال چوک پر واقع، کڈنی سینٹر کے ساتھ',
          en: 'Directly at BRT Station #28 (Hospital Chowk), adjacent to Institute of Kidney Diseases',
        },
        mapQuery: 'Hayatabad Medical Complex Peshawar',
      },
    ],
    workingHours: {
      ps: 'بیړنۍ (ایمرجنسي) څانګه: ۲۴ ساعته هره ورځ خلاص | OPD (معاینات): سهار ۸:۰۰ تر ۲:۰۰',
      ur: 'ایمرجنسی وارڈ: 24 گھنٹے ہر روز | او پی ڈی: صبح 8:00 تا دوپہر 2:00',
      en: 'Emergency Services: 24/7 Non-stop | OPD Clinics: 8:00 AM to 2:00 PM',
    },
    feeInfo: {
      ps: 'د صحت کارډ پلس لرونکو لپاره ټول داخل بستر علاج، عملیات او دواګانې ۱۰۰٪ وړیا دي. د OPD ټکټ شاوخوا ۵۰ روپۍ دی.',
      ur: 'صحت کارڈ پلس پر تمام داخل مریضوں کا علاج، آپریشن اور ادویات بالکل مفت ہیں۔ او پی ڈی پرچی 50 روپے ہے۔',
      en: '100% Free inpatient hospitalization, surgeries, and medicines via Sehat Card Plus. OPD slip: ~PKR 50.',
    },
    processingTime: {
      ps: 'ایمرجنسي داخلیدل: سمدستي',
      ur: 'ایمرجنسی داخلہ فوری',
      en: 'Emergency triage: Immediate',
    },
    documents: [
      {
        id: 'doc-hospital-cnic',
        name: {
          ps: 'د ناروغ او د کورنۍ د مشر اصل نادرا شناختي کارډ (CNIC)',
          ur: 'مریض اور سربراہِ خاندان کا اصل کمپیوٹرائزڈ شناختی کارڈ',
          en: 'Original NADRA CNIC of patient and family head',
        },
        mandatory: true,
      },
      {
        id: 'doc-hospital-child-bform',
        name: {
          ps: 'که ناروغ ماشوم وي: اصل ب-فارم او د پلار شناختي کارډ',
          ur: 'اگر مریض بچہ ہو تو اصل ب فارم اور والد کا شناختی کارڈ',
          en: 'For child patient: Original B-Form and Father’s CNIC',
        },
        mandatory: false,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          ps: '۱. تر ټولو نږدې روغتون ته په بي آر ټي تلل',
          ur: '1. بی آر ٹی کے ذریعے متعلقہ ہسپتال پہنچنا',
          en: '1. Reach Nearest Hospital via BRT',
        },
        instruction: {
          ps: 'که LRH ته ځئ سټیشن ۱۰ (خیبر بازار) کې کوز شئ؛ که KTH ته ځئ سټیشن ۲۱ (یونیورسټي) کې کوز شئ؛ او که HMC ته ځئ سټیشن ۲۸ (هسپتال چوک) کې کوز شئ.',
          ur: 'ایل آر ایچ کے لیے اسٹیشن 10، کے ٹی ایچ کے لیے اسٹیشن 21، اور ایچ ایم سی کے لیے اسٹیشن 28 پر اتریں۔',
          en: 'Use BRT directly to hospital doors: Station #10 for LRH, Station #21 for KTH, Station #28 for HMC.',
        },
      },
      {
        stepNumber: 2,
        title: {
          ps: '۲. ایمرجنسي یا OPD ټوکن اخیستل',
          ur: '2. ایمرجنسی یا او پی ڈی پرچی کاؤنٹر',
          en: '2. OPD or Emergency Registration Slip',
        },
        instruction: {
          ps: 'که بیړنی حالت وي، نیغ په نیغه ایمرجنسي کاونټر ته ننوځئ. که عادي تکلیف وي، د OPD په کاونټر کې د ۵۰ روپیو پرچۍ واخلئ.',
          ur: 'ہنگامی حالت میں سیدھا ایمرجنسی وارڈ جائیں۔ عام معائنے کے لیے 50 روپے کی او پی ڈی پرچی لیں۔',
          en: 'For emergencies, head straight to Emergency triage. For regular checkups, buy an OPD slip at the reception counters.',
        },
      },
      {
        stepNumber: 3,
        title: {
          ps: '۳. د صحت کارډ پلس ډیسک ته مراجعه (که ډاکټر داخل بستر ولیکل)',
          ur: '3. صحت کارڈ کاؤنٹر پر اندراج (داخلے کی صورت میں)',
          en: '3. Sehat Card Plus Facilitation Desk',
        },
        instruction: {
          ps: 'که ډاکټر ولیکل چې ناروغ باید بستر شي یا عملیات شي، په اصلي لابي کې د شنه نښان لرونکي "صحت کارډ کاونټر" ته لاړ شئ او شناختي کارډ وښایئ ترڅو علاج وړیا پیل شي.',
          ur: 'اگر ڈاکٹر مریض کو داخل کرنے کی ہدایت دے تو گرین صحت کارڈ کاؤنٹر پر شناختی کارڈ پیش کریں تاکہ مفت علاج چالو ہو۔',
          en: 'If doctor advises hospital admission or surgery, visit the green Sehat Card Plus desk with the patient CNIC for free package activation.',
        },
      },
    ],
    audioScript: {
      ps: 'د علاج لپاره که ليډي ریډینګ ته ځئ په بي آر ټي سټیشن ۱۰ خیبر بازار کوز شئ. که خیبر ټیچینګ ته ځئ سټیشن ۲۱ او که حیات آباد کمپلیکس ته ځئ سټیشن ۲۸ ته لاړ شئ. خپل شناختي کارډ حتماً راوړئ چې په صحت کارډ وړیا داخل بستر علاج وکړئ.',
      ur: 'علاج کے لیے ایل آر ایچ جانے والے بی آر ٹی اسٹیشن 10، کے ٹی ایچ کے لیے اسٹیشن 21 اور حیات آباد میڈیکل کمپلیکس کے لیے اسٹیشن 28 پر اتریں۔ اپنا اصلی شناختی کارڈ ہمراہ رکھیں تاکہ صحت کارڈ پلس پر مفت علاج مل سکے۔',
      en: 'For medical care: Alight at BRT Station 10 for LRH, Station 21 for KTH, or Station 28 for HMC. Bring your original CNIC to access free treatment under KPK Sehat Card Plus.',
    },
    helpline: '0800-09009 (صحت کارډ وړیا شمیره) / 1122',
    criticalTips: [
      {
        ps: 'د خپلو کورنیو اصل نادرا شناختي کارډونه تل له ځانه سره ولرئ؛ پرته له شناختي کارډ څخه صحت کارډ پلس نه فعالیږي.',
        ur: 'صحت کارڈ پلس کی تمام سہولیات شناختی کارڈ کے ساتھ منسلک ہیں۔ ہسپتال جاتے وقت اصل کارڈ کبھی نہ بھولیں۔',
        en: 'Sehat Card Plus is embedded within your NADRA CNIC; you do not need a separate physical plastic health card.',
      },
    ],
  },
  {
    id: 'university-attestation',
    category: 'education',
    icon: 'GraduationCap',
    title: {
      ps: 'د پوهنتون داخله او د سندونو تصدیق (BISE / HEC)',
      ur: 'یونیورسٹی داخلہ اور تعلیمی اسناد کی تصدیق',
      en: 'University Admissions & Degree Attestation',
    },
    shortDesc: {
      ps: 'د پېښور پوهنتون، اسلامیه کالج او د BISE تعلیمی بورډ کې د سندونو تایید او داخله',
      ur: 'پشاور یونیورسٹی، اسلامیہ کالج اور تعلیمی بورڈ سے میٹرک و ایف ایس سی سندات کی تصدیق',
      en: 'University of Peshawar, Islamia College, and BISE Board Matric/FSc attestation procedures',
    },
    officeName: {
      ps: 'د پېښور پوهنتون او د پېښور تعلیمی بورډ (BISE)',
      ur: 'پشاور تعلیمی بورڈ اور پشاور یونیورسٹی کیمپس',
      en: 'University Campus Peshawar & BISE Board',
    },
    locations: [
      {
        name: {
          ps: 'د پوهنتون کیمپس (UoP, اسلامیه کالج، UET)',
          ur: 'یونیورسٹی کیمپس (پشاور یونیورسٹی، اسلامیہ کالج، یو ای ٹی)',
          en: 'University Campus (UoP, Islamia College, UET)',
        },
        nearestBrtStation: 'University of Peshawar (سټیشن ۲۱)',
        brtStationNumber: 21,
        landmarkDescription: {
          ps: 'د پېښور پوهنتون اصلي دروازه، د ښکلي تاریخي اسلامیه کالج مخامخ',
          ur: 'پشاور یونیورسٹی مین گیٹ، تاریخی اسلامیہ کالج کے سامنے',
          en: 'Main University campus entry gate, opposite historic Islamia College clocktower',
        },
        mapQuery: 'University of Peshawar Campus',
      },
      {
        name: {
          ps: 'د پېښور ایجوکیشن بورډ (BISE Peshawar)',
          ur: 'بورڈ آف انٹرمیڈیٹ اینڈ سیکنڈری ایجوکیشن (BISE پشاور)',
          en: 'BISE Peshawar Education Board',
        },
        nearestBrtStation: 'Board Bazar (سټیشن ۲۲)',
        brtStationNumber: 22,
        landmarkDescription: {
          ps: 'د بورډ بازار بي آر ټي سټیشن ترڅنګ، جمرود روډ',
          ur: 'بورڈ بازار بی آر ٹی اسٹیشن 22 کے بالکل ساتھ',
          en: 'Directly adjacent to BRT Station #22 (Board Bazar) on Jamrud Road',
        },
        mapQuery: 'BISE Peshawar Board Bazar',
      },
    ],
    workingHours: {
      ps: 'دوشنبه تر جمعې، د سهار له ۸:۳۰ تر ماسپښین ۲:۰۰ پورې',
      ur: 'پیر تا جمعہ، صبح 8:30 تا دوپہر 2:00',
      en: 'Monday to Friday, 8:30 AM to 2:00 PM',
    },
    feeInfo: {
      ps: 'د بورډ سند تصدیق: شاوخوا ۸۰۰ تر ۱,۲۰۰ روپۍ د هر سند. فیس د بورډ په ننه د حبیب بانک برانچ کې اخیستل کیږي.',
      ur: 'سند تصدیق فیس: 800 سے 1,200 روپے فی سند۔ بورڈ کے اندر حبیب بینک برانچ میں جمع ہوتی ہے۔',
      en: 'Attestation fee: ~PKR 800 to 1,200 per document. Deposited in HBL branch inside the Board premises.',
    },
    processingTime: {
      ps: 'ورځنی ارجنټ تصدیق: ۲ تر ۴ ساعته | نورمل تصدیق: ۳ ورځې',
      ur: 'ارجنٹ تصدیق: اسی دن 2 سے 4 گھنٹے میں | نارمل: 3 دن',
      en: 'Urgent Same-Day Attestation: 2 to 4 hours | Normal: 3 working days',
    },
    documents: [
      {
        id: 'doc-board-original',
        name: {
          ps: 'اصل ډي ایم سي (DMC) او اصلي سند (میټریک / FSc)',
          ur: 'اصل ڈی ایم سی اور تعلیمی اسناد (میٹرک / ایف ایس سی)',
          en: 'Original Detailed Marks Certificate (DMC) and Certificate',
        },
        mandatory: true,
      },
      {
        id: 'doc-board-cnic',
        name: {
          ps: 'د زده کوونکي او پلار نادرا شناختي کارډ کاپي',
          ur: 'طالب علم اور والد کے شناختی کارڈ کی کاپیاں',
          en: 'Photocopy of student and father CNIC',
        },
        mandatory: true,
      },
      {
        id: 'doc-board-photos',
        name: {
          ps: 'دوه عدد پاسپورټ سایز عکسونه',
          ur: '2 پاسپورٹ سائز تصاویر',
          en: '2 passport-size photographs',
        },
        mandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          ps: '۱. بورډ بازار بي آر ټي سټیشن ته ورتلل',
          ur: '1. بی آر ٹی اسٹیشن 22 (بورڈ بازار) پہنچنا',
          en: '1. Arrive at BRT Station #22 (Board Bazar)',
        },
        instruction: {
          ps: 'په بي آر ټي سټیشن ۲۲ (Board Bazar) کوز شئ. د BISE پېښور بورډ مرکزي دروازې ته ورشئ.',
          ur: 'اسٹیشن 22 پر اتر کر BISE پشاور بورڈ کے مرکزی گیٹ پر تشریف لائیں۔',
          en: 'Alight at BRT Station #22 (Board Bazar). Walk 50 meters into the BISE Peshawar main courtyard.',
        },
      },
      {
        stepNumber: 2,
        title: {
          ps: '۲. د چالان فارم ډکول او بانک ته پیسې ورکول',
          ur: '2. بینک چالان اور فیس ادائیگی',
          en: '2. Fill Challan & Deposit Fee at HBL Counter',
        },
        instruction: {
          ps: 'د ون-ونډو (One Window) کاونټر څخه چالان واخلئ او د بورډ په انګړ کې په حبیب بانک کې پیسې جمع کړئ.',
          ur: 'ون ونڈو سیل سے چالان لے کر احاطے میں موجود بینک میں فیس ادا کریں۔',
          en: 'Collect a challan form from the One-Window facilitation desk and pay fees at the on-site HBL booth.',
        },
      },
      {
        stepNumber: 3,
        title: {
          ps: '۳. ون ونډو سیل (One Window Cell) ته اسناد سپارل',
          ur: '3. ون ونڈو کاؤنٹر پر دستاویزات جمع کرانا',
          en: '3. Submit to One-Window Cell for Verification',
        },
        instruction: {
          ps: 'خپل اصلي سند، چالان رسید او کاپۍ په ۳ نمبر کاونټر کې وسپارئ. که ارجنټ وي، په ۲ ساعتونو کې مهر او لاسلیک شوی سند بېرته درکول کیږي.',
          ur: 'فائل جمع کرائیں؛ ارجنٹ فیس کی صورت میں اسی دن 2 گھنٹوں میں تصدیق شدہ سند واپس مل جائے گی۔',
          en: 'Submit documents at the window. Urgent applications are stamped, embossed, and returned within 2 to 3 hours.',
        },
      },
    ],
    audioScript: {
      ps: 'د پوهنتون سندونو او د بورډ سند تصدیق لپاره د بي آر ټي په سټیشن ۲۲ بورډ بازار کې کوز شئ. هلته د BISE پېښور دفتر دی. خپل اصلي سند او چالان جمع کړئ، په همدغه ورځ تصدیق شوی سند درکول کیږي.',
      ur: 'میٹرک اور ایف ایس سی کی اسناد کی تصدیق کے لیے بی آر ٹی اسٹیشن 22 بورڈ بازار اتریں۔ پشاور تعلیمی بورڈ کے ون ونڈو کاؤنٹر پر فیس جمع کرا کر اسی دن تصدیق حاصل کریں۔',
      en: 'For board certificate attestation, alight at BRT Station 22 (Board Bazar). Visit BISE Peshawar One-Window facilitation cell for same-day urgent verification.',
    },
    helpline: '091-9221404',
    criticalTips: [
      {
        ps: 'که د پوهنتون د لیسانس یا ماسټرۍ سند تصدیق کوئ، د HEC ریجنل سنټر ته لاړ شئ چې په فیز ۵ حیات آباد کې دی.',
        ur: 'بیچلر یا ماسٹرز ڈگری کی تصدیق کے لیے ایچ ای سی (HEC) فیز 5 حیات آباد جانا ہوتا ہے۔',
        en: 'For bachelor/master degree attestation by HEC, visit the HEC Regional Center located in Phase 5 Hayatabad.',
      },
    ],
  },
  {
    id: 'domicile-certificate',
    category: 'certificates',
    icon: 'FileBadge',
    title: {
      ps: 'د ډومیسائل سند جوړول (DC دفتر)',
      ur: 'ڈومیسائل اور پی آر سی سرٹیفکیٹ (ڈی سی آفس)',
      en: 'Domicile & PRC Certificate (DC Office)',
    },
    shortDesc: {
      ps: 'د ډپټي کمشنر (DC) دفتر پېښور له لارې د استوګنې ډومیسائل اخیستل د نوکرۍ او داخلې لپاره',
      ur: 'ڈپٹی کمشنر پشاور آفس سے ڈومیسائل اور لوکل سرٹیفکیٹ حاصل کرنے کا مکمل مرحلہ وار گائیڈ',
      en: 'Step-by-step guide to obtaining official Peshawar district domicile certificate',
    },
    officeName: {
      ps: 'د ډپټي کمشنر دفتر پېښور (DC Office Cantt)',
      ur: 'ڈپٹی کمشنر دفتر پشاور (ڈی سی آفس کینٹ)',
      en: 'Deputy Commissioner Office Peshawar (Cantt)',
    },
    locations: [
      {
        name: {
          ps: 'د ډپټي کمشنر او اسسټنټ کمشنر دفترونه (کینټ)',
          ur: 'ڈپٹی کمشنر آفس کینٹ پشاور',
          en: 'DC Office Peshawar (Near FC Chowk / Cantt)',
        },
        nearestBrtStation: 'FC Chowk (سټیشن ۱۴)',
        brtStationNumber: 14,
        landmarkDescription: {
          ps: 'د پېښور کینټ، خادم کعبه چوک او د پوليس لاین پخوانۍ لار',
          ur: 'کینٹ ایریا، خادم کعبہ چوک، بی آر ٹی اسٹیشن 14',
          en: 'Cantt Area near Khadim-e-Kaba Chowk and Civil Secretariat, BRT Station #14',
        },
        mapQuery: 'Deputy Commissioner Office Peshawar',
      },
    ],
    workingHours: {
      ps: 'دوشنبه تر جمعې، د سهار له ۹:۰۰ تر ماسپښین ۲:۰۰ پورې',
      ur: 'پیر تا جمعہ، صبح 9:00 تا دوپہر 2:00',
      en: 'Monday to Friday, 9:00 AM to 2:00 PM',
    },
    feeInfo: {
      ps: 'د غوښتنلیک فیس: شاوخوا ۲۰۰ تر ۳۰۰ روپۍ د نشنل بانک چالان له لارې',
      ur: 'سرکاری فیس: 200 سے 300 روپے بذریعہ نیشنل بینک چالان',
      en: 'Official fee: ~PKR 200 to 300 paid via NBP Challan',
    },
    processingTime: {
      ps: '۳ تر ۵ کاري ورځې',
      ur: '3 تا 5 ورکنگ ڈیز',
      en: '3 to 5 working days',
    },
    documents: [
      {
        id: 'doc-dom-form',
        name: {
          ps: 'د ډومیسائل غوښتنلیک فارم او بیانیه (Form A)',
          ur: 'ڈومیسائل درخواست فارم اور بیان حلفی',
          en: 'Domicile Application Form & Affidavit',
        },
        mandatory: true,
      },
      {
        id: 'doc-dom-cnic',
        name: {
          ps: 'د غوښتونکي او د پلار شناختي کارډ (CNIC) کاپي',
          ur: 'درخواست گزار اور والد کا شناختی کارڈ یا ب فارم',
          en: 'Applicant & Father CNIC / B-Form copies',
        },
        mandatory: true,
      },
      {
        id: 'doc-dom-residence',
        name: {
          ps: 'د پېښور د استوګنې ثبوت (د برېښنا یا ګاز بل، یا د کور کرایې خط)',
          ur: 'رہائش کا ثبوت (بجلی/گیس کا بل، کرایہ نامہ یا فرد ملکیت)',
          en: 'Proof of Peshawar residence (Electricity bill, Tenancy agreement, or Property Fard)',
        },
        mandatory: true,
      },
      {
        id: 'doc-dom-photos',
        name: {
          ps: 'دوه عدد پاسپورټ سایز عکسونه',
          ur: '2 عدد تصاویر',
          en: '2 passport-size photographs',
        },
        mandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          ps: '۱. د فارم ډکول او د کلي د ملک / ناظم لاسلیک',
          ur: '1. فارم پر کونسلر یا پٹواری کی تصدیق',
          en: '1. Verification by Local Patwari / Councilor',
        },
        instruction: {
          ps: 'د ډومیسائل فارم ترلاسه کړئ او د خپلې سیمې پټواري یا د کلي کونسلر څخه مهر او لاسلیک پرې واخلئ چې تاسو دلته اوسېږئ.',
          ur: 'فارم پر مقامی پٹواری یا ویلج کونسل چیئرمین سے رہائش کی تصدیق کرائیں۔',
          en: 'Have your application verified by your local area Patwari or Village Council chairman.',
        },
      },
      {
        stepNumber: 2,
        title: {
          ps: '۲. ډپټي کمشنر (DC) دفتر ته ورتلل',
          ur: '2. ڈی سی آفس کینٹ میں فائل جمع کرانا',
          en: '2. Submission at DC Office Cantt',
        },
        instruction: {
          ps: 'د بي آر ټي په ۱۴ نمبر سټیشن (FC Chowk) کوز شئ. د DC دفتر ډومیسائل کاونټر ته اسناد وسپارئ او رسید واخلئ.',
          ur: 'بی آر ٹی اسٹیشن 14 (ایف سی چوک) پر اتر کر ڈی سی آفس تشریف لائیں اور کاؤنٹر پر جمع کرائیں۔',
          en: 'Alight at BRT Station #14 (FC Chowk). Submit your completed file at the Citizen Facilitation counter.',
        },
      },
      {
        stepNumber: 3,
        title: {
          ps: '۳. د لاسلیک شوي ډومیسائل اخیستل',
          ur: '3. دستخط شدہ ڈومیسائل کی وصولی',
          en: '3. Receive Official Stamped Domicile',
        },
        instruction: {
          ps: 'د ۳ ورځو وروسته خپل رسید راوړئ او د اسسټنټ کمشنر لخوا تایید شوی اصل ډومیسائل ترلاسه کړئ.',
          ur: '3 دن بعد رسید دکھا کر اسسٹنٹ کمشنر کا جاری کردہ اصل ڈومیسائل حاصل کریں۔',
          en: 'Present your token receipt after 3-5 days to collect the Assistant Commissioner signed certificate.',
        },
      },
    ],
    audioScript: {
      ps: 'د پېښور ډومیسائل لپاره د بي آر ټي سټیشن ۱۴ ایف سي چوک کینټ کې کوز شئ. د کلي د پټواري یا کونسلر له تصدیق وروسته د ډپټي کمشنر DC دفتر ته ورشئ. درې ورځو کې ستاسو ډومیسائل تیار وي.',
      ur: 'ڈومیسائل بنوانے کے لیے بی آر ٹی اسٹیشن 14 ایف سی چوک کینٹ اتریں۔ پٹواری کی تصدیق کے بعد ڈی سی آفس میں جمع کرائیں، 3 دن میں آپ کا ڈومیسائل مل جائے گا۔',
      en: 'For Peshawar domicile, alight at BRT Station 14 (FC Chowk). Submit your verified form at the DC Office; processing takes approximately 3 working days.',
    },
    helpline: '091-9211338',
    criticalTips: [
      {
        ps: 'که تاسو له قبایلي سیمو (خیبر، کورم، باجوړ یا وزیرستان) څخه پېښور ته راغلي یاست، ستاسو ډومیسائل به ستاسو د خپلې سیمې د ډپټي کمشنر له دفتر څخه جوړیږي.',
        ur: 'ضم شدہ قبائلی اضلاع کے رہائشی اپنا ڈومیسائل اپنے آبائی ضلع کے ڈی سی آفس سے حاصل کریں گے۔',
        en: 'Citizens belonging to merged tribal districts (Khyber, Kurram, Waziristan, Bajaur) must obtain domicile from their respective native DC office.',
      },
    ],
  },
  {
    id: 'budget-lodging-sarai',
    category: 'lodging',
    icon: 'Building',
    title: {
      ps: 'ارزانه مسافرخانې، هوټلونه او وړیا پناه ګاه',
      ur: 'سستی مسافر خانے، ہوٹل اور مفت پناہ گاہ',
      en: 'Affordable Sarai, Hotels & Free Panahgah',
    },
    shortDesc: {
      ps: 'د ناروغانو د پایوازانو او لرې پرتو مسافرو لپاره د اوسیدو خوندي او ارزان ځایونه',
      ur: 'ہسپتالوں کے تیمارداروں اور دور دراز مسافروں کے لیے محفوظ اور مناسب رہائش',
      en: 'Safe, low-cost rooms and free government shelters for patients and travelers in Peshawar',
    },
    officeName: {
      ps: 'د مسافرو د استوګنې او پناه ګاه څانګه',
      ur: 'مسافر خانے و پناہ گاہ پشاور',
      en: 'Peshawar Traveler Lodging & Shelters',
    },
    locations: [
      {
        name: {
          ps: 'د نمک منډۍ او خیبر بازار هوټلونه (د LRH روغتون مخامخ)',
          ur: 'نمک منڈی و خیبر بازار ہوٹلز (لیڈی ریڈنگ ہسپتال کے قریب)',
          en: 'Namak Mandi & Khyber Bazar Hotels (Near LRH)',
        },
        nearestBrtStation: 'Khyber Bazar (سټیشن ۱۰)',
        brtStationNumber: 10,
        landmarkDescription: {
          ps: 'د ليډي ریډینګ روغتون له دروازې څخه ۵ دقیقې پیاده، د نمک منډۍ سړک',
          ur: 'لیڈی ریڈنگ ہسپتال سے چند قدم فاصلے پر، نمک منڈی چوک',
          en: '5 minutes walk from LRH Hospital gate along Namak Mandi road',
        },
        mapQuery: 'Hotels Namak Mandi Peshawar',
      },
      {
        name: {
          ps: 'د حاجي کیمپ او جي ټي روډ مسافرخانې',
          ur: 'حاجی کیمپ اور جی ٹی روڈ مسافر خانے',
          en: 'Old Haji Camp & GT Road Sarai',
        },
        nearestBrtStation: 'Old Haji Camp (سټیشن ۵)',
        brtStationNumber: 5,
        landmarkDescription: {
          ps: 'د جنرل بس سټینډ مخامخ او شاوخوا، د سوات او قبایلو مسافرانو لپاره',
          ur: 'جنرل بس اسٹینڈ کے اطراف، سوات اور قبائلی مسافروں کے لیے مناسب قیمتیں',
          en: 'Directly opposite the General Bus Stand, highly accessible from buses',
        },
        mapQuery: 'Hotels Haji Camp GT Road Peshawar',
      },
      {
        name: {
          ps: 'سرکاري احساس پناه ګاه (وړیا شپه او ډوډۍ)',
          ur: 'سرکاری پناہ گاہ (مفت رات کا قیام اور کھانا)',
          en: 'Government Panahgah (Free Stay & Food)',
        },
        nearestBrtStation: 'Old Haji Camp (سټیشن ۵) / Khyber Bazar (#10)',
        brtStationNumber: 5,
        landmarkDescription: {
          ps: 'د حاجي کیمپ دننه او د LRH روغتون ترڅنګ، بې وزله مسافرو ته وړیا ځای',
          ur: 'حاجی کیمپ اور لیڈی ریڈنگ ہسپتال کے قریب، مستحق مسافروں کے لیے مفت بستر اور کھانا',
          en: 'Free overnight beds and hot dinner for low-income patients & daily-wage travelers',
        },
        mapQuery: 'Panahgah Haji Camp Peshawar',
      },
    ],
    workingHours: {
      ps: '۲۴ ساعته خلاص (شپه او ورځ د راتګ هرکلی)',
      ur: '24 گھنٹے اوپن (چیک ان کسی بھی وقت ممکن ہے)',
      en: '24 Hours Open (Round-the-clock check-in)',
    },
    feeInfo: {
      ps: 'عادي ارزانې کوټې: ۸۰۰ تر ۱,۵۰۰ روپۍ د شپې | سرکاري پناه ګاه: ۱۰۰٪ وړیا د ډوډۍ سره',
      ur: 'مناسب کمرے: 800 سے 1,500 روپے فی رات | سرکاری پناہ گاہ: 100 فیصد مفت بمعہ کھانا',
      en: 'Budget private rooms: Rs. 800 - 1,500/night | Government Panahgah: 100% Free with dinner',
    },
    processingTime: {
      ps: 'سمدستي خونه اخیستل (د شناختي کارډ کاپۍ سره)',
      ur: 'شناختی کارڈ دکھا کر فوری کمرہ دستیاب',
      en: 'Immediate check-in upon showing original CNIC',
    },
    documents: [
      {
        id: 'doc-hotel-cnic',
        name: {
          ps: 'د ټولو اوسیدونکو اصل نادرا شناختي کارډ (CNIC)',
          ur: 'تمام بالغ مسافروں کا اصل کمپیوٹرائزڈ شناختی کارڈ',
          en: 'Original NADRA CNIC for all staying guests',
        },
        mandatory: true,
      },
      {
        id: 'doc-hotel-family',
        name: {
          ps: 'د کورنۍ (میرمنو) سره د اوسیدو لپاره: نکاح نامه یا د خاوند د نوم شناختي کارډ',
          ur: 'فیملی روم کے لیے: شناختی کارڈ پر شوہر کا نام یا نکاح نامہ',
          en: 'For family rooms: Husband’s name on CNIC or Nikahnama',
        },
        mandatory: false,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          ps: '۱. د روغتون یا اډې نږدې ساحه ټاکل',
          ur: '1. ہسپتال یا بس اڈے کے قریب جگہ کا انتخاب',
          en: '1. Select Location near Hospital or Terminal',
        },
        instruction: {
          ps: 'که د ناروغ علاج ته راغلي یاست، په خیبر بازار یا نمک منډۍ کې هوټل واخلئ. که له بس څخه تازه کوز شوي یاست، د حاجي کیمپ شاوخوا مناسب هوټلونه شته.',
          ur: 'اگر علاج کے لیے آئے ہیں تو خیبر بازار اور نمک منڈی میں ٹھہریں، بس کے مسافر حاجی کیمپ کے قریب رہائش لیں۔',
          en: 'For hospital patients, choose Namak Mandi/Khyber Bazar. Bus travelers should choose Old Haji Camp.',
        },
      },
      {
        stepNumber: 2,
        title: {
          ps: '۲. د کوټې کتل او د بیې پریکړه',
          ur: '2. کمرہ دیکھنا اور کرایہ طے کرنا',
          en: '2. Inspect Room & Confirm Nightly Rate',
        },
        instruction: {
          ps: 'مخکې له دې چې پیسې ورکړئ، کوټه، اوبه او بستر په خپلو سترګو وګورئ او د یوې شپې وروستۍ بیه فکس کړئ.',
          ur: 'پیسے دینے سے پہلے کمرہ اور واش روم دیکھ لیں اور رات کا حتمی کرایہ طے کریں۔',
          en: 'Always inspect the room cleanliness and hot water before handing over advance rent.',
        },
      },
    ],
    audioScript: {
      ps: 'که تاسو پېښور ته د علاج یا کار لپاره راغلي یاست او د شپې د پاتې کیدو ځای غواړئ، په نمک منډۍ او حاجي کیمپ کې له ۸۰۰ تر ۱۵۰۰ روپیو پورې ارزانې خونې شته. که پیسې نلرئ، د حکومت احساس پناه ګاه ته ورشئ چې وړیا بستر او د شپې ډوډۍ درکوي. خپل شناختي کارډ له ځانه سره ولرئ.',
      ur: 'پشاور میں رات گزارنے کے لیے نمک منڈی اور حاجی کیمپ میں 800 سے 1500 روپے تک سستے ہوٹل موجود ہیں۔ غریب اور نادار مسافروں کے لیے سرکاری پناہ گاہ میں مفت کھانا اور بستر فراہم کیا جاتا ہے۔',
      en: 'For safe overnight stays in Peshawar, budget hotels in Namak Mandi and Haji Camp range from Rs. 800 to 1,500. Free beds and hot meals are available at the government Panahgah.',
    },
    criticalTips: [
      {
        ps: 'په هوټل کې د استوګنې لپاره اصل نادرا شناختي کارډ لازمي دی، د قانون له مخې هیڅ هوټل بې له کارډه خونه نه ورکوي.',
        ur: 'ہوٹل میں کمرہ لینے کے لیے اصل شناختی کارڈ لازمی ہے۔ شناختی کارڈ کے بغیر کوئی ہوٹل کمرہ نہیں دے سکتا۔',
        en: 'Original NADRA CNIC is legally mandatory for room registration at all hotels and inns.',
      },
    ],
  },
  {
    id: 'famous-food-dining',
    category: 'food',
    icon: 'UtensilsCrossed',
    title: {
      ps: 'د پېښور نامتو خوراکونه او کبابونه',
      ur: 'پشاور کے مشہور کھانے اور کباب',
      en: 'Famous Peshawar Food & Halal Dining',
    },
    shortDesc: {
      ps: 'نمک منډۍ چرسی ټکه، چپلي کباب، قصه خوانۍ شنه چای (قہوه) او خوندور خواړه',
      ur: 'نمک منڈی چرسی تکہ، دم پخت، جلیل چپلی کباب اور قصہ خوانی قہوہ کا مکمل گائیڈ',
      en: 'Where to eat world-famous Chappli Kababs, Shinwari Karahi, Dum Pukht, and Peshawari green tea',
    },
    officeName: {
      ps: 'د پېښور نامتو خوراکي بازارونه او هوټلونه',
      ur: 'پشاور کے روایتی کھانے اور فوڈ اسٹریٹس',
      en: 'Peshawar Traditional Food Centers',
    },
    locations: [
      {
        name: {
          ps: 'د نمک منډۍ ټکه او دنبه کڑاهي فوډ سټریټ',
          ur: 'نمک منڈی تکہ و شنواری کڑاہی فوڈ اسٹریٹ',
          en: 'Namak Mandi Tikka & Shinwari Food Street',
        },
        nearestBrtStation: 'Shoba Bazar (#11) یا Khyber Bazar (#10)',
        brtStationNumber: 10,
        landmarkDescription: {
          ps: 'د قصه خوانۍ او شوبا بازار ترمنځ، د چرسی ټکه او نثار چرسي نامتو هوټلونه',
          ur: 'قصہ خوانی کے ساتھ، چرسی تکہ اور نثار شنواری کے روایتی ہوٹلز',
          en: 'Between Qissa Khwani and Shoba Bazar, world-famous Charsi Tikka & Shinwari restaurants',
        },
        mapQuery: 'Namak Mandi Peshawar',
      },
      {
        name: {
          ps: 'د قصه خوانۍ چپلي کباب او فالوده',
          ur: 'قصہ خوانی و خیبر بازار چپلی کباب (جلیل و رامبیل کباب)',
          en: 'Qissa Khwani & Khyber Bazar Chappli Kabab',
        },
        nearestBrtStation: 'Khyber Bazar (سټیشن ۱۰)',
        brtStationNumber: 10,
        landmarkDescription: {
          ps: 'د خیبر بازار په پیل کې، د جلیل کباب، رامبیل کباب او د شین چای قہوه خانې',
          ur: 'خیبر بازار داخلی گیٹ، جلیل کباب اور صدیقی فالودہ',
          en: 'Entrance of Khyber Bazar, famous Jalil & Rambail Kabab shops',
        },
        mapQuery: 'Jalil Kabab House Khyber Bazar Peshawar',
      },
      {
        name: {
          ps: 'د کارخانو مارکیټ شنواري هوټلونه',
          ur: 'کارخانو مارکیٹ شنواری ہوٹلز',
          en: 'Karkhano Market Shinwari Restaurants',
        },
        nearestBrtStation: 'Karkhano Market (سټیشن ۳۰)',
        brtStationNumber: 30,
        landmarkDescription: {
          ps: 'د کارخانو مارکیټ پای، د لنډي کوتل او تیراه د مسافرو د دمې ځای',
          ur: 'کارخانو ٹرمینل کے ساتھ قبائلی ذائقے کے روایتی شنواری ہوٹل',
          en: 'Near western terminal, traditional tribal mutton and beef rosh',
        },
        mapQuery: 'Shinwari Restaurant Karkhano Peshawar',
      },
    ],
    workingHours: {
      ps: 'د غرمې له ۱۱:۰۰ څخه تر شپې ۱:۰۰ پورې تازه پخلی روان وي',
      ur: 'صبح 11:00 تا رات 1:00 مسلسل تازہ کھانوں کی تیاری',
      en: '11:00 AM to 1:00 AM (Late night dining)',
    },
    feeInfo: {
      ps: 'چپلي کباب: شاوخوا ۳۰۰ تر ۵۰۰ روپۍ د هرې کباب ډوډۍ | دنبه ټکه / کڑاهي: ۱,۸۰۰ تر ۲,۶۰۰ روپۍ فی کیلو',
      ur: 'چپلی کباب: 300 سے 500 روپے فی پلیٹ | دنبہ کڑاہی/تکہ: 1,800 تا 2,600 روپے فی کلو',
      en: 'Chappli Kabab: Rs. 300 - 500/plate | Mutton Karahi/Tikka: Rs. 1,800 - 2,600/kg',
    },
    processingTime: {
      ps: 'کباب: ۵ دقیقې | کڑاهي او دنبه ټکه: ۳۰ تر ۴۵ دقیقې تازه پخیږي',
      ur: 'کباب فوری، کڑاہی 30 سے 40 منٹ میں تازہ تیار',
      en: 'Kababs served immediately; fresh Karahi takes 35-45 minutes',
    },
    documents: [],
    steps: [
      {
        stepNumber: 1,
        title: {
          ps: '۱. د نمک منډۍ یا قصه خوانۍ ته تلل',
          ur: '1. نمک منڈی یا قصہ خوانی پہنچنا',
          en: '1. Arrive at Namak Mandi or Qissa Khwani',
        },
        instruction: {
          ps: 'د بي آر ټي په ۱۰ نمبر سټیشن (خیبر بازار) کوز شئ. د قصه خوانۍ له دروازې د ښي لاس په کوڅه نمک منډۍ ته پیاده ۵ دقیقې لاره ده.',
          ur: 'بی آر ٹی اسٹیشن 10 خیبر بازار پر اتر کر پیدل قصہ خوانی یا نمک منڈی تشریف لے جائیں۔',
          en: 'Alight at BRT Station #10 (Khyber Bazar) and take the 5-minute walk into historic Namak Mandi.',
        },
      },
      {
        stepNumber: 2,
        title: {
          ps: '۲. د غوښې وزن کول او د قہوې څښل',
          ur: '2. گوشت کا انتخاب اور پشاوری قہوہ',
          en: '2. Fresh Meat Weighing & Traditional Green Tea',
        },
        instruction: {
          ps: 'په نمک منډۍ کې تازه دنبه غوښه ستاسو په مخکې تلل کیږي. تر پخیدو پورې په چپرکټ کښینئ او د پېښور تاریخي شنه چای (قہوه) وڅښئ.',
          ur: 'ہوٹل پر آپ کے سامنے تازہ گوشت تولا جائے گا، تیاری کے دوران پشاوری الائچی والی قہوہ نوش فرمائیں۔',
          en: 'Choose fresh meat weighed in front of you. Enjoy cardamom green tea while your karahi is prepared.',
        },
      },
    ],
    audioScript: {
      ps: 'که د پېښور نامتو خواړه خورئ، د بي آر ټي سټیشن ۱۰ خیبر بازار ته لاړ شئ. هلته نمک منډۍ کې د چرسی ټکه، دنبه کڑاهي او دم پخت ډیر خوندور وي. په قصه خوانۍ کې جلیل کباب او بیا ورپسې شنه شین چای (قہوه) حتماً وڅښئ.',
      ur: 'پشاور کے مشہور کھانوں کے لیے نمک منڈی جائیں، جہاں چرسی تکہ، دم پخت اور شنواری کڑاہی لاجواب ہوتی ہے۔ خیبر بازار میں گرما گرم چپلی کباب اور قصہ خوانی کا روایتی الائچی قہوہ ضرور آزمائیں۔',
      en: 'To taste Peshawar cuisine, visit Namak Mandi for mutton tikka and karahi, or Khyber Bazar for famous Peshawari Chappli Kababs and traditional green tea.',
    },
    criticalTips: [
      {
        ps: 'په نمک منډۍ کې د کورنیو (فیملیز) لپاره په پورتني چتونو کې پرده لرونکې ځانګړې ارامې خونې شتون لري.',
        ur: 'نمک منڈی کے تمام ہوٹلوں میں فیملیز کے لیے پردہ دار اور باوقار علیحدہ ہالز موجود ہیں۔',
        en: 'Family dining sections with full privacy are available on upper floors of all major Namak Mandi restaurants.',
      },
    ],
  },
  {
    id: 'wholesale-bazaars',
    category: 'shopping',
    icon: 'ShoppingBag',
    title: {
      ps: 'ارزانه بازارونه، کارخانو او قصه خوانۍ پیرود',
      ur: 'کارخانو مارکیٹ، سستے بازار اور پشاوری چپل',
      en: 'Wholesale Bazaars, Karkhano & Crafts',
    },
    shortDesc: {
      ps: 'د کارخانو بهرني سامانونه، د قصه خوانۍ څپلۍ، کمبلې، چای او د ښځو ارزانه کالي',
      ur: 'کارخانو مارکیٹ الیکٹرانکس، کمبل، قصہ خوانی پشاوری چپل اور شفیع مارکیٹ سستے کپڑے',
      en: 'Bargain shopping: Karkhano foreign trade plazas, authentic leather Peshawari chappals, and textiles',
    },
    officeName: {
      ps: 'د پېښور سوداګریز او لاسي صنایعو بازارونه',
      ur: 'پشاور روایتی بازار اور شاپنگ سینٹرز',
      en: 'Peshawar Wholesale Bazaars',
    },
    locations: [
      {
        name: {
          ps: 'د کارخانو سوداګریز مارکیټونه (سټار، یونایټډ، کابل مارکیټ)',
          ur: 'کارخانو مارکیٹ (اسٹار مارکیٹ، کابل مارکیٹ، یونائیٹڈ پلازہ)',
          en: 'Karkhano Wholesale Trade Plazas',
        },
        nearestBrtStation: 'Karkhano Market (سټیشن ۳۰)',
        brtStationNumber: 30,
        landmarkDescription: {
          ps: 'د بي آر ټي په ۳۰ نمبر سټیشن کې، د برقي سامانونو، کمپلو، چای، کاسمیټکس او رختونو لوی مارکیټونه',
          ur: 'بی آر ٹی اسٹیشن 30 کارخانو مارکیٹ پر اتریں، درجنوں پلازے جاپانی اور امپورٹڈ اشیاء سے بھرے ہیں',
          en: 'Directly at BRT Station #30, huge market plazas selling electronics, crockery, and blankets',
        },
        mapQuery: 'Karkhano Market Peshawar',
      },
      {
        name: {
          ps: 'د موچیکوچه او قصه خوانۍ د پېښوري څپلو بازار',
          ur: 'موچی کوچڑہ قصہ خوانی (اصلی پشاوری چپل)',
          en: 'Mochikocha & Qissa Khwani Peshawari Chappal Bazaar',
        },
        nearestBrtStation: 'Khyber Bazar (سټیشن ۱۰)',
        brtStationNumber: 10,
        landmarkDescription: {
          ps: 'د قصه خوانۍ دننه، د لاس جوړ شوي اصلي څرمنې (چمړې) پېښوري زري څپلۍ',
          ur: 'قصہ خوانی کے اندر روایتی چمڑے کی مشہور پشاوری اور کپتان چپل مارکیٹ',
          en: 'Inside Qissa Khwani, artisanal handmade leather Peshawari sandals',
        },
        mapQuery: 'Peshawari Chappal Market Qissa Khwani',
      },
      {
        name: {
          ps: 'د مینا بازار او شفیع مارکیټ (د میرمنو جامې او ټوکر)',
          ur: 'شفیع مارکیٹ اور مینا بازار (خواتین کے سستے کپڑے)',
          en: 'Meena Bazaar & Shafi Market (Fabrics & Women Wear)',
        },
        nearestBrtStation: 'Hashtnagri (سټیشن ۸) یا Khyber Bazar (#10)',
        brtStationNumber: 8,
        landmarkDescription: {
          ps: 'د کینټ او پخواني ښار په زړه کې، د ښځو ګنډلي کالي او د ودونو رختونه په مناسبه بیه',
          ur: 'خواتین کے سوٹ، روایتی کڑھائی اور شادی بیاہ کے کپڑوں کا بڑا ہول سیل بازار',
          en: 'Wholesale female textiles, embroidery, and wedding dress fabrics',
        },
        mapQuery: 'Shafi Market Peshawar',
      },
    ],
    workingHours: {
      ps: 'دوشنبه تر شنبې، سهار ۱۰:۰۰ تر ماښام ۸:۳۰ (جمعه ماسپښین ځینې دوکانونه بندیږي)',
      ur: 'پیر تا ہفتہ، صبح 10:00 تا رات 8:30 (جمعہ کو کچھ مارکیٹیں آدھا دن بند ہوتی ہیں)',
      en: 'Monday to Saturday, 10:00 AM to 8:30 PM',
    },
    feeInfo: {
      ps: 'ارزانه عمده بیې (په کارخانو کې د هر شي چنه وهل یا بارګیننګ روا دی)',
      ur: 'ہول سیل قیمتیں، کارخانو مارکیٹ میں بھاؤ تاؤ ضرور کریں',
      en: 'Wholesale bargain prices; price negotiation is customary',
    },
    processingTime: {
      ps: 'سمدستي پیرود',
      ur: 'فوری خریداری',
      en: 'Instant in-person shopping',
    },
    documents: [],
    steps: [
      {
        stepNumber: 1,
        title: {
          ps: '۱. کارخانو یا قصه خوانۍ ته د بي آر ټي له لارې تلل',
          ur: '1. بی آر ٹی کے ذریعے مارکیٹ پہنچنا',
          en: '1. Direct BRT Transit to Bazaars',
        },
        instruction: {
          ps: 'د کارخانو لپاره په ۳۰ نمبر سټیشن (Karkhano Market) او د پېښوري څپلو لپاره په ۱۰ نمبر سټیشن (Khyber Bazar) کوز شئ.',
          ur: 'کارخانو کے لیے اسٹیشن 30 اور پشاوری چپل کے لیے اسٹیشن 10 پر اتریں۔',
          en: 'Ride BRT to Station #30 for Karkhano Market or Station #10 for historic Qissa Khwani.',
        },
      },
      {
        stepNumber: 2,
        title: {
          ps: '۲. د دوکاندارانو سره د بیې چنه وهل (Bargaining)',
          ur: '2. دکاندار سے بھاؤ تاؤ کرنا',
          en: '2. Price Negotiation & Quality Check',
        },
        instruction: {
          ps: 'په کارخانو مارکیټ کې لومړۍ بیه مه منئ، له دوو یا دریو دوکانونو بیه وپوښتئ او مناسبه بیه وټاکئ.',
          ur: 'کارخانو میں پہلی بتائی گئی قیمت پر مت خریدیں، 2 یا 3 دکانوں سے موازنہ کر کے بھاؤ کریں۔',
          en: 'Never accept the first quoted price in Karkhano; compare between multiple adjacent shops.',
        },
      },
    ],
    audioScript: {
      ps: 'که تاسو غواړئ پېښور کې پیرود وکړئ، د بي آر ټي سټیشن ۳۰ کارخانو مارکیټ ته لاړ شئ. هلته کمپلې، برقي سامانونه او رختونه په مناسبه بیه شته. که پېښوري څپلۍ اخلئ د خیبر بازار سټیشن ۱۰ موچیکوچه ته ورشئ. په کارخانو کې د بیې چنه حتماً ووهئ.',
      ur: 'پشاور میں خریداری کے لیے بی آر ٹی اسٹیشن 30 کارخانو مارکیٹ تشریف لے جائیں، جہاں الیکٹرانکس، کمبل اور کپڑے سستے ملتے ہیں۔ اصلی پشاوری چپل کے لیے قصہ خوانی کے موچی کوچڑہ کا رخ کریں۔',
      en: 'For shopping, take BRT Station #30 to Karkhano Market for electronics, crockery, and blankets, or Station #10 to Qissa Khwani for handmade Peshawari leather chappals.',
    },
    criticalTips: [
      {
        ps: 'د کارخانو څخه د بهرنیو سامانونو اخیستلو پر مهال ډاډ ترلاسه کړئ چې جعلي یا کاپي مال درنه کړي.',
        ur: 'کارخانو مارکیٹ میں الیکٹرانکس خریدتے وقت اوریجنل اور کاپی کی اچھی طرح تسلی کریں۔',
        en: 'Inspect electronics and appliances carefully in Karkhano to ensure you are purchasing genuine imported items.',
      },
    ],
  },
];
