import { AppFeature, Testimonial } from '@/types/astronomy';

export const APP_FEATURES: AppFeature[] = [
  {
    id: 'star-maps',
    title: 'Interactive Star Maps',
    description: 'Real-time sky maps showing constellations, planets, and celestial objects visible from your location.',
    icon: 'map',
    highlight: true
  },
  {
    id: 'ar-viewing',
    title: 'AR Sky Guide',
    description: 'Point your phone at the sky to identify stars, planets, and constellations in augmented reality.',
    icon: 'camera',
    highlight: true
  },
  {
    id: 'event-notifications',
    title: 'Celestial Events',
    description: 'Never miss meteor showers, eclipses, or planetary alignments with personalized notifications.',
    icon: 'bell'
  },
  {
    id: 'weather-integration',
    title: 'Weather Integration',
    description: 'Get real-time sky conditions and cloud coverage to plan your stargazing sessions.',
    icon: 'cloud'
  },
  {
    id: 'observation-log',
    title: 'Observation Journal',
    description: 'Keep track of your stargazing sessions, discoveries, and celestial photography.',
    icon: 'book'
  },
  {
    id: 'learning-guide',
    title: 'Learning Resources',
    description: 'Comprehensive guides for beginners and advanced tips for experienced astronomers.',
    icon: 'graduation-cap'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Amateur Astronomer',
    content: 'This app completely transformed my stargazing experience. The AR feature is incredible - I can finally identify constellations with confidence!',
    rating: 5
  },
  {
    id: '2',
    name: 'Dr. Michael Rodriguez',
    role: 'Physics Professor',
    content: 'I recommend this app to all my astronomy students. The real-time data and educational content are scientifically accurate and beautifully presented.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emma Thompson',
    role: 'Night Sky Photographer',
    content: 'The event notifications helped me capture some amazing shots of the recent meteor shower. Perfect for planning photography sessions!',
    rating: 5
  }
];

export const NAVIGATION_ITEMS = [
  { label: 'Features', href: '#features', type: 'scroll' },
  { label: 'Live Sky', href: '#live-data', type: 'scroll' },
  { label: 'Testimonials', href: '#testimonials', type: 'scroll' },
  { label: 'Download', href: '#download', type: 'scroll' }
];

export const FEATURE_PAGES = [
  { label: 'Star Maps', href: '/star-maps' },
  { label: 'AR Guide', href: '/ar-guide' },
  { label: 'Solar System', href: '/solar-system' },
  { label: 'Celestial Events', href: '/celestial-events' },
  { label: 'Weather', href: '/weather-integration' },
  { label: 'Journal', href: '/observation-journal' },
  { label: 'Learning', href: '/learning-resources' }
];

export const SOCIAL_LINKS = [
  { platform: 'Twitter', url: 'https://twitter.com/stargazeapp', icon: 'twitter' },
  { platform: 'Instagram', url: 'https://instagram.com/stargazeapp', icon: 'instagram' },
  { platform: 'YouTube', url: 'https://youtube.com/stargazeapp', icon: 'youtube' }
];

export const APP_STORE_LINKS = {
  ios: 'https://apps.apple.com/app/stargaze',
  android: 'https://play.google.com/store/apps/details?id=com.stargaze'
};