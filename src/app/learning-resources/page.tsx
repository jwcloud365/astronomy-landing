'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Video, Users } from 'lucide-react';

export default function LearningResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-indigo-900/20 to-slate-900 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-500/20 rounded-full mb-8">
                <GraduationCap className="w-10 h-10 text-indigo-400" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Learning
                <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Resources
                </span>
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Comprehensive guides for beginners and advanced tips for experienced astronomers.
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
                Master the Art of Stargazing
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                From your first telescope to advanced astrophotography, we guide your astronomical journey.
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
                <BookOpen className="w-12 h-12 text-indigo-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Interactive Guides</h3>
                <p className="text-slate-400">
                  Step-by-step tutorials with interactive elements, animations, and real-time sky examples.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <Video className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Video Tutorials</h3>
                <p className="text-slate-400">
                  High-quality video content covering everything from basic concepts to advanced techniques.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <Users className="w-12 h-12 text-pink-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Expert Community</h3>
                <p className="text-slate-400">
                  Connect with professional astronomers and experienced amateurs for personalized guidance.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Learning Paths Section */}
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
                Personalized Learning Paths
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Choose your journey based on your interests and experience level.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl p-8 border border-indigo-700/30"
              >
                <h3 className="text-3xl font-semibold text-white mb-6">Beginner's Journey</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-1">1</div>
                    <div>
                      <div className="text-white font-semibold">Getting Started</div>
                      <div className="text-indigo-200 text-sm">Understanding the night sky and basic concepts</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-1">2</div>
                    <div>
                      <div className="text-white font-semibold">Your First Telescope</div>
                      <div className="text-indigo-200 text-sm">Choosing and using your first instrument</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-1">3</div>
                    <div>
                      <div className="text-white font-semibold">Finding Objects</div>
                      <div className="text-indigo-200 text-sm">Navigation techniques and star-hopping</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-1">4</div>
                    <div>
                      <div className="text-white font-semibold">Observing Techniques</div>
                      <div className="text-indigo-200 text-sm">Making the most of your viewing sessions</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-700/30"
              >
                <h3 className="text-3xl font-semibold text-white mb-6">Advanced Astronomy</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-1">1</div>
                    <div>
                      <div className="text-white font-semibold">Astrophotography</div>
                      <div className="text-purple-200 text-sm">Camera setup, tracking, and processing techniques</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-1">2</div>
                    <div>
                      <div className="text-white font-semibold">Deep Sky Objects</div>
                      <div className="text-purple-200 text-sm">Nebulae, galaxies, and star clusters in detail</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-1">3</div>
                    <div>
                      <div className="text-white font-semibold">Telescope Modifications</div>
                      <div className="text-purple-200 text-sm">Upgrades, collimation, and maintenance</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-1">4</div>
                    <div>
                      <div className="text-white font-semibold">Citizen Science</div>
                      <div className="text-purple-200 text-sm">Contributing to astronomical research</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Topics Section */}
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
                Comprehensive Coverage
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Explore every aspect of astronomy with our extensive library of resources.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Solar System", topics: ["Planets", "Moons", "Asteroids", "Comets"], color: "from-yellow-600 to-orange-600" },
                { title: "Deep Sky", topics: ["Nebulae", "Galaxies", "Star Clusters", "Quasars"], color: "from-purple-600 to-pink-600" },
                { title: "Equipment", topics: ["Telescopes", "Eyepieces", "Filters", "Mounts"], color: "from-blue-600 to-cyan-600" },
                { title: "Photography", topics: ["Camera Setup", "Stacking", "Processing", "Planning"], color: "from-green-600 to-teal-600" }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <div className="text-white font-bold text-lg">{category.title.charAt(0)}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.topics.map((topic) => (
                      <li key={topic} className="text-slate-400 text-sm">• {topic}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
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
                Learn from the Best
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Our content is created by professional astronomers, experienced educators, and passionate amateurs.
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
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Expert Authors</h3>
                <p className="text-slate-400">
                  Content reviewed and approved by professional astronomers and planetarium directors.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Active Community</h3>
                <p className="text-slate-400">
                  Join discussions, ask questions, and share your discoveries with fellow astronomers.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Always Updated</h3>
                <p className="text-slate-400">
                  Fresh content added regularly, covering the latest discoveries and techniques.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Begin Your Learning Journey
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Whether you're taking your first look at the stars or pushing the boundaries of amateur astronomy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#download" 
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                >
                  Start Learning
                </a>
                <a 
                  href="#features" 
                  className="border border-slate-600 text-white px-8 py-4 rounded-full font-semibold hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
                >
                  Browse Guides
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