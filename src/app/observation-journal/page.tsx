'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { motion } from 'framer-motion';
import { Book, Camera, PenTool, Search } from 'lucide-react';

export default function ObservationJournalPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/20 rounded-full mb-8">
                <Book className="w-10 h-10 text-emerald-400" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Observation
                <span className="block bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  Journal
                </span>
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Keep track of your stargazing sessions, discoveries, and celestial photography.
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
                Document Your Cosmic Journey
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Create a comprehensive record of your astronomical adventures and discoveries.
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
                <PenTool className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Session Logs</h3>
                <p className="text-slate-400">
                  Record detailed observations including date, time, location, weather conditions, and equipment used.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <Camera className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Photo Integration</h3>
                <p className="text-slate-400">
                  Attach photos to your observations with automatic metadata extraction and organization.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <Search className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Smart Search</h3>
                <p className="text-slate-400">
                  Quickly find past observations by object, date, location, or any custom tags you've added.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Journal Features Section */}
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
                Everything You Need to Log
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Comprehensive tools for both casual stargazers and serious astronomers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-2xl p-6 border border-emerald-700/30">
                    <h3 className="text-2xl font-semibold text-white mb-4">Observation Details</h3>
                    <ul className="space-y-2 text-emerald-200">
                      <li>• Object type and catalog numbers</li>
                      <li>• Viewing conditions and transparency</li>
                      <li>• Equipment and magnification used</li>
                      <li>• Personal notes and sketches</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 rounded-2xl p-6 border border-teal-700/30">
                    <h3 className="text-2xl font-semibold text-white mb-4">Session Metadata</h3>
                    <ul className="space-y-2 text-teal-200">
                      <li>• GPS coordinates and elevation</li>
                      <li>• Light pollution measurements</li>
                      <li>• Temperature and humidity</li>
                      <li>• Moon phase and visibility</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <h3 className="text-3xl font-semibold text-white mb-6">Sample Journal Entry</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-emerald-400 pl-4">
                      <div className="text-sm text-slate-400 mb-1">March 15, 2024 • 10:30 PM</div>
                      <div className="text-white font-semibold mb-2">M42 - Orion Nebula</div>
                      <div className="text-slate-300 text-sm mb-3">
                        "Incredible detail visible tonight with the 8" SCT at 150x magnification. 
                        The trapezium stars were clearly defined, and I could make out the 
                        bird-like shape in the nebulosity..."
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-emerald-600/20 text-emerald-300 px-2 py-1 rounded text-xs">Nebula</span>
                        <span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">Clear Sky</span>
                        <span className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs">Great Seeing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Progress Tracking Section */}
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
                Track Your Progress
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Watch your astronomical journey unfold with detailed statistics and achievements.
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
                <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-2xl p-8 border border-emerald-700/30">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">127</div>
                  <div className="text-white font-semibold mb-2">Objects Observed</div>
                  <div className="text-emerald-200 text-sm">Across 15 categories</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 rounded-2xl p-8 border border-teal-700/30">
                  <div className="text-4xl font-bold text-teal-400 mb-2">43</div>
                  <div className="text-white font-semibold mb-2">Observing Sessions</div>
                  <div className="text-teal-200 text-sm">89.5 hours total</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-green-900/30 to-lime-900/30 rounded-2xl p-8 border border-green-700/30">
                  <div className="text-4xl font-bold text-green-400 mb-2">8</div>
                  <div className="text-white font-semibold mb-2">Locations Visited</div>
                  <div className="text-green-200 text-sm">Dark sky sites explored</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-900/20 to-green-900/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Start Your Astronomical Journal
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Begin documenting your cosmic discoveries and build a treasure trove of memories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#download" 
                  className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-green-600 transition-all duration-300"
                >
                  Start Journaling
                </a>
                <a 
                  href="#features" 
                  className="border border-slate-600 text-white px-8 py-4 rounded-full font-semibold hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
                >
                  Explore Features
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