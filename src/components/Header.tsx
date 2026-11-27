import React from 'react';
import { Volume2, VolumeX, PhoneCall } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: 'services' | 'transit' | 'chat';
  onTabChange: (tab: 'services' | 'transit' | 'chat') => void;
  onOpenEmergency: () => void;
  isAudioMuted: boolean;
  onToggleMute: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  activeTab,
  onTabChange,
  onOpenEmergency,
  isAudioMuted,
  onToggleMute,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-8 h-16">
          {/* Zone 1: Single text wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onTabChange('services')}
              className="text-left rtl:text-right group flex items-center gap-2.5 focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-emerald-900 transition-colors">
                مر
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                  Mrasta <span className="font-semibold text-emerald-800 font-arabic">مرسته</span>
                </span>
                <span className="text-[11px] text-slate-500 font-medium mt-0.5 whitespace-nowrap">
                  {language === 'ps' ? 'د پېښور ولسي خدمتونه' : language === 'ur' ? 'پشاور پبلک سروسز' : 'Peshawar Civic Assistant'}
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links (Single-line whitespace-nowrap) */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3 text-sm font-medium">
            <button
              onClick={() => onTabChange('services')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'services'
                  ? 'bg-emerald-50 text-emerald-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {language === 'ps' ? 'لارښودونه او اسناد' : language === 'ur' ? 'رہنمائی و کاغذات' : 'Service Guides'}
            </button>
            <button
              onClick={() => onTabChange('transit')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'transit'
                  ? 'bg-emerald-50 text-emerald-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {language === 'ps' ? 'ټرانسپورټ او سفر' : language === 'ur' ? 'ٹرانسپورٹ و سفر' : 'Transit'}
            </button>
            <button
              onClick={() => onTabChange('chat')}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'chat'
                  ? 'bg-emerald-50 text-emerald-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {language === 'ps' ? 'هوښیار مرستیال' : language === 'ur' ? 'سٹیزن اسسٹنٹ' : 'AI Assistant'}
            </button>
          </nav>

          {/* Zone 3: Actions & Language Switcher */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Audio Mute/Unmute */}
            <button
              onClick={onToggleMute}
              title={isAudioMuted ? 'غږیزه لوستنه بنده ده' : 'غږیزه لوستنه فعاله ده'}
              aria-label="Toggle voice guidance"
              className={`p-2 rounded-lg border text-xs flex items-center gap-1 transition-colors ${
                isAudioMuted
                  ? 'border-slate-200 text-slate-400 bg-slate-50'
                  : 'border-emerald-200 text-emerald-800 bg-emerald-50 hover:bg-emerald-100'
              }`}
            >
              {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span className="hidden sm:inline text-xs font-medium">
                {language === 'ps' ? 'غږ' : language === 'ur' ? 'آواز' : 'Audio'}
              </span>
            </button>

            {/* Emergency Speed Dial */}
            <button
              onClick={onOpenEmergency}
              className="px-2.5 sm:px-3 py-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 transition-colors text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{language === 'ps' ? 'بیړنۍ شمېرې' : language === 'ur' ? 'ہنگامی نمبرز' : 'Helpline'}</span>
            </button>

            {/* Language Switcher Segmented Control */}
            <div className="flex items-center p-0.5 bg-slate-100 rounded-lg border border-slate-200">
              <button
                onClick={() => onLanguageChange('ps')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                  language === 'ps'
                    ? 'bg-white text-emerald-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                پښتو
              </button>
              <button
                onClick={() => onLanguageChange('ur')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                  language === 'ur'
                    ? 'bg-white text-emerald-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                اردو
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                  language === 'en'
                    ? 'bg-white text-emerald-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="md:hidden flex items-center border-t border-slate-200 bg-slate-50 px-2 py-1.5">
        <button
          onClick={() => onTabChange('services')}
          className={`flex-1 py-1.5 text-xs font-semibold text-center rounded-md transition-colors ${
            activeTab === 'services'
              ? 'bg-white text-emerald-900 shadow-xs'
              : 'text-slate-600'
          }`}
        >
          {language === 'ps' ? 'لارښودونه' : language === 'ur' ? 'رہنمائی' : 'Guides'}
        </button>
        <button
          onClick={() => onTabChange('transit')}
          className={`flex-1 py-1.5 text-xs font-semibold text-center rounded-md transition-colors ${
            activeTab === 'transit'
              ? 'bg-white text-emerald-900 shadow-xs'
              : 'text-slate-600'
          }`}
        >
          {language === 'ps' ? 'ټرانسپورټ' : language === 'ur' ? 'ٹرانسپورٹ' : 'Transit'}
        </button>
        <button
          onClick={() => onTabChange('chat')}
          className={`flex-1 py-1.5 text-xs font-semibold text-center rounded-md transition-colors ${
            activeTab === 'chat'
              ? 'bg-white text-emerald-900 shadow-xs'
              : 'text-slate-600'
          }`}
        >
          {language === 'ps' ? 'مرستیال (AI)' : language === 'ur' ? 'اسسٹنٹ' : 'AI Chat'}
        </button>
      </div>
    </header>
  );
};
