import { LocalizedString } from '../types';

export interface TransportOption {
  id: string;
  name: LocalizedString;
  type: 'taxi' | 'rickshaw' | 'qingqi' | 'wagon' | 'app';
  icon: string;
  summary: LocalizedString;
  capacity: string;
  fareModel: LocalizedString;
  estimatedFares: {
    route: LocalizedString;
    fareRange: string;
    notes?: LocalizedString;
  }[];
  whereToFind: LocalizedString;
  bargainingAdvice: {
    pashtoPhrase: string;
    urduPhrase: string;
    englishMeaning: string;
    adviceText: LocalizedString;
  };
  audioGuide: LocalizedString;
}

export const LOCAL_TRANSPORT_OPTIONS: TransportOption[] = [
  {
    id: 'auto-rickshaw',
    name: {
      ps: 'شخصي آټو رکشا (د کینټ او ښار رکشې)',
      ur: 'پرائیویٹ آٹو رکشہ (شہری رکشے)',
      en: 'Private Auto Rickshaw (3-Wheeler)',
    },
    type: 'rickshaw',
    icon: 'Car',
    summary: {
      ps: 'د پېښور تر ټولو عام او اسانه ترانسپورت؛ د کوڅو او تنګو بازارونو لپاره تر ټولو چټک دی.',
      ur: 'پشاور کی ہر گلی اور بازار کے لیے سب سے تیز اور ہر وقت دستیاب سواری۔',
      en: 'Most ubiquitous transport in Peshawar, reaching tight bazaars and residential sectors.',
    },
    capacity: '1 - 3 Persons',
    fareModel: {
      ps: 'مخکې له ختلو کرایه وټاکئ (په میټر نه چلیږي)',
      ur: 'سوار ہونے سے پہلے کرایہ طے کریں (میٹر نہیں ہوتا)',
      en: 'Fixed rate negotiated before boarding (No meters)',
    },
    estimatedFares: [
      {
        route: {
          ps: 'زوړ حاجي کیمپ ➔ ليډي ریډینګ روغتون (LRH) یا خیبر بازار',
          ur: 'پرانا حاجی کیمپ ➔ لیڈی ریڈنگ ہسپتال یا خیبر بازار',
          en: 'Old Haji Camp ➔ LRH Hospital or Khyber Bazar',
        },
        fareRange: 'Rs. 300 - 450',
        notes: {
          ps: 'د ګڼې ګوڼې په وخت کې تر ۴۰۰ پورې مناسب دی',
          ur: 'رش کے اوقات میں 400 روپے مناسب ہیں',
          en: 'Fair rate is Rs. 350-400 during rush hours',
        },
      },
      {
        route: {
          ps: 'صدر کینټ ➔ اسلامیه کالج / پېښور پوهنتون',
          ur: 'صدر کینٹ ➔ اسلامیہ کالج / پشاور یونیورسٹی',
          en: 'Saddar Cantt ➔ Islamia College / University of Peshawar',
        },
        fareRange: 'Rs. 350 - 500',
      },
      {
        route: {
          ps: 'صدر بازار ➔ د حیات آباد فیز ۳ پاسپورټ دفتر',
          ur: 'صدر بازار ➔ پاسپورٹ آفس حیات آباد فیز 3',
          en: 'Saddar Bazar ➔ Hayatabad Phase 3 Passport Office',
        },
        fareRange: 'Rs. 500 - 700',
      },
      {
        route: {
          ps: 'کارخانو مارکیټ ➔ حیات آباد میډیکل کمپلیکس (HMC)',
          ur: 'کارخانو مارکیٹ ➔ حیات آباد میڈیکل کمپلیکس (HMC)',
          en: 'Karkhano Market ➔ HMC Hospital',
        },
        fareRange: 'Rs. 250 - 350',
      },
      {
        route: {
          ps: 'کوهاټ بس اډه ➔ ډبګري ګارډنز یا صدر',
          ur: 'کوہاٹ بس اڈہ ➔ ڈبگری گارڈنز یا صدر',
          en: 'Kohat Bus Adda ➔ Dabgari Gardens or Saddar',
        },
        fareRange: 'Rs. 300 - 450',
      },
    ],
    whereToFind: {
      ps: 'د هر بس اډې مخې ته، د روغتونونو مخامخ، صدر، بورډ بازار او هر چوک کې په لسګونو ولاړ وي.',
      ur: 'ہر بس اڈے، ہسپتال، چوک اور بازار کے باہر بکثرت موجود ہوتے ہیں۔',
      en: 'Found at every major chowk, bus terminal exit, hospital gate, and market.',
    },
    bargainingAdvice: {
      pashtoPhrase: 'وروره مناسبه کرایه وایه، د حاجي کیمپ نه تر هسپتاله په درې نيم سوه روپۍ ځې؟',
      urduPhrase: 'بھائی مناسب کرایہ بتائیں، کیا ساڑھے تین سو میں چلیں گے؟',
      englishMeaning: 'Brother, quote a fair price; will you take Rs. 350?',
      adviceText: {
        ps: 'کله هم له کرایې ټاکلو پرته رکشا کې مه کښینئ. که چلوونکی زیاتې پیسې غواړي، بلې رکشا ته غږ وکړئ، په پېښور کې رکشې ډیرې دي.',
        ur: 'کرایہ طے کیے بغیر رکشے میں ہرگز نہ بیٹھیں، اگر کوئی زیادہ مانگے تو دوسرے رکشے والے سے بات کریں۔',
        en: 'Never board before agreeing on fare. If the first driver overcharges, check with the next one.',
      },
    },
    audioGuide: {
      ps: 'پېښور کې عامې رکشې هر ځای شته. کله چې رکشا کوئ، لومړی سړی ته ووایئ چې چیرته ځئ او څومره روپۍ اخلې. له حاجي کیمپ تر روغتونه ۳۰۰ تر ۴۰۰ روپۍ مناسبه کرایه ده. پیسې مخکې فکس کړئ.',
      ur: 'پشاور میں پرائیویٹ رکشہ لینے سے پہلے ہمیشہ کرایہ طے کریں۔ حاجی کیمپ سے لیڈی ریڈنگ ہسپتال کا مناسب کرایہ 300 سے 400 روپے کے درمیان ہے۔',
      en: 'In Peshawar, always negotiate the rickshaw fare before sitting inside. From Haji Camp to LRH hospital, Rs. 300 to 400 is the standard fair price.',
    },
  },
  {
    id: 'qingqi-rickshaw',
    name: {
      ps: 'چنګچي ۶ سیټره (شریکه ارزانه رکشا)',
      ur: 'چنگچی 6 سیٹر (مشترکہ سستی سواری)',
      en: 'Shared Qingqi Rickshaw (6-Seater)',
    },
    type: 'qingqi',
    icon: 'Users',
    summary: {
      ps: 'تر ټولو ارزانه ځايي سواري؛ په مخکې ټاکل شویو لارو له نورو مسافرو سره شریکه وي.',
      ur: 'انتہائی سستی اور تیز سواری جو مخصوص روٹس پر فی سواری چلتی ہے۔',
      en: 'The most economical shared local transit running along fixed neighborhood corridors.',
    },
    capacity: '6 Passengers (Shared)',
    fareModel: {
      ps: 'د هر مسافر لپاره شاوخوا ۳۰ تر ۷۰ روپۍ ثابته کرایه',
      ur: '30 تا 70 روپے فی سواری مقررہ کرایہ',
      en: 'Rs. 30 to 70 per passenger depending on stop',
    },
    estimatedFares: [
      {
        route: {
          ps: 'جي ټي روډ (حاجي کیمپ ➔ هشت نګري / ګلبهار)',
          ur: 'جی ٹی روڈ (حاجی کیمپ ➔ ہشت نگری / گلبہار)',
          en: 'GT Road (Haji Camp ➔ Hashtnagri / Gulbahar)',
        },
        fareRange: 'Rs. 30 - 40 / کس',
      },
      {
        route: {
          ps: 'رنګ روډ (کوهاټ اډه ➔ پهاړی پور یا کارخانو لور ته برخه)',
          ur: 'رنگ روڈ روٹ (کوہاٹ اڈہ سے براستہ رنگ روڈ)',
          en: 'Ring Road (Kohat Adda to connected junctions)',
        },
        fareRange: 'Rs. 40 - 60 / کس',
      },
      {
        route: {
          ps: 'چارسده روډ (هشت نګري ➔ پجاګي اډه / باچا خان چوک)',
          ur: 'چارسدہ روڈ (ہشت نگری ➔ پجاگی اڈہ)',
          en: 'Charsadda Road (Hashtnagri ➔ Pajagi Adda)',
        },
        fareRange: 'Rs. 30 - 50 / کس',
      },
      {
        route: {
          ps: 'وارسک روډ (سردار اډه ➔ باب پېښور ته مخکې)',
          ur: 'وارسک روڈ لوکل روٹ',
          en: 'Warsak Road Local Corridor',
        },
        fareRange: 'Rs. 40 - 70 / کس',
      },
    ],
    whereToFind: {
      ps: 'د هشت نګري چوک، حاجي کیمپ جی ټي روډ لاندې، چارسده اډه، او د بورډ بازار په څنګ کې.',
      ur: 'ہشت نگری پل کے نیچے، حاجی کیمپ روڈ، چارسدہ اڈہ اور بورڈ بازار کے اطراف۔',
      en: 'Under Hashtnagri flyover, Haji Camp road stops, Charsadda Adda, and Board Bazar.',
    },
    bargainingAdvice: {
      pashtoPhrase: 'استاده، هشت نګري ته کرایه څو ده؟',
      urduPhrase: 'استاد جی، ہشت نگری کا کتنا کرایہ ہے؟',
      englishMeaning: 'Driver, how much is the seat to Hashtnagri?',
      adviceText: {
        ps: 'چنګچي کرایه عموماً ثابته وي. د کوزیدو پر مهال چلوونکي ته خردې ۳۰ یا ۵۰ روپۍ ورکړئ.',
        ur: 'چنگچی کا کرایہ فکس ہوتا ہے، اترتے وقت کھلے پیسے دینا بہتر رہتا ہے۔',
        en: 'Fares are fixed per stop; hand exact cash changes when stepping down.',
      },
    },
    audioGuide: {
      ps: 'چنګچي د پېښور تر ټولو ارزانه سواري ده. هر مسافر نه ۳۰ تر ۵۰ روپۍ اخلي. د جی ټي روډ، چارسدې سړک او رنګ روډ پر مخ ځي. کله چې پیسې ورکوئ خردې نوټونه ولرئ.',
      ur: 'چنگچی پشاور میں سب سے سستی مشترکہ سواری ہے۔ فی سواری 30 سے 50 روپے کرایہ ہوتا ہے۔',
      en: 'Qingqi is the cheapest shared ride in Peshawar at Rs. 30 to 50 per seat along fixed main streets.',
    },
  },
  {
    id: 'yellow-cab-taxi',
    name: {
      ps: 'ټیکسي او ګاډي اډې (کینټ، سټیشن او حاجي کیمپ)',
      ur: 'ٹیکسی اور پرائیویٹ کار اڈے',
      en: 'Yellow Cab & Private Taxi Stands',
    },
    type: 'taxi',
    icon: 'CarFront',
    summary: {
      ps: 'د هغو کورنیو او مسافرو لپاره چې درانه بارونه لري، یا غواړي مستقیم بل ښار یا قبایلي ولسوالۍ ته لاړ شي.',
      ur: 'بھاری سامان، فیملیز یا دوسرے اضلاع و قبائلی علاقوں کے طویل سفر کے لیے محفوظ گاڑی۔',
      en: 'Dedicated passenger cars for large families, heavy luggage, or direct inter-district travel.',
    },
    capacity: '4 Passengers + Heavy Luggage Trunk',
    fareModel: {
      ps: 'د سفر په فاصلې او منزل پورې تړلې نغدې کرایه',
      ur: 'فاصلے اور مقام کے حساب سے فکس کرایہ',
      en: 'Flat chartered fare negotiated at taxi stand booth',
    },
    estimatedFares: [
      {
        route: {
          ps: 'پېښور کینټ سټیشن ➔ حیات آباد فیز ۳ یا ۴',
          ur: 'پشاور کینٹ اسٹیشن ➔ حیات آباد فیز 3 یا 4',
          en: 'Peshawar Cantt Station ➔ Hayatabad Phase 3/4',
        },
        fareRange: 'Rs. 800 - 1,200',
      },
      {
        route: {
          ps: 'زوړ حاجي کیمپ ➔ کارخانو مارکیټ / باړه ګېټ',
          ur: 'پرانا حاجی کیمپ ➔ کارخانو مارکیٹ یا باڑہ گیٹ',
          en: 'Old Haji Camp ➔ Karkhano Market / Bara Gate',
        },
        fareRange: 'Rs. 1,000 - 1,500',
      },
      {
        route: {
          ps: 'پېښور ➔ خیبر / جمرود / لنډي کوتل',
          ur: 'پشاور ➔ جمرود یا لنڈی کوتل (قبائلی روٹ)',
          en: 'Peshawar ➔ Jamrud / Landi Kotal (Khyber)',
        },
        fareRange: 'Rs. 2,000 - 3,500 (ځانګړی موټر)',
      },
    ],
    whereToFind: {
      ps: 'د پېښور کینټ ریلوې سټیشن بهر، حاجي کیمپ جی ټي روډ، صدر سنګم هوټل څنګ او خیبر بازار.',
      ur: 'پشاور کینٹ ریلوے اسٹیشن کے باہر، حاجی کیمپ مین گیٹ، صدر سنگم ہوٹل اور خیبر بازار۔',
      en: 'Outside Peshawar Cantt Railway Station, Haji Camp main terminal gate, and Saddar Sangam Hotel.',
    },
    bargainingAdvice: {
      pashtoPhrase: 'استاده، کینټ سټیشن نه تر حیات آباده په اته سوه روپۍ موټر بیایې؟',
      urduPhrase: 'استاد جی، کینٹ سے حیات آباد کے آٹھ سو روپے مناسب ہیں؟',
      englishMeaning: 'Driver, is Rs. 800 acceptable from Cantt to Hayatabad?',
      adviceText: {
        ps: 'که باران وي یا د شپې ناوخته وي، ټیکسي چلوونکي لږ زیاتې پیسې غواړي، خو په ورځ کې په ۸۰۰ تر ۱۰۰۰ کینټ نه تر حیات اباده بیایي.',
        ur: 'رات کے وقت یا بارش میں کرایہ تھوڑا زیادہ ہو سکتا ہے، دن میں 800 سے 1000 روپے مناسب ہیں۔',
        en: 'Rates are slightly higher late at night; during daytime Rs. 800-1000 is standard to Hayatabad.',
      },
    },
    audioGuide: {
      ps: 'که تاسو سره درانه بکسونه وي او ښځې درسره وي، د کینټ سټیشن یا حاجي کیمپ مخې ته ټیکسي ګاډي ولاړ وي. حیات آباد ته شاوخوا ۸۰۰ تر ۱۲۰۰ روپۍ اخلي. د شپې هم شتون لري.',
      ur: 'فیملی اور سامان کے ساتھ ٹیکسی سب سے محفوظ ہے۔ کینٹ ریلوے اسٹیشن اور حاجی کیمپ کے باہر ٹیکسی اسٹینڈز ہیں، جہاں سے پورے پشاور اور جمرود کے لیے گاڑیاں ملتی ہیں۔',
      en: 'If travelling with heavy luggage and family, taxi stands at Cantt Railway station and Haji Camp offer direct cars to Hayatabad and tribal districts.',
    },
  },
  {
    id: 'flying-coaches',
    name: {
      ps: 'فلائینګ کوچونه او ځايي ویګنونه',
      ur: 'فلائنگ کوچز اور مقامی ویگن سروس',
      en: 'Local Flying Coaches & Minivans',
    },
    type: 'wagon',
    icon: 'BusFront',
    summary: {
      ps: 'له یوې اډې تر بلې اډې پورې چټک مینی بسونه چې په اصلي سړکونو دوامداره روان وي.',
      ur: 'شہر کے ایک سرے سے دوسرے سرے تک تیز رفتار اور کفایتی منی بس سروس۔',
      en: 'Point-to-point minivans connecting opposite ends of the city at very low fares.',
    },
    capacity: '14 - 18 Passengers',
    fareModel: {
      ps: 'شاوخوا ۵۰ تر ۱۰۰ روپۍ د هر مسافر',
      ur: '50 تا 100 روپے فی مسافر',
      en: 'Rs. 50 to 100 per passenger',
    },
    estimatedFares: [
      {
        route: {
          ps: 'حاجي کیمپ ➔ کارخانو مارکیټ (براسته جی ټي روډ او صدر)',
          ur: 'حاجی کیمپ ➔ کارخانو مارکیٹ براستہ جی ٹی روڈ',
          en: 'Haji Camp ➔ Karkhano Market via GT Road',
        },
        fareRange: 'Rs. 60 - 80 / کس',
      },
      {
        route: {
          ps: 'کوهاټ اډه ➔ ګلبهار او چارسده روډ',
          ur: 'کوہاٹ اڈہ ➔ گلبہار براستہ رنگ روڈ',
          en: 'Kohat Adda ➔ Gulbahar via Ring Road',
        },
        fareRange: 'Rs. 50 - 70 / کس',
      },
    ],
    whereToFind: {
      ps: 'د جنرل بس سټینډ حاجي کیمپ دروازه، رنګ روډ کوهاټ اډه، او کارخانو اډه.',
      ur: 'جنرل بس اسٹینڈ حاجی کیمپ، کوہاٹ اڈہ رنگ روڈ اور کارخانو اڈہ۔',
      en: 'General Bus Stand Haji Camp, Kohat Adda Ring Road, and Karkhano.',
    },
    bargainingAdvice: {
      pashtoPhrase: 'کنډکټر صیب، د کارخانو ټکټ څو دی؟',
      urduPhrase: 'کنڈکٹر صاحب، کارخانو کا کتنا کرایہ ہے؟',
      englishMeaning: 'Conductor, what is the ticket to Karkhano?',
      adviceText: {
        ps: 'د ویګن کرایه حکومتي او مقرره ده، کنډکټر ته د کښیناستو پر مهال پیسې ورکړئ.',
        ur: 'ویگن کا کرایہ فکس ہوتا ہے، کنڈکٹر کو سیٹ پر بیٹھتے ہی کرایہ ادا کریں۔',
        en: 'Wagon fares are regulated and fixed; pay the conductor once seated.',
      },
    },
    audioGuide: {
      ps: 'ځايي ویګنونه او کوچونه له حاجي کیمپ څخه تر کارخانو پورې ځي. کرایه یې ۶۰ تر ۸۰ روپۍ ده او پر جی ټي روډ ډیر چټک تیریږي.',
      ur: 'مقامی ویگن سروس حاجی کیمپ سے کارخانو تک سستی اور تیز رفتار سواری فراہم کرتی ہے۔',
      en: 'Local flying coaches run between Haji Camp and Karkhano for Rs. 60 to 80 per passenger.',
    },
  },
  {
    id: 'ride-hailing-apps',
    name: {
      ps: 'د موبایل ایپس موټرونه او موټرسایکلونه (Indrive / Yango)',
      ur: 'آن لائن رائیڈ ایپس (ان ڈرائیو، یینگو، کریم)',
      en: 'Ride-Hailing Apps (Indrive, Yango, Careem)',
    },
    type: 'app',
    icon: 'Smartphone',
    summary: {
      ps: 'په سمارټ فون کې خپله کرایه په خپله وړاندیز کړئ؛ په نغدو روپیو تادیه کیږي.',
      ur: 'موبائل ایپ سے گاڑی یا بائیک رکشہ منگوائیں اور کرایہ خود طے کر کے نقد ادا کریں۔',
      en: 'Order a ride from your phone with custom fare offering and cash payment.',
    },
    capacity: '1 Person (Bike) / 3 Persons (Rickshaw) / 4 Persons (Car)',
    fareModel: {
      ps: 'په ایپ کې مخکې له مخکې بیه ښکاري، په نغدو ورکول کیږي',
      ur: 'ایپ پر پہلے سے قیمت درج ہوتی ہے، نقد ادائیگی ممکن ہے',
      en: 'Upfront estimated fare shown in app, paid in cash to driver',
    },
    estimatedFares: [
      {
        route: {
          ps: 'موټرسایکل (بائیک) لنډ سفر په پېښور کې',
          ur: 'موٹر بائیک رائیڈ (شارٹ روٹ)',
          en: 'Motorbike Ride (Short Distance in Peshawar)',
        },
        fareRange: 'Rs. 100 - 180',
      },
      {
        route: {
          ps: 'ایپ رکشا (حاجي کیمپ نه تر صدر یا KTH)',
          ur: 'آن لائن رکشہ (حاجی کیمپ تا کے ٹی ایچ)',
          en: 'App Rickshaw (Haji Camp to Saddar or KTH)',
        },
        fareRange: 'Rs. 250 - 380',
      },
      {
        route: {
          ps: 'ایپ موټر / کار (ښار نه تر حیات آباد)',
          ur: 'آن لائن کار (شہر تا حیات آباد)',
          en: 'App AC Car (Peshawar City to Hayatabad)',
        },
        fareRange: 'Rs. 500 - 850',
      },
    ],
    whereToFind: {
      ps: 'په انټرنیټ له هر ځای څخه د موبایل اپلیکیشن له لارې راغوښتل کیږي.',
      ur: 'ان ڈرائیو یا یینگو ایپ ڈاؤن لوڈ کر کے پشاور میں کسی بھی جگہ گاڑی بلائیں۔',
      en: 'Download Indrive or Yango on Android/iPhone; available everywhere in Peshawar.',
    },
    bargainingAdvice: {
      pashtoPhrase: 'په ایپ کې مناسبه کرایه واچوئ ترڅو نږدې ډرایور فوري ومني.',
      urduPhrase: 'ایپ میں مناسب کرایہ آفر کریں تاکہ ڈرائیور فوراً پہنچ جائے۔',
      englishMeaning: 'Offer a fair rate in the app so nearby drivers accept quickly.',
      adviceText: {
        ps: 'که رکشا چلوونکي ډیرې پیسې غوښتې، انډرایو (Indrive) راوغواړئ، کرایه یې کمه او په نغدو پیسیو اخلي.',
        ur: 'اگر باہر کوئی رکشہ والا زیادہ پیسے مانگے تو ان ڈرائیو ایپ سے رکشہ یا گاڑی بلا لیں، یہ سستا پڑتا ہے۔',
        en: 'If street drivers attempt to overcharge at terminals, call an Indrive or Yango ride for transparent pricing.',
      },
    },
    audioGuide: {
      ps: 'که موبایل کې انټرنیټ لرئ، د انډرایو یا یینگو اپلیکیشن پرانیزئ. هلته موټر یا رکشا غواړئ، کرایه یې مخکې معلومه وي او چلوونکي ته نغدې پیسې ورکوئ.',
      ur: 'پشاور میں ان ڈرائیو اور یینگو ایپس پر رکشہ یا گاڑی بلانا بہت آسان ہے۔ کرایہ پہلے سے معلوم ہوتا ہے اور نقد ادا کیا جا سکتا ہے۔',
      en: 'If you have mobile internet, Indrive and Yango apps offer cars, rickshaws, and bikes at transparent cash rates across Peshawar.',
    },
  },
];
