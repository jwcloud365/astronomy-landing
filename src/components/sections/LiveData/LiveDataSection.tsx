'use client';

import { motion } from 'framer-motion';
import { Eye, Moon, Calendar, MapPin, RefreshCw } from 'lucide-react';
import { useAstronomyData } from '@/hooks/useAstronomyData';

export default function LiveDataSection() {
  const { skyConditions, loading, error, refetch } = useAstronomyData();

  if (loading) {
    return (
      <section id="live-data" className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
            <p className="text-slate-400">Loading live sky data...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !skyConditions) {
    return (
      <section id="live-data" className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-400 mb-4">{error || 'Failed to load data'}</p>
            <button
              onClick={() => refetch()}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="live-data" className="py-20 bg-gradient-to-b from-slate-900 to-black relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Live Sky
            <span className="block bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
              Conditions
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Real-time data to help you plan the perfect stargazing session
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Conditions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <Eye className="h-5 w-5 mr-2 text-blue-400" />
                Sky Conditions
              </h3>
              <button
                onClick={() => refetch()}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Refresh data"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Visibility</span>
                <span className={`font-medium capitalize ${
                  skyConditions.visibility === 'excellent' ? 'text-green-400' :
                  skyConditions.visibility === 'good' ? 'text-yellow-400' :
                  skyConditions.visibility === 'fair' ? 'text-orange-400' : 'text-red-400'
                }`}>
                  {skyConditions.visibility}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Cloud Coverage</span>
                <span className="text-white font-medium">{skyConditions.cloudCoverage}%</span>
              </div>
              
              <div className="flex items-center text-sm text-slate-400">
                <MapPin className="h-4 w-4 mr-1" />
                {skyConditions.location}
              </div>
            </div>
          </motion.div>

          {/* Moon Phase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Moon className="h-5 w-5 mr-2 text-yellow-400" />
              Moon Phase
            </h3>
            
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">🌙</div>
              <div className="text-lg font-medium text-white capitalize">
                {skyConditions.moonPhase.phase.replace('_', ' ')}
              </div>
              <div className="text-sm text-slate-400">
                {skyConditions.moonPhase.illumination}% illuminated
              </div>
            </div>
            
            <div className="text-sm text-slate-400">
              <div>Next: {skyConditions.moonPhase.nextPhase}</div>
              <div>{skyConditions.moonPhase.nextPhaseDate}</div>
            </div>
          </motion.div>

          {/* Visible Planets */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Visible Planets
            </h3>
            
            <div className="space-y-3">
              {skyConditions.visiblePlanets.filter(planet => planet.isVisible).map((planet) => (
                <div key={planet.name} className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">{planet.name}</div>
                    <div className="text-xs text-slate-400">{planet.constellation}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-purple-400">{planet.bestViewingTime}</div>
                    <div className="text-xs text-slate-400">Mag {planet.magnitude}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-green-400" />
            Upcoming Celestial Events
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skyConditions.upcomingEvents.map((event) => (
              <div key={event.id} className="border border-slate-600/50 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-white">{event.name}</h4>
                  <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded">
                    {event.date}
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}