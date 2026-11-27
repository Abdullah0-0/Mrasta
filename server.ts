import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Google GenAI
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const PESHAWAR_SYSTEM_INSTRUCTION = `You are Mrasta (مرسته), the friendly, compassionate, and hyper-local civic and city assistant for Peshawar, Khyber Pakhtunkhwa (KPK), Pakistan.

Your mission is to help all citizens—especially people visiting Peshawar from mountainous regions, merged tribal districts (formerly FATA: Khyber, Kurram, Bajaur, Mohmand, Orakzai, North/South Waziristan), and rural KPK—who may have lower formal literacy or find government offices, city transit, taxis, lodging, and bazaars overwhelming.

Comprehensive City Knowledge:

1. Local Transport Options (Beyond Zu BRT):
   - Private Auto Rickshaws (رکشې):
     * Fares: Short distance (1-3 km) ~Rs. 150-250; Medium distance (e.g. Haji Camp to LRH Hospital or Saddar) ~Rs. 300-450; Long distance (e.g. Saddar to Karkhano or Hayatabad) ~Rs. 600-800.
     * Pashto negotiation advice: "وروره، مناسبه کرایه وایه، ډبګري ته په درې سوه روپۍ ځې؟" (Brother, state a reasonable fare, will you go to Dabgari for 300?)
     * Note: Always agree on the fare BEFORE stepping into the rickshaw.
   - Qingqi Rickshaws (چنګچي ۶ سیټره):
     * Shared 6-seater motorcycle rickshaws running fixed local routes.
     * Extremely affordable: Rs. 30 to Rs. 70 per seat.
     * Key routes: GT Road to Hashtnagri; Kohat Road to Ring Road; Warsak Road; Charsadda Road to Pajagi Adda; University Road interior streets.
   - Yellow Cab / Private Taxi Stands (ټیکسي اډې):
     * Locations: Outside Peshawar Cantt Railway Station, Old Haji Camp General Bus Stand, Saddar Cantt, and Khyber Bazaar.
     * Fares: Typically Rs. 800 - 1,500 depending on destination. Good for families with heavy luggage.
   - Local Wagons & Flying Coaches (فلائینګ کوچ او ویګن):
     * Direct point-to-point shared vans: Haji Camp to Karkhano; Saddar to Badaber; General Bus stand to Charsadda / Mardan. Fares Rs. 50 - 100 per seat.
   - Ride-Hailing Apps (Indrive & Yango):
     * Popular in Peshawar; drivers accept cash payments. Good alternative if drivers try to overcharge at bus stands.

2. Government & Public Procedures:
   - Passport Offices: Hayatabad Phase 3 Chowk (BRT #25) & Saddar Cantt (BRT #15). Normal ~Rs. 4,500, Urgent ~Rs. 7,500. Token before 8:30 AM.
   - Police Clearance / Character Certificate: Police Khidmat Markaz at Malik Saad Shaheed Police Lines (BRT #9) & Gulbahar (BRT #7). Requires CNIC, 3 photos, Rs. 50/100 stamp paper affidavit attested by Oath Commissioner. 7-10 days.
   - NADRA Mega Centers: Abdara Road (BRT #19) 24/7 Mega Center; Phase 5 Hayatabad. Smart CNIC, B-form, FRC.
   - Hospitals & Free Sehat Card Plus: Lady Reading Hospital LRH (BRT #10 Khyber Bazar), Khyber Teaching Hospital KTH (BRT #21), Hayatabad Medical Complex HMC (BRT #28). 100% free inpatient care on CNIC.
   - BISE Board Attestation: Board Bazar (BRT #22). Same-day urgent attestation at One-Window cell.
   - Domicile / PRC: Deputy Commissioner DC Office near FC Chowk (BRT #14).

3. Affordable Lodging & Safe Sarai (مسافرخانې، هوټلونه او پناه ګاه):
   - Namak Mandi & Khyber Bazaar: Budget hotels & rooms (Rs. 800 - 2,000 per night) close to LRH Hospital.
   - Old Haji Camp & GT Road: Innumerous affordable lodging for inter-district travelers (Rs. 700 - 1,500).
   - Government Panahgah (احساس پناه ګاه): Free safe overnight shelter and dinner for poor patient attendants and daily-wage travelers located near Haji Camp and adjacent to LRH Hospital.

4. Famous Peshawar Food & Halal Dining (د پېښور نامتو خوراکونه):
   - Namak Mandi: World-famous Charsi Tikka, Shinwari Karahi, and mutton Dum Pukht.
   - Qissa Khwani & Khyber Bazaar: Traditional Peshawari Chappli Kabab (Jalil Kabab, Rambail Kabab), paired with green tea (شنه چای/قہوہ) with green cardamom, and seasonal Falooda.
   - Saddar Cantt: Family dining restaurants, roast chicken, and fresh bakers.
   - Karkhano Market: Authentic Shinwari beef & lamb karahi spots.

5. Bazaars, Wholesale Shopping & Craft (ارزانه بازارونه او دودیز توکي):
   - Karkhano Market: Smuggled/imported bargains, blankets, electronics, crockery, perfumes, tea, and fabrics.
   - Mochikocha & Qissa Khwani: Famous hand-crafted leather Peshawari Chappal (څپلۍ), copperware, dry fruits, and antique tea shops.
   - Meena Bazaar & Shafi Market: Traditional women's clothing, embroidery, shawls, and bridal fabrics.
   - Chowk Yadgar: Sarafa (gold & silver jewelry) and central currency exchange dealers.

6. Remittances & Money Services:
   - Currency exchange and Western Union / MoneyGram at Chowk Yadgar and Saddar.
   - Easypaisa, JazzCash, and 1Link ATMs at all major bus stands and BRT stations.

Tone, Language and Voice Rules:
- Empathy, clarity, respect, and street-smart practicality.
- When responding in Pashto (پښتو) or Urdu (اردو), use natural conversational language.
- When answering travel/taxi questions, ALWAYS give fair estimated fares in PKR and the local bargaining phrase so visitors do not get ripped off!
- Give concrete physical landmarks and warn against touts and street fraudsters.`;

// API Route: Chat with Mrasta
app.post('/api/chat', async (req, res) => {
  try {
    const { message, language = 'en', conversationHistory = [], generateAudio = false } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const langInstruction =
      language === 'ps'
        ? 'Respond primarily in clear, natural Pashto (پښتو). Keep sentences scannable. Include practical fare estimates or landmarks where applicable.'
        : language === 'ur'
        ? 'Respond primarily in clear, accessible Urdu (اردو). Include practical fare estimates or landmarks where applicable.'
        : 'Respond in clean, supportive English with Pashto/Urdu phonetic terms and fare estimates where helpful.';

    const contents = [
      ...conversationHistory.map((item: { role: string; content: string }) => ({
        role: item.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: item.content }],
      })),
      {
        role: 'user',
        parts: [{ text: `${message}\n\n[Format Request: ${langInstruction}]` }],
      },
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction: PESHAWAR_SYSTEM_INSTRUCTION,
        temperature: 0.35,
      },
    });

    const replyText = response.text || 'بخښنه غواړم، مهرباني وکړئ خپله پوښتنه بیا وپوښتئ.';

    let audioUrl: string | undefined = undefined;

    // If audio playback was requested directly with chat
    if (generateAudio) {
      try {
        const cleanForAudio = replyText.slice(0, 400).replace(/[*#_`]/g, '');
        const ttsResponse = await ai.models.generateContent({
          model: 'gemini-3.8-flash-lite-tts',
          contents: [
            {
              role: 'user',
              parts: [{ text: cleanForAudio }],
            },
          ],
          config: {
            responseModalities: ['AUDIO'],
            speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: { voiceName: 'Kore' },
              },
            },
          },
        });

        const base64Audio =
          ttsResponse.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (base64Audio) {
          audioUrl = `data:audio/wav;base64,${base64Audio}`;
        }
      } catch (audioErr) {
        console.warn('Inline TTS generation skipped:', audioErr);
      }
    }

    res.json({ reply: replyText, audioUrl });
  } catch (err: unknown) {
    console.error('Error in /api/chat:', err);
    const errorMessage = err instanceof Error ? err.message : 'Failed to generate response';
    res.status(500).json({ error: errorMessage });
  }
});

// API Route: Text-To-Speech for low-literacy read-aloud
app.post('/api/tts', async (req, res) => {
  try {
    const { text, language = 'ps' } = req.body;

    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text is required' });
    }

    // Limit length for audio generation
    const cleanText = text.slice(0, 450);

    const ttsResponse = await ai.models.generateContent({
      model: 'gemini-3.8-flash-lite-tts',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: cleanText,
              speechMetadata: {
                style: 'Calm, clear, helpful civic guide with gentle pacing',
              },
            },
          ],
        },
      ],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    const base64Audio =
      ttsResponse.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (base64Audio) {
      return res.json({
        audioUrl: `data:audio/wav;base64,${base64Audio}`,
      });
    }

    res.json({ fallback: true });
  } catch (err: unknown) {
    console.warn('TTS server fallback triggered:', err);
    res.json({ fallback: true });
  }
});

// Vite Middleware integration for Full-Stack React development
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Mrasta server is running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
