export type Language = 'ps' | 'ur' | 'en';

export interface LocalizedString {
  ps: string;
  ur: string;
  en: string;
}

export interface DocumentItem {
  id: string;
  name: LocalizedString;
  description?: LocalizedString;
  mandatory: boolean;
}

export interface ProceduralStep {
  stepNumber: number;
  title: LocalizedString;
  instruction: LocalizedString;
  landmarkHint?: LocalizedString;
  warning?: LocalizedString;
}

export interface ServiceGuide {
  id: string;
  category: 'identity' | 'transit' | 'legal' | 'health' | 'education' | 'certificates' | 'lodging' | 'food' | 'shopping';
  icon: string;
  title: LocalizedString;
  shortDesc: LocalizedString;
  officeName: LocalizedString;
  locations: {
    name: LocalizedString;
    nearestBrtStation: string;
    brtStationNumber: number;
    landmarkDescription: LocalizedString;
    mapQuery: string;
  }[];
  workingHours: LocalizedString;
  feeInfo: LocalizedString;
  processingTime: LocalizedString;
  documents: DocumentItem[];
  steps: ProceduralStep[];
  audioScript: LocalizedString;
  helpline?: string;
  criticalTips: LocalizedString[];
}

export interface BRTStation {
  number: number;
  name: LocalizedString;
  interchange?: boolean;
  landmarks: LocalizedString;
  connectedServices: string[];
}

export interface RegionalAdda {
  id: string;
  name: LocalizedString;
  regionsServed: LocalizedString;
  nearestBrtStation: number;
  feederRoute?: string;
  directions: LocalizedString;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  audioUrl?: string;
  suggestedActions?: {
    label: LocalizedString;
    serviceId?: string;
    query?: string;
  }[];
}
