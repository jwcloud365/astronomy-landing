'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { motion } from 'framer-motion';
import { Cloud, CloudRain, Sun, Wind } from 'lucide-react';

export default function WeatherIntegrationPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-cyan-900/20 to-slate-900 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-500/20 rounded-full mb-8">
                <Cloud className="w-10 h-10 text-cyan-400" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Weather
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Integration
                </span>
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Get real-time sky conditions and cloud coverage to plan your stargazing sessions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect Conditions, Perfect Views
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Advanced weather analysis ensures you never waste a clear night.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <CloudRain className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Cloud Coverage</h3>
                <p className="text-slate-400">
                  Real-time cloud density maps and forecasts to find the clearest skies in your area.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <Sun className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Seeing Conditions</h3>
                <p className="text-slate-400">
                  Atmospheric stability measurements to predict the best times for detailed observations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <Wind className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Transparency Index</h3>
                <p className="text-slate-400">
                  Advanced algorithms calculate air clarity for optimal stargazing and astrophotography.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Weather Data Section */}
        <section className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Weather Data
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Everything you need to know about sky conditions at a glance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <h3 className="text-3xl font-semibold text-white mb-6">Real-Time Metrics</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Cloud Coverage</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-slate-700 rounded-full">
                          <div className="w-3/4 h-2 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full"></div>
                        </div>
                        <span className="text-white font-semibold">25%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Transparency</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-slate-700 rounded-full">
                          <div className="w-5/6 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
                        </div>
                        <span className="text-white font-semibold">Excellent</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Seeing</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-slate-700 rounded-full">
                          <div className="w-3/5 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                        </div>
                        <span className="text-white font-semibold">Good</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Humidity</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-slate-700 rounded-full">
                          <div className="w-1/2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                        </div>
                        <span className="text-white font-semibold">45%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-6 border border-green-700/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <h4 className="text-xl font-semibold text-white">Tonight's Forecast</h4>
                    </div>
                    <p className="text-green-200">Excellent stargazing conditions expected after 10 PM</p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl p-6 border border-blue-700/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <h4 className="text-xl font-semibold text-white">7-Day Outlook</h4>
                    </div>
                    <p className="text-blue-200">Clear skies predicted for Thursday and Saturday nights</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-700/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <h4 className="text-xl font-semibold text-white">Best Locations</h4>
                    </div>
                    <p className="text-purple-200">Dark Sky Park 15 miles north shows optimal conditions</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Planning Tools Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Smart Planning Tools
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                AI-powered recommendations for the perfect stargazing experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Auto Alerts</h3>
                <p className="text-slate-400">
                  Receive notifications when conditions become ideal for your preferred type of observations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sun className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Location Scout</h3>
                <p className="text-slate-400">
                  Find the best nearby locations with optimal weather conditions and minimal light pollution.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wind className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Session Planner</h3>
                <p className="text-slate-400">
                  Plan multi-hour sessions with detailed weather progression and optimal timing recommendations.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Plan with Confidence
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Never let cloudy skies surprise you again. Get weather-integrated stargazing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#download" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  Get Weather Alerts
                </a>
                <a 
                  href="#features" 
                  className="border border-slate-600 text-white px-8 py-4 rounded-full font-semibold hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
                >
                  See All Features
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}