import { BRTStation, RegionalAdda } from '../types';

export const BRT_STATIONS: BRTStation[] = [
  {
    number: 1,
    name: { ps: 'څمکني ټرمینل', ur: 'چمکنی ٹرمینل', en: 'Chamkani Terminal' },
    interchange: true,
    landmarks: {
      ps: 'ختیځ ټرمینل، جی ټي روډ، بس تمځای',
      ur: 'مشرقی ٹرمینل، جی ٹی روڈ، بس ڈپو',
      en: 'Eastern Terminal, GT Road, Parking Depot',
    },
    connectedServices: ['Chamkani Depot', 'Ring Road Interchange'],
  },
  {
    number: 2,
    name: { ps: 'سردار ګړهي', ur: 'سردار گڑھی', en: 'Sardar Garhi' },
    landmarks: {
      ps: 'جی ټي روډ، ترناب فارم نږدې',
      ur: 'جی ٹی روڈ، ترناب فارم قریب',
      en: 'GT Road near Tarnab Farm',
    },
    connectedServices: ['Agricultural Research Station'],
  },
  {
    number: 3,
    name: { ps: 'چوغل پوره', ur: 'چوغل پورہ', en: 'Chughal Pura' },
    landmarks: {
      ps: 'پخوانی موټروې پل',
      ur: 'پرانا موٹروے پل',
      en: 'Old Motorway Bridge',
    },
    connectedServices: [],
  },
  {
    number: 4,
    name: { ps: 'فیصل کالوني', ur: 'فیصل کالونی', en: 'Faisal Colony' },
    interchange: true,
    landmarks: {
      ps: 'د بسونو تبادله او محلي بازار',
      ur: 'بس انٹرچینج اور مقامی مارکیٹ',
      en: 'Bus Interchange and Local Market',
    },
    connectedServices: [],
  },
  {
    number: 5,
    name: { ps: 'زوړ حاجي کیمپ', ur: 'پرانا حاجی کیمپ', en: 'Old Haji Camp' },
    interchange: true,
    landmarks: {
      ps: 'جنرل بس سټینډ، د سوات او ملاکنډ اډه، پېښور ته داخلېدل',
      ur: 'جنرل بس اسٹینڈ، سوات، دیر اور مردان بس اڈہ',
      en: 'General Bus Stand, arrivals from Swat, Dir, Malakand & Hazara',
    },
    connectedServices: ['General Bus Stand', 'Inter-city Coaches'],
  },
  {
    number: 6,
    name: { ps: 'لاهور اډه', ur: 'لاہور اڈہ', en: 'Lahore Adda' },
    interchange: true,
    landmarks: {
      ps: 'د لاهور او پنجاب ګاډو اډه',
      ur: 'لاہور اور پنجاب بس اڈہ',
      en: 'Punjab & Lahore Bus Terminal',
    },
    connectedServices: ['Inter-provincial Transport'],
  },
  {
    number: 7,
    name: { ps: 'ګلبPageه چوڪ', ur: 'گلبہار چوک', en: 'Gulbahar Chowk' },
    landmarks: {
      ps: 'د ګلبPage بازار، د پولیس خدمت مرکز او د ټرافیک دفتر',
      ur: 'گلبہار چوک، پولیس خدمت مرکز، ٹریفک آفس',
      en: 'Gulbahar Market, Police Khidmat Center',
    },
    connectedServices: ['Police Khidmat Markaz Gulbahar'],
  },
  {
    number: 8,
    name: { ps: 'هشت نګري', ur: 'ہشت نگری', en: 'Hashtnagri' },
    landmarks: {
      ps: 'د تاریخي ښار دروازه، چارسدې سړک نښلون',
      ur: 'پرانے شہر کا گیٹ، چارسدہ روڈ رابطہ',
      en: 'Historic City Gate, Charsadda Road link',
    },
    connectedServices: ['Bacha Khan Medical Complex feeder'],
  },
  {
    number: 9,
    name: { ps: 'ملک سعد شهید', ur: 'ملک سعد شہید', en: 'Malik Saad Shaheed' },
    interchange: true,
    landmarks: {
      ps: 'مرکزي پولیس لاین، د پولیس خدمت مرکز (کرکټر سرټیفکیټ)، د پېښور پریس کلب',
      ur: 'سنٹرل پولیس لائنز، پولیس خدمت مرکز (کریکٹر سرٹیفکیٹ)، پریس کلب',
      en: 'Central Police Lines, Main Police Khidmat Markaz, Press Club',
    },
    connectedServices: ['Main Police Khidmat Markaz', 'Central Police Office (CPO)'],
  },
  {
    number: 10,
    name: { ps: 'خیبر بازار (LRH)', ur: 'خیبر بازار (لیڈی ریڈنگ ہسپتال)', en: 'Khyber Bazar (LRH)' },
    interchange: true,
    landmarks: {
      ps: 'لیډي ریډینګ روغتون (LRH) مرکزي دروازه، قصه خوانۍ بازار ته لار',
      ur: 'لیڈی ریڈنگ ہسپتال (LRH) مین گیٹ، قصہ خوانی بازار',
      en: 'Lady Reading Hospital (LRH) Main Gate, historic Qissa Khwani',
    },
    connectedServices: ['Lady Reading Hospital (LRH)', 'Sehat Card Counter'],
  },
  {
    number: 11,
    name: { ps: 'شوبا بازار', ur: 'شعبہ بازار', en: 'Shoba Bazar' },
    landmarks: {
      ps: 'د ګاډو سامان او پرزو مارکیټ',
      ur: 'آٹو پارٹس اور اسپیئر مارکیٹ',
      en: 'Automotive and Auto-parts Bazaar',
    },
    connectedServices: [],
  },
  {
    number: 12,
    name: { ps: 'ډبګري ګارډنز', ur: 'ڈبگری گارڈنز', en: 'Dabgari Gardens' },
    interchange: true,
    landmarks: {
      ps: 'د ډاکټرانو او کلینیکونو مرکز، کوهاټ اډې ته د فیډر بس 03A لار',
      ur: 'ڈاکٹرز اور کلینکس کا مرکز، کوہاٹ اڈہ فیڈر بس 03A',
      en: 'Medical Specialist Clinics, DR-03A Feeder to Kohat Adda',
    },
    connectedServices: ['Specialist Medical Clinics', 'Feeder Bus to Kohat Adda'],
  },
  {
    number: 13,
    name: { ps: 'ریلوې سټیشن', ur: 'ریلوے اسٹیشن', en: 'Railway Station' },
    interchange: true,
    landmarks: {
      ps: 'پېښور کینټ ریلوې سټیشن، خیبر ټرین',
      ur: 'پشاور کینٹ ریلوے اسٹیشن',
      en: 'Peshawar Cantt Railway Station',
    },
    connectedServices: ['Pakistan Railways Main Line'],
  },
  {
    number: 14,
    name: { ps: 'ایف سي چوڪ', ur: 'ایف سی چوک', en: 'FC Chowk' },
    landmarks: {
      ps: 'کینټ ساحه، ډپټي کمشنر دفتر (DC Office)، ډومیسائل برخه',
      ur: 'کینٹ ایریا، ڈپٹی کمشنر آفس (ڈی سی آفس)، ڈومیسائل برانچ',
      en: 'Cantt Area, Deputy Commissioner Office (DC Office) for Domicile',
    },
    connectedServices: ['DC Office Peshawar', 'Domicile Branch'],
  },
  {
    number: 15,
    name: { ps: 'صدر بازار', ur: 'صدر بازار', en: 'Saddar Bazar' },
    interchange: true,
    landmarks: {
      ps: 'د صدر کینټ مارکیټ، کینټ پاسپورټ دفتر، ګورنر هاوس لار',
      ur: 'صدر کینٹ مارکیٹ، کینٹ پاسپورٹ آفس، مال روڈ',
      en: 'Saddar Cantt Market, Cantt Regional Passport Office',
    },
    connectedServices: ['Regional Passport Office Saddar', 'Cantt Commercial Hub'],
  },
  {
    number: 16,
    name: { ps: 'مال روډ', ur: 'مال روڈ', en: 'Mall Road' },
    landmarks: {
      ps: 'پېښور کلب، سرینا هوټل، پښتونخوا هاوس',
      ur: 'پشاور کلب، سرینا ہوٹل',
      en: 'Peshawar Club, Serena Hotel, State Bank',
    },
    connectedServices: ['State Bank of Pakistan'],
  },
  {
    number: 17,
    name: { ps: 'تہکال پایان', ur: 'تہکال پایان', en: 'Tehkal Payyan' },
    landmarks: {
      ps: 'یونیورسټي روډ پیل، کینټ پایان',
      ur: 'یونیورسٹی روڈ، کینٹ اختتام',
      en: 'University Road Entry, Commercial plazas',
    },
    connectedServices: [],
  },
  {
    number: 18,
    name: { ps: 'تہکال بالا', ur: 'تہکال بالا', en: 'Tehkal Bala' },
    landmarks: {
      ps: 'یونیورسټي روډ، د خوراکي توکو او بانکونو مرکز',
      ur: 'یونیورسٹی روڈ کمرشل، بینک پلازہ',
      en: 'University Road, Commercial banks',
    },
    connectedServices: [],
  },
  {
    number: 19,
    name: { ps: 'ابداره روډ (نادرا میګا سنټر)', ur: 'ابدارہ روڈ (نادرا میگا سینٹر)', en: 'Abdara Road (NADRA Mega Center)' },
    interchange: true,
    landmarks: {
      ps: 'نادرا میګا سنټر (۲۴ ساعته خلاص)، ابداره سړک',
      ur: 'نادرا میگا سینٹر (24 گھنٹے اوپن)، ابدارہ روڈ',
      en: 'NADRA 24/7 Mega Center, Abdara Road commercial area',
    },
    connectedServices: ['NADRA 24/7 Mega Center', 'CNIC / FRC Services'],
  },
  {
    number: 20,
    name: { ps: 'یونیورسټي ټاون', ur: 'یونیورسٹی ٹاؤن', en: 'University Town' },
    landmarks: {
      ps: 'ټاون پارک، سفارتي او نادولتي ادارې، نږدې روغتونونه',
      ur: 'یونیورسٹی ٹاؤن پارک، سفارتی دفاتر، پرائیویٹ ہسپتال',
      en: 'Town Park, Consulates, Private Clinics',
    },
    connectedServices: ['Afghan Consulate', 'Private Medical Specialist Centers'],
  },
  {
    number: 21,
    name: { ps: 'پېښور پوهنتون (KTH / ICP)', ur: 'پشاور یونیورسٹی (کے ٹی ایچ / اسلامیہ کالج)', en: 'University of Peshawar (KTH / ICP)' },
    interchange: true,
    landmarks: {
      ps: 'خیبر ټیچینګ هسپتال (KTH)، تاریخي اسلامیه کالج، پېښور پوهنتون او UET',
      ur: 'خیبر ٹیچنگ ہسپتال (KTH)، تاریخی اسلامیہ کالج، پشاور یونیورسٹی، یو ای ٹی',
      en: 'Khyber Teaching Hospital (KTH), Islamia College, UoP, UET Peshawar',
    },
    connectedServices: [
      'Khyber Teaching Hospital (KTH)',
      'Sehat Card Desk',
      'Islamia College Peshawar',
      'University of Peshawar Admissions',
      'UET Peshawar',
    ],
  },
  {
    number: 22,
    name: { ps: 'بورډ بازار', ur: 'بورڈ بازار', en: 'Board Bazar' },
    landmarks: {
      ps: 'BISE پېښور ایجوکیشن بورډ (سندونو تصدیق)، افغان مارکیټ',
      ur: 'پشاور تعلیمی بورڈ BISE (سندات تصدیق)، افغان مارکیٹ',
      en: 'BISE Peshawar Education Board (Matric/FSc Attestation), Afghan Market',
    },
    connectedServices: ['BISE Peshawar Board', 'Document Attestation Center'],
  },
  {
    number: 23,
    name: { ps: 'مال آف حیات آباد', ur: 'مال آف حیات آباد', en: 'Mall of Hayatabad' },
    interchange: true,
    landmarks: {
      ps: 'حیات آباد پیل، ډیجیټل پارکینګ او سوداګریز پلازه',
      ur: 'حیات آباد داخلی چوک، شاپنگ مال',
      en: 'Hayatabad Entry, Shopping Center, Feeder Routes DR-05 / DR-06',
    },
    connectedServices: ['Feeder Bus DR-05 to Phase 6'],
  },
  {
    number: 24,
    name: { ps: 'بابِ پېښور', ur: 'بابِ پشاور', en: 'Bab-e-Peshawar' },
    landmarks: {
      ps: 'باب پېښور فلای اوور، فیز ۳ حیات آباد نښلون',
      ur: 'بابِ پشاور فلائی اوور، فیز 3 رابطہ',
      en: 'Bab-e-Peshawar Flyover, Phase 3 access',
    },
    connectedServices: [],
  },
  {
    number: 25,
    name: { ps: 'حیات آباد فیز ۳ (پاسپورټ دفتر)', ur: 'حیات آباد فیز 3 (پاسپورٹ آفس)', en: 'Hayatabad Phase 3 (Passport Office)' },
    interchange: true,
    landmarks: {
      ps: 'د پاسپورټ او ویزې سیمه ایز دفتر (فیز ۳ چوک)، روډ ګلبهار پلازه',
      ur: 'ریجنل پاسپورٹ آفس حیات آباد (فیز 3 چوک)، جمرود روڈ',
      en: 'Regional Passport Office Hayatabad (Phase 3 Chowk), Jamrud Road',
    },
    connectedServices: ['Regional Passport Office Hayatabad', 'Customs Office'],
  },
  {
    number: 26,
    name: { ps: 'تاتارا پارک', ur: 'تاتارا پارک', en: 'Tatara Park' },
    landmarks: {
      ps: 'تاتارا پارک فیز ۴، تفریحي ساحه',
      ur: 'تاتارا پارک فیز 4، فیملی پارک',
      en: 'Tatara Park Phase 4, Family recreation',
    },
    connectedServices: [],
  },
  {
    number: 27,
    name: { ps: 'پي ډي اې (PDA)', ur: 'پی ڈی اے (PDA)', en: 'PDA Building' },
    landmarks: {
      ps: 'پېښور ډویلپمنټ اتھارټي (PDA مرکزي دفتر)، پلاټونو او د کورونو نقشه',
      ur: 'پشاور ڈویلپمنٹ اتھارٹی (ہیڈ آفس)، پلاٹ و نقشہ ٹاؤن پلاننگ',
      en: 'Peshawar Development Authority Head Office',
    },
    connectedServices: ['PDA Town Planning & Land Records'],
  },
  {
    number: 28,
    name: { ps: 'روغتون چوڪ (HMC)', ur: 'ہسپتال چوک (حیات آباد میڈیکل کمپلیکس)', en: 'Hospital Chowk (HMC)' },
    interchange: true,
    landmarks: {
      ps: 'حیات آباد میډیکل کمپلیکس (HMC)، د پښتورګو او کینسر سنټر، صحت کارډ کاونټر',
      ur: 'حیات آباد میڈیکل کمپلیکس (HMC)، کڈنی سنٹر، صحت کارڈ کاؤنٹر',
      en: 'Hayatabad Medical Complex (HMC), Kidney Center, Sehat Card Plus Desk',
    },
    connectedServices: [
      'Hayatabad Medical Complex (HMC)',
      'Institute of Kidney Diseases (IKD)',
      'Sehat Card Plus Counter',
    ],
  },
  {
    number: 29,
    name: { ps: 'کارخانو چوڪ', ur: 'کارخانو چوک', en: 'Karkhano Chowk' },
    landmarks: {
      ps: 'د کارخانو سوداګریز پلازې، ډیوو اډې نږدې',
      ur: 'کارخانو کمرشل پلازہ، بارڈر ٹریڈ مارکیٹ',
      en: 'Karkhano Commercial Plazas, Trade Market',
    },
    connectedServices: ['Wholesale and Electronics Markets'],
  },
  {
    number: 30,
    name: { ps: 'کارخانو مارکیټ ټرمینل', ur: 'کارخانو مارکیٹ ٹرمینل', en: 'Karkhano Market Terminal' },
    interchange: true,
    landmarks: {
      ps: 'لویدیځ ټرمینل، د خیبر قبایلي ولسوالۍ / طورخم بارډر / جمرود اډه، باب خیبر ته لار',
      ur: 'مغربی ٹرمینل، ضلع خیبر / طورخم بارڈر اڈہ، جمرود روڈ، باب خیبر روٹ',
      en: 'Western Terminal, Khyber District / Torkham Border arrival point, Jamrud Adda',
    },
    connectedServices: [
      'Arrivals from Khyber / Landi Kotal / Torkham',
      'Karkhano Wholesale Bazaars',
      'Feeder Bus DR-07',
    ],
  },
];

export const REGIONAL_ADDAS: RegionalAdda[] = [
  {
    id: 'haji-camp',
    name: {
      ps: 'زوړ حاجي کیمپ / جنرل بس سټینډ (GT روډ)',
      ur: 'پرانا حاجی کیمپ / جنرل بس اسٹینڈ (جی ٹی روڈ)',
      en: 'Old Haji Camp / General Bus Stand (GT Road)',
    },
    regionsServed: {
      ps: 'سوات، دیر، بونیر، باجوړ، مالاکنډ، مردان، هزاره، راولپنډۍ / پنجاب',
      ur: 'سوات، دیر، بونیر، باجوڑ، مالاکنڈ، مردان، ہزارہ، راولپنڈی / پنجاب',
      en: 'Swat, Dir, Buner, Bajaur, Malakand, Mardan, Hazara, Punjab',
    },
    nearestBrtStation: 5,
    directions: {
      ps: 'له بس څخه ښکته شئ او پیاده د جی ټي روډ د پل مخامخ د بي آر ټي سټیشن ۵ (Old Haji Camp) ته ورشئ. دلته ټکټ او کارت شته.',
      ur: 'بس سے اتر کر جی ٹی روڈ فلائی اوور کے سامنے بی آر ٹی اسٹیشن 5 (اولڈ حاجی کیمپ) پر آئیں، جہاں سے پورا پشاور جڑا ہوا ہے۔',
      en: 'Step off the bus and walk 2 minutes to BRT Station #5 (Old Haji Camp) on GT Road. Board express bus towards Karkhano.',
    },
  },
  {
    id: 'karkhano-jamrud',
    name: {
      ps: 'کارخانو مارکیټ / جمرود اډه (خیبر روډ)',
      ur: 'کارخانو مارکیٹ / جمرود اڈہ (خیبر روڈ)',
      en: 'Karkhano Market / Jamrud Adda (Khyber Route)',
    },
    regionsServed: {
      ps: 'خیبر، لنډي کوتل، طورخم پوله، باړه، تیراه، ملاګوري',
      ur: 'ضلع خیبر، لنڈی کوتل، طورخم بارڈر، باڑہ، تیراہ',
      en: 'Khyber District, Landi Kotal, Torkham Border, Bara, Tirah Valley',
    },
    nearestBrtStation: 30,
    directions: {
      ps: 'د جمرود او باړې له ګاډو کوزېدو سره سم د کارخانو مارکیټ د پیل په لویدیځ کې د بي آر ټي سټیشن ۳۰ (Karkhano Market) ولاړ دی.',
      ur: 'جمرود یا قبائلی اضلاع سے پہنچنے پر کارخانو ٹرمینل بی آر ٹی اسٹیشن 30 سے چمکنی کی طرف بس لیں۔',
      en: 'Directly adjacent to arrival point from Khyber/Torkham. Board at BRT Station #30 (Karkhano Market Terminal) heading East.',
    },
  },
  {
    id: 'kohat-adda',
    name: {
      ps: 'کوهاټ بس اډه (رنګ روډ)',
      ur: 'کوہاٹ بس اڈہ (رنگ روڈ)',
      en: 'Kohat Bus Adda (Ring Road)',
    },
    regionsServed: {
      ps: 'کوهاټ، کرم (پاراچنار)، هنګو، اورکزی، بنو، کرک، شمالي او جنوبي وزیرستان',
      ur: 'کوہاٹ، کرم (پاراچنار)، ہنگو، اورکزئی، بنوں، کرک، شمالی و جنوبی وزیرستان',
      en: 'Kohat, Kurram (Parachinar), Hangu, Orakzai, Bannu, Karak, North & South Waziristan',
    },
    nearestBrtStation: 12,
    feederRoute: 'DR-03A (ڈبګري ګارډنز ته)',
    directions: {
      ps: 'د کوهاټ اډې څخه نیغ په نیغه زو فیډر بس (DR-03A) اخیستلی شئ چې تاسو ډبګري ګارډنز بي آر ټي سټیشن ۱۲ ته رسوي، یا DR-10 چې هسپتال چوک ته ځي.',
      ur: 'کوہاٹ اڈے کے سامنے سے ڈائریکٹ فیڈر بس DR-03A میں بیٹھیں جو سیدھا بی آر ٹی اسٹیشن 12 (ڈبگری گارڈنز) پر چھوڑتی ہے۔',
      en: 'Board the green Zu Feeder Bus DR-03A right in front of Kohat Adda, which connects directly to BRT Station #12 (Dabgari Gardens).',
    },
  },
  {
    id: 'cantt-station',
    name: {
      ps: 'پېښور کینټ ریلوې سټیشن',
      ur: 'پشاور کینٹ ریلوے اسٹیشن',
      en: 'Peshawar Cantt Railway Station',
    },
    regionsServed: {
      ps: 'د ریل ګاډي مسافر له ټول هیواده (عوام ایکسپریس، جعفر ایکسپریس، خیبر میل)',
      ur: 'پورے ملک سے بذریعہ ٹرین آنے والے مسافر (خیبر میل، عوام ایکسپریس)',
      en: 'Rail travelers from across Pakistan (Khyber Mail, Awam Express, Rehman Baba)',
    },
    nearestBrtStation: 13,
    directions: {
      ps: 'د ریلوې سټیشن له وتلو وروسته ښي لاس ته ۲۰۰ متره ولاړ شئ، د بي آر ټي سټیشن ۱۳ (Railway Station) مخامخ دی.',
      ur: 'ریلوے اسٹیشن سے باہر نکل کر 2 منٹ پیدل فاصلے پر بی آر ٹی اسٹیشن 13 واقع ہے۔',
      en: 'Exit the railway station gate and walk 200m right to BRT Station #13 (Railway Station).',
    },
  },
];
