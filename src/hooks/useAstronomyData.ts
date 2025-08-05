'use client';

import { useState, useEffect } from 'react';
import { SkyConditions } from '@/types/astronomy';

export function useAstronomyData() {
  const [skyConditions, setSkyConditions] = useState<SkyConditions | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAstronomyData = async () => {
      try {
        setLoading(true);
        
        // Mock data for demo purposes
        // In a real app, this would fetch from astronomy APIs like:
        // - NASA API, OpenWeatherMap, or custom astronomy services
        const mockData: SkyConditions = {
          location: 'Your Location',
          cloudCoverage: Math.floor(Math.random() * 100),
          visibility: (['excellent', 'good', 'fair', 'poor'] as const)[Math.floor(Math.random() * 4)],
          moonPhase: {
            phase: (['new', 'waxing_crescent', 'first_quarter', 'waxing_gibbous', 'full', 'waning_gibbous', 'last_quarter', 'waning_crescent'] as const)[Math.floor(Math.random() * 8)],
            illumination: Math.floor(Math.random() * 100),
            nextPhase: 'Full Moon',
            nextPhaseDate: '2024-12-15'
          },
          visiblePlanets: [
            {
              name: 'Jupiter',
              isVisible: true,
              constellation: 'Gemini',
              magnitude: -2.1,
              bestViewingTime: '9:30 PM'
            },
            {
              name: 'Mars',
              isVisible: true,
              constellation: 'Cancer',
              magnitude: 0.8,
              bestViewingTime: '11:15 PM'
            },
            {
              name: 'Venus',
              isVisible: false,
              constellation: 'Virgo',
              magnitude: -4.2,
              bestViewingTime: '6:00 AM'
            }
          ],
          upcomingEvents: [
            {
              id: '1',
              name: 'Geminids Meteor Shower',
              type: 'meteor_shower',
              date: '2024-12-13',
              visibility: 'global',
              description: 'One of the best meteor showers of the year, with up to 120 meteors per hour at peak.'
            },
            {
              id: '2',
              name: 'Jupiter-Moon Conjunction',
              type: 'conjunction',
              date: '2024-12-20',
              visibility: 'global',
              description: 'Jupiter will appear very close to the Moon in the evening sky.'
            }
          ]
        };

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setSkyConditions(mockData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch astronomy data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchAstronomyData();
  }, []);

  const refetch = () => {
    fetchAstronomyData();
  };

  return { skyConditions, loading, error, refetch };
}