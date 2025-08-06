'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { motion } from 'framer-motion';
import { Sun, Moon, Globe2, Orbit, Zap, Telescope } from 'lucide-react';

export default function SolarSystemPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-orange-900/20 to-slate-900 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/5 to-transparent" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/20 rounded-full mb-8">
                <Sun className="w-10 h-10 text-orange-400" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Solar
                <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  System
                </span>
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Explore our cosmic neighborhood with detailed information about planets, moons, and celestial bodies in our solar system.
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
                Discover Our Cosmic Home
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Learn about the fascinating worlds that orbit our Sun, from rocky terrestrial planets to gas giants and icy moons.
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
                <Globe2 className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Planetary Profiles</h3>
                <p className="text-slate-400">
                  Detailed information about all eight planets, including size, composition, atmosphere, and unique characteristics.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <Moon className="w-12 h-12 text-gray-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Moons & Satellites</h3>
                <p className="text-slate-400">
                  Explore the diverse collection of natural satellites, from our own Moon to Jupiter's Europa and Saturn's Titan.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <Orbit className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Orbital Mechanics</h3>
                <p className="text-slate-400">
                  Understand how planets move in their elliptical orbits, including orbital periods, distances, and gravitational influences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <Sun className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Our Sun</h3>
                <p className="text-slate-400">
                  Learn about the star at the center of our solar system, its structure, nuclear fusion, and influence on all planetary bodies.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <Zap className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Space Weather</h3>
                <p className="text-slate-400">
                  Track solar flares, coronal mass ejections, and other space weather phenomena that affect our solar system.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <Telescope className="w-12 h-12 text-indigo-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Exploration Missions</h3>
                <p className="text-slate-400">
                  Follow current and past space missions exploring our solar system, from rovers on Mars to probes visiting distant worlds.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solar System Facts Section */}
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
                Amazing Solar System Facts
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Discover fascinating facts about our cosmic neighborhood that will amaze and inspire you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">The Sun's Power</h3>
                <p className="text-slate-300">
                  The Sun converts 600 million tons of hydrogen into helium every second, releasing energy equivalent to 100 billion nuclear bombs per second.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">Jupiter's Great Red Spot</h3>
                <p className="text-slate-300">
                  This massive storm on Jupiter has been raging for at least 400 years and is so large that Earth could fit inside it twice.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-8 border border-red-500/20"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">Martian Days</h3>
                <p className="text-slate-300">
                  A day on Mars is about 24 hours and 37 minutes, remarkably similar to Earth, but a Martian year lasts 687 Earth days.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 border border-yellow-500/20"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">Saturn's Rings</h3>
                <p className="text-slate-300">
                  Saturn's rings are made of ice and rock particles ranging from tiny grains to chunks as large as houses, yet they're only about 30 feet thick.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-900/20 to-yellow-900/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Start Your Solar System Journey
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Download StarGaze and explore the wonders of our solar system with detailed planetary information and real-time data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#download" 
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300"
                >
                  Download Now
                </a>
                <a 
                  href="#features" 
                  className="border border-slate-600 text-white px-8 py-4 rounded-full font-semibold hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
                >
                  View All Features
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