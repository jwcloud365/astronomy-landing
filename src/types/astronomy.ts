export interface CelestialEvent {
  id: string;
  name: string;
  type: 'meteor_shower' | 'lunar_eclipse' | 'solar_eclipse' | 'planetary_alignment' | 'conjunction';
  date: string;
  visibility: 'global' | 'northern_hemisphere' | 'southern_hemisphere';
  description: string;
}

export interface MoonPhase {
  phase: 'new' | 'waxing_crescent' | 'first_quarter' | 'waxing_gibbous' | 'full' | 'waning_gibbous' | 'last_quarter' | 'waning_crescent';
  illumination: number;
  nextPhase: string;
  nextPhaseDate: string;
}

export interface Planet {
  name: string;
  isVisible: boolean;
  constellation: string;
  magnitude: number;
  bestViewingTime: string;
}

export interface SkyConditions {
  location: string;
  cloudCoverage: number;
  visibility: 'excellent' | 'good' | 'fair' | 'poor';
  moonPhase: MoonPhase;
  visiblePlanets: Planet[];
  upcomingEvents: CelestialEvent[];
}

export interface AppFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}