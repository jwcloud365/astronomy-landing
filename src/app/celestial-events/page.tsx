'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { motion } from 'framer-motion';
import { Bell, Calendar, Star, Moon } from 'lucide-react';

export default function CelestialEventsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-yellow-900/20 to-slate-900 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-900/5 to-transparent" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500/20 rounded-full mb-8">
                <Bell className="w-10 h-10 text-yellow-400" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Celestial
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Events
                </span>
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Never miss meteor showers, eclipses, or planetary alignments with personalized notifications.
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
                Never Miss a Cosmic Moment
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Stay connected to the universe's most spectacular shows with our intelligent event tracking.
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
                <Calendar className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Event Calendar</h3>
                <p className="text-slate-400">
                  Comprehensive calendar of upcoming celestial events including meteor showers, eclipses, and planet conjunctions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <Star className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Smart Notifications</h3>
                <p className="text-slate-400">
                  Personalized alerts based on your location, preferences, and local weather conditions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <Moon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Event Details</h3>
                <p className="text-slate-400">
                  Detailed information about each event including best viewing times, locations, and photography tips.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Event Types Section */}
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
                Track Every Type of Event
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                From shooting stars to solar eclipses, we cover all the celestial spectacles.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-2xl p-8 border border-yellow-700/30"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Meteor Showers</h3>
                <ul className="space-y-3 text-slate-400">
                  <li>• Perseids, Geminids, Leonids, and more</li>
                  <li>• Peak viewing times and rates</li>
                  <li>• Best observation locations</li>
                  <li>• Weather-based visibility predictions</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-700/30"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Eclipses & Transits</h3>
                <ul className="space-y-3 text-slate-400">
                  <li>• Solar and lunar eclipses</li>
                  <li>• Planet transits across the Sun</li>
                  <li>• Visibility maps and timings</li>
                  <li>• Safety information for viewing</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-blue-700/30"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Planetary Events</h3>
                <ul className="space-y-3 text-slate-400">
                  <li>• Planet conjunctions and oppositions</li>
                  <li>• Mars close approaches</li>
                  <li>• Venus at greatest elongation</li>
                  <li>• Saturn ring tilt variations</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-900/20 to-teal-900/20 rounded-2xl p-8 border border-green-700/30"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Special Phenomena</h3>
                <ul className="space-y-3 text-slate-400">
                  <li>• Comet appearances and peak brightness</li>
                  <li>• International Space Station passes</li>
                  <li>• Satellite flares and formations</li>
                  <li>• Aurora activity predictions</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-900/20 to-orange-900/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Don't Miss the Next Show
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Join millions of stargazers who rely on StarGaze for celestial event notifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#download" 
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300"
                >
                  Get Event Alerts
                </a>
                <a 
                  href="#features" 
                  className="border border-slate-600 text-white px-8 py-4 rounded-full font-semibold hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
                >
                  View Calendar
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