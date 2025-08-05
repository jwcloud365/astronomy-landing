'use client';

import { motion } from 'framer-motion';
import { 
  Map, 
  Camera, 
  Bell, 
  Cloud, 
  Book, 
  GraduationCap,
  LucideIcon
} from 'lucide-react';
import { AppFeature } from '@/types/astronomy';

const iconMap: Record<string, LucideIcon> = {
  map: Map,
  camera: Camera,
  bell: Bell,
  cloud: Cloud,
  book: Book,
  'graduation-cap': GraduationCap,
};

interface FeatureCardProps {
  feature: AppFeature;
  index: number;
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = iconMap[feature.icon] || Map;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className={`group relative p-6 rounded-2xl transition-all duration-300 ${
        feature.highlight
          ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-400/30'
          : 'bg-slate-800/50 border border-slate-700/50'
      } hover:border-purple-400/50 backdrop-blur-sm`}
    >
      {feature.highlight && (
        <div className="absolute -top-3 -right-3">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full">
            Popular
          </div>
        </div>
      )}
      
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
        feature.highlight
          ? 'bg-gradient-to-br from-purple-500 to-blue-500'
          : 'bg-slate-700 group-hover:bg-purple-600'
      } transition-colors duration-300`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
        {feature.title}
      </h3>
      
      <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
        {feature.description}
      </p>
      
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 rounded-2xl transition-all duration-300" />
    </motion.div>
  );
}