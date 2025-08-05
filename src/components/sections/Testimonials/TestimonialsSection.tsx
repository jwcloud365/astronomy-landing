'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/utils/constants';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by
            <span className="block bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
              Stargazers Worldwide
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Join thousands of astronomy enthusiasts who have transformed their stargazing experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-400/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-purple-400 mr-3" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Join Our Community
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Connect with fellow astronomers, share your discoveries, and learn from experts in our vibrant community.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">500K+</div>
                <div className="text-sm text-slate-400">Community Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">1M+</div>
                <div className="text-sm text-slate-400">Photos Shared</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400 mb-1">50K+</div>
                <div className="text-sm text-slate-400">Events Tracked</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">150+</div>
                <div className="text-sm text-slate-400">Countries</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}