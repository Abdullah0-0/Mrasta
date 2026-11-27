import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { ServiceCardGrid } from './components/ServiceCardGrid';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { BRTRouteNavigator } from './components/BRTRouteNavigator';
import { AICitizenChat } from './components/AICitizenChat';
import { EmergencyHelplineModal } from './components/EmergencyHelplineModal';
import { CIVIC_SERVICES } from './data/civicServices';
import { ServiceGuide, Language } from './types';
import { playTextToSpeech, stopTextToSpeech } from './utils/speech';
import { LocalTransportView } from './components/LocalTransportView';
import { Compass, ShieldCheck, HeartHandshake, PhoneCall, Bus, Car } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState<'services' | 'transit' | 'chat'>('services');
  const [transitSubTab, setTransitSubTab] = useState<'brt' | 'local'>('brt');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<ServiceGuide | null>(null);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);
  const [savedChecklist, setSavedChecklist] = useState<Record<string, boolean>>(() => {
    try {
      const stored = localStorage.getItem('mrasta_checklist');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  // Keep dir in sync with language
  useEffect(() => {
    document.documentElement.dir = language === 'en' ? 'ltr' : 'rtl';
    document.documentElement.lang = language;
  }, [language]);

  // Persist checklist
  useEffect(() => {
    try {
      localStorage.setItem('mrasta_checklist', JSON.stringify(savedChecklist));
    } catch {
      // storage quota or private mode
    }
  }, [savedChecklist]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      stopTextToSpeech();
    };
  }, []);

  const handleToggleCheckItem = (key: string) => {
    setSavedChecklist((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handlePlayAudio = (text: string, id: string = 'global') => {
    if (isAudioMuted) return;

    if (activePlayingId === id) {
      stopTextToSpeech();
      setActivePlayingId(null);
      return;
    }

    setActivePlayingId(id);
    playTextToSpeech(
      text,
      language,
      () => setActivePlayingId(id),
      () => setActivePlayingId(null),
      () => setActivePlayingId(null)
    );
  };

  const handleStopAudio = () => {
    stopTextToSpeech();
    setActivePlayingId(null);
  };

  const handleWelcomeAudio = () => {
    const welcomeNarrative = {
      ps: 'پېښور ته پخیر راغلاست! دا د مرستې ولسي لارښود دی. دلته تاسو د پاسپورټ جوړولو، د پولیسو کرکټر سرټیفکیټ، نادرا شناختي کارډ، بي آر ټي بسونو او د روغتونونو په اړه په اسانۍ مالومات ترلاسه کولی شئ. هیڅ ایجنټ ته بهر پیسې مه ورکوئ.',
      ur: 'پشاور میں خوش آمدید! یہ مرستہ سٹیزن اسسٹنٹ ہے۔ یہاں آپ پاسپورٹ، پولیس کریکٹر سرٹیفکیٹ، نادرا، بی آر ٹی اور ہسپتالوں کے تمام مراحل آسان الفاظ اور آڈیو میں جان سکتے ہیں۔ دفاتر کے باہر ایجنٹوں سے ہوشیار رہیں۔',
      en: 'Welcome to Peshawar! Mrasta helps citizens and visitors easily navigate public procedures, NADRA identity cards, police character certificates, and Zu BRT transit.',
    };

    handlePlayAudio(welcomeNarrative[language], 'welcome');
  };

  // Filter services by search query
  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return CIVIC_SERVICES;
    const q = searchQuery.toLowerCase();

    return CIVIC_SERVICES.filter((svc) => {
      const matchTitle =
        svc.title.ps.toLowerCase().includes(q) ||
        svc.title.ur.toLowerCase().includes(q) ||
        svc.title.en.toLowerCase().includes(q);

      const matchDesc =
        svc.shortDesc.ps.toLowerCase().includes(q) ||
        svc.shortDesc.ur.toLowerCase().includes(q) ||
        svc.shortDesc.en.toLowerCase().includes(q);

      const matchStation = svc.locations.some(
        (loc) =>
          loc.nearestBrtStation.toLowerCase().includes(q) ||
          loc.name.ps.toLowerCase().includes(q) ||
          loc.name.ur.toLowerCase().includes(q)
      );

      return matchTitle || matchDesc || matchStation;
    });
  }, [searchQuery]);

  const handleSelectQuickAction = (serviceId: string) => {
    const target = CIVIC_SERVICES.find((s) => s.id === serviceId);
    if (target) {
      setSelectedService(target);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-slate-900 selection:bg-amber-100 selection:text-amber-900 font-sans">
      {/* 3-Zone Top Navigation Contract */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        isAudioMuted={isAudioMuted}
        onToggleMute={() => {
          if (!isAudioMuted) stopTextToSpeech();
          setIsAudioMuted(!isAudioMuted);
        }}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* Hero Section is displayed when on Service Guides tab or general landing */}
        {activeTab === 'services' && (
          <>
            <HeroBanner
              language={language}
              onSearchChange={setSearchQuery}
              searchQuery={searchQuery}
              onSelectQuickAction={handleSelectQuickAction}
              onPlayWelcomeAudio={handleWelcomeAudio}
              isPlayingAudio={activePlayingId === 'welcome'}
            />

            <ServiceCardGrid
              services={filteredServices}
              language={language}
              onSelectService={setSelectedService}
              onPlayServiceAudio={(svc) => handlePlayAudio(svc.audioScript[language], svc.id)}
              activePlayingId={activePlayingId}
              savedChecklist={savedChecklist}
            />

            {/* Quick Civic Tips Banner for Tribal & Remote Visitors */}
            <section className="py-8 bg-white border-t border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {language === 'ps' ? 'د ایجنټانو د تېرایستلو څخه خوندیتوب' : language === 'ur' ? 'ایجنٹوں سے بچاؤ' : 'Beware of Gate Touts'}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {language === 'ps'
                          ? 'ټول سرکاري فیسونه یوازې په رسمي بانک او کاونټر کې تحویلیږي. هیڅوک ته د ټوکن په نوم نغدې پیسې مه ورکوئ.'
                          : language === 'ur'
                          ? 'تمام فیسیں صرف سرکاری بینک کاؤنٹر پر جمع ہوتی ہیں۔ باہر کسی کو اضافی رقم نہ دیں۔'
                          : 'Never pay cash to people outside offices. Fees are only deposited in authorized bank branches.'}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-100 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {language === 'ps' ? 'د بي آر ټي مستقیمې لارې' : language === 'ur' ? 'بی آر ٹی سے آسان رسائی' : 'Direct BRT Access'}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {language === 'ps'
                          ? 'د پېښور ټول لوی روغتونونه (LRH، KTH، HMC)، پاسپورټ دفتر او نادرا سنټرونه د بي آر ټي له سټیشنونو سره په ۲ دقیقو فاصله کې دي.'
                          : language === 'ur'
                          ? 'ایل آر ایچ، کے ٹی ایچ، حیات آباد میڈیکل، نادرا اور پاسپورٹ دفاتر تک بی آر ٹی سے 2 منٹ کا فاصلہ ہے۔'
                          : 'Major hospitals and offices are directly located at dedicated Zu BRT stations.'}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {language === 'ps' ? 'د قبایلي سیمو هیوادوالو ته اسانتیا' : language === 'ur' ? 'قبائلی شہریوں کے لیے رہنمائی' : 'Tribal Districts Guidance'}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {language === 'ps'
                          ? 'د ضم شوو ولسوالیو (خیبر، کورم، باجوړ، وزیرستان) اوسیدونکي کولی شي د خپلو اسنادو تاییدي او پاسپورټ کارونه په منظم ډول دلته تعقیب کړي.'
                          : language === 'ur'
                          ? 'ضم شدہ اضلاع سے آنے والے شہری یہاں مکمل دفتری ضوابط اور طریقہ کار سمجھ سکتے ہیں۔'
                          : 'Clear procedural instructions for residents of merged tribal districts visiting the provincial capital.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Transit Navigator Tab (BRT + Local Taxis & Rickshaws) */}
        {activeTab === 'transit' && (
          <div className="py-6 bg-[#FAFAF8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              {/* Segmented Sub-Navbar for Transit Modes */}
              <div className="inline-flex p-1 bg-slate-200/80 rounded-2xl border border-slate-300">
                <button
                  onClick={() => setTransitSubTab('brt')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                    transitSubTab === 'brt'
                      ? 'bg-white text-emerald-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Bus className="w-4 h-4 text-amber-600" />
                  <span>
                    {language === 'ps'
                      ? 'زو بي آر ټي بس (۳۰ تمځایونه)'
                      : language === 'ur'
                      ? 'زو بی آر ٹی بس (30 اسٹیشنز)'
                      : 'Zu BRT Metro Bus'}
                  </span>
                </button>

                <button
                  onClick={() => setTransitSubTab('local')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                    transitSubTab === 'local'
                      ? 'bg-white text-emerald-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Car className="w-4 h-4 text-emerald-700" />
                  <span>
                    {language === 'ps'
                      ? 'رکشې، چنګچي او ټيکسي اډې'
                      : language === 'ur'
                      ? 'رکشہ، چنگچی اور ٹیکسی اڈے'
                      : 'Local Taxis & Rickshaws'}
                  </span>
                </button>
              </div>
            </div>

            {transitSubTab === 'brt' ? (
              <BRTRouteNavigator
                language={language}
                onPlayAudio={(text) => handlePlayAudio(text, 'transit-route')}
                isPlayingAudio={activePlayingId === 'transit-route'}
                onStopAudio={handleStopAudio}
              />
            ) : (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <LocalTransportView
                  language={language}
                  onPlayAudio={(text) => handlePlayAudio(text, 'local-transit')}
                  isPlayingAudio={activePlayingId === 'local-transit'}
                  onStopAudio={handleStopAudio}
                />
              </div>
            )}
          </div>
        )}

        {/* AI Citizen Chat Assistant Tab */}
        {activeTab === 'chat' && (
          <AICitizenChat
            language={language}
            onPlayAudio={(text) => handlePlayAudio(text, 'ai-chat-response')}
            isPlayingAudio={activePlayingId === 'ai-chat-response'}
            onStopAudio={handleStopAudio}
          />
        )}
      </main>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        language={language}
        onClose={() => setSelectedService(null)}
        savedChecklist={savedChecklist}
        onToggleCheckItem={handleToggleCheckItem}
        onPlayAudio={(text) => handlePlayAudio(text, selectedService?.id || 'service-modal')}
        isPlayingAudio={activePlayingId === (selectedService?.id || 'service-modal')}
        onStopAudio={handleStopAudio}
      />

      {/* Emergency Helpline Speed Dial Modal */}
      <EmergencyHelplineModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
        language={language}
      />

      {/* Dignified Footer with Unboxed Metadata */}
      <footer className="bg-white border-t border-slate-200 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">Mrasta (مرسته)</span>
            <span aria-hidden="true">·</span>
            <span>{language === 'ps' ? 'د پېښور د ښاري خدمتونو او سفر لارښود' : language === 'ur' ? 'پشاور پبلک سروسز و ٹرانزٹ گائیڈ' : 'Peshawar Civic Companion'}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-emerald-800 font-semibold">KPK, Pakistan</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <button
              onClick={() => setIsEmergencyOpen(true)}
              className="text-rose-700 hover:text-rose-900 flex items-center gap-1 font-semibold"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Rescue 1122</span>
            </button>
            <span aria-hidden="true">·</span>
            <span>Zu Helpline: 091-111-477-477</span>
            <span aria-hidden="true">·</span>
            <span>Sehat Card: 0800-09009</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
