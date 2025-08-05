'use client';

import { motion } from 'framer-motion';
import { Download, Apple, PlayCircle, Star, Shield, Zap } from 'lucide-react';
import { APP_STORE_LINKS } from '@/utils/constants';

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-gradient-to-b from-black to-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Start Your
            <span className="block bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Cosmic Journey
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Download StarGaze now and unlock the mysteries of the universe. 
            Available free on all platforms with premium features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* App Features & Download Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Free to Download</h3>
                  <p className="text-slate-400">Get started with our comprehensive free version. No credit card required.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Privacy Focused</h3>
                  <p className="text-slate-400">Your location data stays on your device. We prioritize your privacy and security.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Real-Time Updates</h3>
                  <p className="text-slate-400">Live sky conditions, weather updates, and celestial event notifications.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <motion.a
                href={APP_STORE_LINKS.ios}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-black text-white rounded-xl p-4 border border-slate-600 hover:border-slate-500 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <Apple className="h-10 w-10" />
                  <div className="flex-1">
                    <div className="text-sm text-slate-400">Download on the</div>
                    <div className="text-xl font-semibold">App Store</div>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href={APP_STORE_LINKS.android}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-black text-white rounded-xl p-4 border border-slate-600 hover:border-slate-500 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <PlayCircle className="h-10 w-10" />
                  <div className="flex-1">
                    <div className="text-sm text-slate-400">Get it on</div>
                    <div className="text-xl font-semibold">Google Play</div>
                  </div>
                </div>
              </motion.a>
            </div>

            <div className="mt-8 text-center">
              <div className="flex items-center justify-center space-x-6 text-sm text-slate-400">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9 Rating</span>
                </div>
                <div>500K+ Downloads</div>
                <div>Free Forever</div>
              </div>
            </div>
          </motion.div>

          {/* Device Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-96 bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-2 shadow-2xl">
              <div className="w-full h-full bg-black rounded-2xl overflow-hidden relative">
                {/* Status Bar */}
                <div className="h-6 bg-slate-900 flex items-center justify-between px-4">
                  <div className="text-white text-xs">9:41</div>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>
                
                {/* App Content */}
                <div className="flex-1 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 p-4">
                  <div className="text-center mb-4">
                    <div className="text-white font-bold text-lg">StarGaze</div>
                    <div className="text-slate-400 text-sm">Tonight&apos;s Sky</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <div className="text-white text-sm">Jupiter</div>
                        <div className="text-purple-400 text-xs">Visible</div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <div className="text-white text-sm">Mars</div>
                        <div className="text-yellow-400 text-xs">Rising</div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-white text-sm mb-1">Moon Phase</div>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl">🌙</div>
                        <div className="text-slate-400 text-xs">Waxing Gibbous</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl -z-10"></div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Explore the Stars?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join millions of stargazers worldwide and discover the wonders of the night sky with our award-winning app.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
            >
              <Download className="h-5 w-5 inline mr-2" />
              Download Now - It&apos;s Free!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}