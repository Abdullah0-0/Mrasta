import React, { useState } from 'react';
import {
  X,
  Volume2,
  VolumeX,
  CheckSquare,
  Square,
  MapPin,
  Clock,
  DollarSign,
  AlertTriangle,
  Copy,
  Printer,
  Share2,
  Check,
  Building,
} from 'lucide-react';
import { ServiceGuide, Language } from '../types';

interface ServiceDetailModalProps {
  service: ServiceGuide | null;
  language: Language;
  onClose: () => void;
  savedChecklist: Record<string, boolean>;
  onToggleCheckItem: (key: string) => void;
  onPlayAudio: (text: string) => void;
  isPlayingAudio: boolean;
  onStopAudio: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  language,
  onClose,
  savedChecklist,
  onToggleCheckItem,
  onPlayAudio,
  isPlayingAudio,
  onStopAudio,
}) => {
  const [copiedSlip, setCopiedSlip] = useState(false);

  if (!service) return null;

  const totalDocs = service.documents.length;
  const checkedDocsCount = service.documents.filter(
    (doc) => savedChecklist[`${service.id}-${doc.id}`]
  ).length;

  const handleCopySlip = () => {
    const lines = [
      `🏛️ ${service.title[language]} - ${service.officeName[language]}`,
      `📍 ${language === 'ps' ? 'ځای او سټیشن:' : 'مقام و اسٹیشن:'} ${service.locations[0]?.name[language]} (${service.locations[0]?.nearestBrtStation})`,
      `🕒 ${language === 'ps' ? 'وخت:' : 'اوقات:'} ${service.workingHours[language]}`,
      `💰 ${language === 'ps' ? 'فیس:' : 'فیس:'} ${service.feeInfo[language]}`,
      `\n📋 ${language === 'ps' ? 'اړین اسناد:' : 'ضروری کاغذات:'}`,
      ...service.documents.map((d) => {
        const isDone = savedChecklist[`${service.id}-${d.id}`];
        return `${isDone ? '✅' : '⬜'} ${d.name[language]}`;
      }),
      `\n⚠️ ${service.criticalTips[0] ? service.criticalTips[0][language] : ''}`,
      `\n---\nپېښور مرسته (Mrasta Civic Companion)`,
    ];

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopiedSlip(true);
      setTimeout(() => setCopiedSlip(false), 2500);
    });
  };

  const handlePrintSlip = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header Bar */}
        <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
              <span>{service.officeName[language]}</span>
              <span aria-hidden="true">·</span>
              <span>{service.processingTime[language]}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
              {service.title[language]}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Audio Read Aloud */}
            <button
              onClick={() => {
                if (isPlayingAudio) {
                  onStopAudio();
                } else {
                  onPlayAudio(service.audioScript[language]);
                }
              }}
              title={language === 'ps' ? 'په پښتو کې واورئ' : language === 'ur' ? 'آواز میں سنیں' : 'Listen aloud'}
              className={`min-h-[44px] min-w-[44px] px-3.5 py-2 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
                isPlayingAudio
                  ? 'bg-amber-100 text-amber-900 border-amber-300 ring-2 ring-amber-400'
                  : 'bg-emerald-800 text-white border-transparent hover:bg-emerald-900'
              }`}
            >
              {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>
                {isPlayingAudio
                  ? language === 'ps'
                    ? 'بندول'
                    : language === 'ur'
                    ? 'روکیں'
                    : 'Stop'
                  : language === 'ps'
                  ? 'واورئ (غږ)'
                  : language === 'ur'
                  ? 'سنیں (آواز)'
                  : 'Listen'}
              </span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="min-h-[44px] min-w-[44px] p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors flex items-center justify-center"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-800">
          {/* Location & Landmark Box */}
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-wide mb-3">
              <MapPin className="w-4 h-4" />
              <span>{language === 'ps' ? 'د دفتر دقیق ځای او د بي آر ټي سټیشن' : language === 'ur' ? 'دفتر کا مقام اور بی آر ٹی اسٹاپ' : 'Location & BRT Station'}</span>
            </div>

            <div className="space-y-4">
              {service.locations.map((loc, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-emerald-100 shadow-2xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="font-bold text-slate-900 text-base">{loc.name[language]}</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 font-bold text-xs">
                      <Building className="w-3.5 h-3.5" />
                      {loc.nearestBrtStation}
                    </span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-800 font-semibold">{language === 'ps' ? 'پته او نښه: ' : language === 'ur' ? 'پتہ و نشانی: ' : 'Landmark: '}</strong>
                    {loc.landmarkDescription[language]}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Metrics (Hours, Fees) */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-emerald-200/60 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="w-4 h-4 text-emerald-800 shrink-0" />
                <span><strong>{language === 'ps' ? 'کاري وخت:' : 'اوقات کار:'}</strong> {service.workingHours[language]}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <DollarSign className="w-4 h-4 text-emerald-800 shrink-0" />
                <span><strong>{language === 'ps' ? 'فیس:' : 'فیس:'}</strong> {service.feeInfo[language]}</span>
              </div>
            </div>
          </div>

          {/* Interactive Document Checklist */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {language === 'ps' ? 'اړین اسناد (چک لست)' : language === 'ur' ? 'ضروری کاغذات کی فہرست (چیک لسٹ)' : 'Required Documents Checklist'}
                </h3>
                <span className="text-xs font-semibold text-emerald-800">
                  ({checkedDocsCount} / {totalDocs})
                </span>
              </div>
              <span className="text-xs text-slate-500">
                {language === 'ps' ? 'هغه کاغذونه ټک کړئ چې چمتو کړي مو دي' : language === 'ur' ? 'جو کاغذات تیار ہیں ان پر کلک کریں' : 'Tick documents you already have'}
              </span>
            </div>

            <div className="space-y-2.5">
              {service.documents.map((doc) => {
                const isChecked = !!savedChecklist[`${service.id}-${doc.id}`];
                return (
                  <button
                    key={doc.id}
                    onClick={() => onToggleCheckItem(`${service.id}-${doc.id}`)}
                    className={`w-full p-3.5 rounded-xl border text-left rtl:text-right flex items-start gap-3 transition-colors ${
                      isChecked
                        ? 'bg-emerald-50/70 border-emerald-300 text-slate-900'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0 text-emerald-800">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 fill-emerald-100" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-sm font-semibold ${isChecked ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                          {doc.name[language]}
                        </span>
                        {doc.mandatory && (
                          <span className="text-[11px] font-bold text-rose-700 shrink-0">
                            {language === 'ps' ? 'لازمي' : language === 'ur' ? 'لازمی' : 'Mandatory'}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Action Bar: Copy Slip & WhatsApp */}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button
                onClick={handleCopySlip}
                className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center gap-1.5 transition-colors"
              >
                {copiedSlip ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
                <span>
                  {copiedSlip
                    ? language === 'ps'
                      ? 'کاپي شو!'
                      : language === 'ur'
                      ? 'سلپ کاپی ہو گئی!'
                      : 'Copied!'
                    : language === 'ps'
                    ? 'پرچۍ کاپي کړئ (WhatsApp ته)'
                    : language === 'ur'
                    ? 'سلپ کاپی کریں (واٹس ایپ کے لیے)'
                    : 'Copy Slip for WhatsApp'}
                </span>
              </button>

              <button
                onClick={handlePrintSlip}
                className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>{language === 'ps' ? 'پرینټ کړئ' : language === 'ur' ? 'پرنٹ سلپ' : 'Print Slip'}</span>
              </button>
            </div>
          </div>

          {/* Step-by-Step Procedure */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
              {language === 'ps' ? 'مرحله په مرحله پړاوونه' : language === 'ur' ? 'مرحلہ وار طریقہ کار' : 'Step-by-Step Walkthrough'}
            </h3>

            <div className="space-y-4">
              {service.steps.map((st) => (
                <div key={st.stepNumber} className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      {st.title[language]}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {st.instruction[language]}
                  </p>
                  {st.landmarkHint && (
                    <div className="mt-2 text-xs text-emerald-800 font-medium flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{st.landmarkHint[language]}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Critical Warnings & Advice */}
          {service.criticalTips && service.criticalTips.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900">
              <div className="flex items-center gap-2 font-bold text-sm text-amber-950 mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>{language === 'ps' ? 'مهمې لارښوونې او خبرداری' : language === 'ur' ? 'ضروری ہدایات و احتیاط' : 'Important Tips & Warnings'}</span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 leading-relaxed">
                {service.criticalTips.map((tip, idx) => (
                  <li key={idx}>{tip[language]}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">
            {language === 'ps' ? 'پېښور مرسته - رسمي مالومات' : language === 'ur' ? 'پشاور مرستہ - مصدقہ معلومات' : 'Peshawar Mrasta Civic Companion'}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-semibold text-xs transition-colors"
          >
            {language === 'ps' ? 'بندول' : language === 'ur' ? 'بند کریں' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
