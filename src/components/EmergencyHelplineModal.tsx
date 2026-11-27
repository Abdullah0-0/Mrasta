import React from 'react';
import { X, Phone, PhoneCall, AlertCircle, ShieldAlert } from 'lucide-react';
import { Language } from '../types';

interface EmergencyHelplineModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const EmergencyHelplineModal: React.FC<EmergencyHelplineModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  if (!isOpen) return null;

  const emergencyContacts = [
    {
      title: { ps: 'ریسکیو ۱۱۲۲ (امبولانس او اور وژنه)', ur: 'ریسکیو 1122 (ایمبولینس و فائر بریگیڈ)', en: 'Rescue 1122 (Ambulance & Disaster)' },
      number: '1122',
      desc: { ps: 'په ټوله خیبر پښتونخوا کې وړیا عاجل روغتیايي او د حادثې مرسته', ur: 'مفت ایمرجنسی طبی اور حادثاتی امداد', en: 'Free 24/7 medical & accident emergency response' },
      isPrimary: true,
    },
    {
      title: { ps: 'د پولیسو بیړنۍ شمیره (۱۵)', ur: 'پولیس ایمرجنسی (15)', en: 'Police Emergency 15' },
      number: '15',
      desc: { ps: 'د امنیتي ستونزې یا د غلا په صورت کې فوري اړیکه', ur: 'سیکیورٹی یا لا اینڈ آرڈر کی صورت میں فوری رابطہ', en: 'Immediate security assistance across Peshawar' },
      isPrimary: true,
    },
    {
      title: { ps: 'د زو پېښور بي آر ټي مرستندویه مرکز', ur: 'زو پشاور ہیلپ لائن', en: 'Zu Peshawar Helpline' },
      number: '091-111-477-477',
      desc: { ps: 'د بسونو معلومات، ورک شوي شیان او شکایتونه', ur: 'گمشدہ سامان، بس روٹس اور شکایات کا حل', en: 'Lost and found, fare queries, and bus schedule' },
      isPrimary: false,
    },
    {
      title: { ps: 'د صحت کارډ پلس وړیا لارښوود', ur: 'صحت کارڈ پلس ٹول فری', en: 'Sehat Card Plus Toll-Free' },
      number: '0800-09009',
      desc: { ps: 'د وړیا روغتون علاج او د شناختي کارډ تصدیق', ur: 'مفت ہسپتال علاج اور کارڈ کی اہلیت کی معلومات', en: 'Toll-free hospital coverage and CNIC verification' },
      isPrimary: false,
    },
    {
      title: { ps: 'ليډي ریډینګ هسپتال (LRH) ایمرجنسي', ur: 'لیڈی ریڈنگ ہسپتال ایمرجنسی وارڈ', en: 'LRH Emergency Counter' },
      number: '091-9211430',
      desc: { ps: 'د خیبر بازار دروازه، بیړنۍ تروما سنټر', ur: 'خیبر بازار گیٹ، سنٹرل ایمرجنسی', en: 'Central emergency triage near Khyber Bazar' },
      isPrimary: false,
    },
    {
      title: { ps: 'خیبر ټیچینګ هسپتال (KTH) ایمرجنسي', ur: 'خیبر ٹیچنگ ہسپتال ایمرجنسی', en: 'KTH Emergency Desk' },
      number: '091-9224400',
      desc: { ps: 'د پوهنتون سړک، اسلامیه کالج مخامخ', ur: 'یونیورسٹی روڈ پشاور', en: 'University Road emergency department' },
      isPrimary: false,
    },
    {
      title: { ps: 'حیات آباد میډیکل کمپلیکس (HMC)', ur: 'حیات آباد میڈیکل کمپلیکس ایمرجنسی', en: 'HMC Emergency Desk' },
      number: '091-9217140',
      desc: { ps: 'فیز ۴ حیات آباد، هسپتال چوک', ur: 'فیز 4 حیات آباد، ہسپتال چوک', en: 'Phase 4 Hayatabad main emergency' },
      isPrimary: false,
    },
    {
      title: { ps: 'د افتونو او سیلابونو اداره (PDMA)', ur: 'پی ڈی ایم اے قدرتی آفات ہیلپ لائن', en: 'PDMA Disaster Helpline' },
      number: '1700',
      desc: { ps: 'د بارانونو او سیلاب په وخت کې وړیا لارښوونه', ur: 'سیلاب اور بارشوں کے دوران مدد', en: 'Weather alert and natural disaster coordination' },
      isPrimary: false,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-rose-50 border-b border-rose-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-xs">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-rose-950">
                {language === 'ps' ? 'د پېښور مهمې او بیړنۍ شمیرې' : language === 'ur' ? 'پشاور ہنگامی اور اہم رابطہ نمبرز' : 'Peshawar Emergency Helplines'}
              </h3>
              <p className="text-xs text-rose-800">
                {language === 'ps' ? 'په یو ټک مستقیم زنګ ووهئ' : language === 'ur' ? 'ایک کلک پر براہ راست کال کریں' : 'Tap to dial directly'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] p-2 rounded-xl text-rose-400 hover:text-rose-900 hover:bg-rose-100/60 transition-colors flex items-center justify-center"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Contacts List */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-3">
          {emergencyContacts.map((contact, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                contact.isPrimary
                  ? 'bg-rose-50/50 border-rose-200 shadow-2xs'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  {contact.title[language]}
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  {contact.desc[language]}
                </p>
              </div>

              <a
                href={`tel:${contact.number.replace(/-/g, '')}`}
                className={`min-h-[44px] px-4 py-2 rounded-xl font-bold font-mono text-sm flex items-center justify-center gap-2 whitespace-nowrap transition-colors shrink-0 ${
                  contact.isPrimary
                    ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-emerald-50 text-slate-900 hover:text-emerald-900 border border-slate-200'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>{contact.number}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-500 font-medium">
            {language === 'ps'
              ? 'د ټولې خیبر پښتونخوا او قبایلي ولسوالیو لپاره فعال خدمات'
              : language === 'ur'
              ? 'پوری خیبر پختونخوا اور ضم شدہ قبائلی اضلاع کے لیے مفت سہولت'
              : 'Serving all citizens and regional travelers across Khyber Pakhtunkhwa'}
          </p>
        </div>
      </div>
    </div>
  );
};
