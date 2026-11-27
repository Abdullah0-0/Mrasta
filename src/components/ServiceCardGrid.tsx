import React, { useState } from 'react';
import {
  BookOpen,
  ShieldCheck,
  Bus,
  CreditCard,
  HeartPulse,
  GraduationCap,
  FileBadge,
  ArrowRight,
  ArrowLeft,
  Volume2,
  MapPin,
  CheckCircle2,
  Building,
  UtensilsCrossed,
  ShoppingBag,
} from 'lucide-react';
import { ServiceGuide, Language } from '../types';

interface ServiceCardGridProps {
  services: ServiceGuide[];
  language: Language;
  onSelectService: (service: ServiceGuide) => void;
  onPlayServiceAudio: (service: ServiceGuide) => void;
  activePlayingId: string | null;
  savedChecklist: Record<string, boolean>;
}

export const ServiceCardGrid: React.FC<ServiceCardGridProps> = ({
  services,
  language,
  onSelectService,
  onPlayServiceAudio,
  activePlayingId,
  savedChecklist,
}) => {
  const isRtl = language !== 'en';
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: { ps: 'ټول لارښودونه', ur: 'تمام خدمات', en: 'All Services' } },
    { id: 'identity', label: { ps: 'سرکاري اسناد او نادرا', ur: 'شناختی دستاویزات', en: 'Identity & Legal' } },
    { id: 'health', label: { ps: 'روغتون او صحت کارډ', ur: 'ہسپتال و صحت', en: 'Healthcare' } },
    { id: 'lodging', label: { ps: 'مسافرخانې او هوټلونه', ur: 'رہائش و ہوٹل', en: 'Lodging & Sarai' } },
    { id: 'food', label: { ps: 'د پېښور خواړه او ټکه', ur: 'پشاوری کھانے', en: 'Food & Dining' } },
    { id: 'shopping', label: { ps: 'کارخانو او بازارونه', ur: 'کارخانو و بازار', en: 'Bazaars & Shopping' } },
  ];

  const filtered = activeCategory === 'all'
    ? services
    : services.filter((s) => {
        if (activeCategory === 'identity') return ['identity', 'legal', 'education', 'certificates'].includes(s.category);
        return s.category === activeCategory;
      });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-emerald-800" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-700" />;
      case 'Bus':
        return <Bus className="w-6 h-6 text-amber-600" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-purple-700" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-rose-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-teal-700" />;
      case 'FileBadge':
        return <FileBadge className="w-6 h-6 text-indigo-700" />;
      case 'Building':
        return <Building className="w-6 h-6 text-amber-700" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-rose-700" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-indigo-700" />;
      default:
        return <BookOpen className="w-6 h-6 text-emerald-800" />;
    }
  };

  return (
    <section className="py-8 md:py-12 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              <span>{language === 'ps' ? 'سرکاري پړاوونه' : language === 'ur' ? 'سرکاری مراحل' : 'Official Procedures'}</span>
              <span aria-hidden="true">·</span>
              <span>{language === 'ps' ? 'پېښور مرسته' : language === 'ur' ? 'پشاور سہولت' : 'Verified KPK'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {language === 'ps'
                ? 'د عامه خدمتونو او اسنادو لارښود'
                : language === 'ur'
                ? 'شہری خدمات اور ضروری دستاویزات کی رہنمائی'
                : 'Peshawar Citizen Procedural Guides'}
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              {language === 'ps'
                ? 'د هر کار لپاره اړین کاغذونه، د دفتر دقیق ځای، بي آر ټي سټیشن او غږیز وضاحت وګورئ.'
                : language === 'ur'
                ? 'ہر سرکاری کام کے ضروری کاغذات، مطلوبہ فیس، درست بی آر ٹی اسٹاپ اور آسان آڈیو رہنمائی حاصل کریں۔'
                : 'Select any public service to view requirements, fees, nearest BRT station, and step-by-step audio instructions.'}
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            {filtered.length} {language === 'ps' ? 'لارښودونه' : language === 'ur' ? 'گائیڈز' : 'Guides'}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => {
            // Count checked items for this service
            const totalDocs = service.documents.length;
            const checkedCount = service.documents.filter(
              (doc) => savedChecklist[`${service.id}-${doc.id}`]
            ).length;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group focus-within:ring-2 focus-within:ring-emerald-700"
              >
                <div className="p-5 sm:p-6">
                  {/* Top Row: Icon + Audio Button */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.icon)}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onPlayServiceAudio(service);
                      }}
                      title={language === 'ps' ? 'په غږ کې واورئ' : language === 'ur' ? 'آڈیو سنیں' : 'Listen aloud'}
                      className={`min-h-[44px] min-w-[44px] px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                        activePlayingId === service.id
                          ? 'bg-amber-100 text-amber-900 border-amber-300'
                          : 'bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 border-slate-200'
                      }`}
                    >
                      <Volume2 className="w-4 h-4 shrink-0" />
                      <span>{activePlayingId === service.id ? (language === 'ps' ? 'غږیږي' : 'چل رہا ہے') : (language === 'ps' ? 'واورئ' : language === 'ur' ? 'سنیں' : 'Listen')}</span>
                    </button>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors leading-snug">
                    {service.title[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {service.shortDesc[language]}
                  </p>

                  {/* Nearest BRT Station Callout */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-700">
                    <MapPin className="w-4 h-4 text-emerald-800 shrink-0" />
                    <span className="font-semibold text-emerald-900">
                      {language === 'ps' ? 'نږدې سټیشن:' : language === 'ur' ? 'قریبی اسٹاپ:' : 'Nearest BRT:'}
                    </span>
                    <span className="truncate font-medium">{service.locations[0]?.nearestBrtStation}</span>
                  </div>

                  {/* Document Progress indicator if any checked */}
                  {checkedCount > 0 && (
                    <div className="mt-2.5 flex items-center gap-1.5 text-xs text-emerald-800 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>
                        {checkedCount} / {totalDocs} {language === 'ps' ? 'اسناد تیار دي' : language === 'ur' ? 'کاغذات تیار ہیں' : 'documents prepared'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Bottom Action Footer */}
                <div className="px-5 sm:px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">
                    {service.steps.length} {language === 'ps' ? 'پړاوونه' : language === 'ur' ? 'مراحل' : 'Clear Steps'}
                  </span>

                  <button
                    onClick={() => onSelectService(service)}
                    className="min-h-[44px] px-3 text-xs font-bold text-emerald-900 hover:text-emerald-700 flex items-center gap-1.5 focus:outline-none"
                  >
                    <span>{language === 'ps' ? 'پوره لارښود وګورئ' : language === 'ur' ? 'مکمل طریقہ کار' : 'View Guide'}</span>
                    {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
