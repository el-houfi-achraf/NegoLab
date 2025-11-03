'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface WelcomeScreenProps {
  onStart: () => void;
}

interface Particle {
  id: number;
  left: number;
  duration: number;
  delay: number;
  xOffset: number;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Générer les particules côté client uniquement
  useEffect(() => {
    const generatedParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 5,
      xOffset: Math.random() * 100 - 50,
    }));
    setParticles(generatedParticles);
  }, []);

  // Animation variants pour les éléments décoratifs
  const floatingVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Particles - uniquement côté client */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0, 1, 0],
            y: [100, -100],
            x: [0, particle.xOffset],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm"
          style={{
            left: `${particle.left}%`,
            bottom: 0,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative max-w-4xl w-full"
      >
        {/* Glassmorphism Card */}
        <div className="relative backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl border border-white/20 p-12 overflow-hidden">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-10" />

          <div className="relative z-10 text-center">
            {/* Logo with 3D Effect */}
            <motion.div
              initial={{ scale: 0.8, rotateY: -30 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{
                duration: 1,
                ease: 'easeOut',
              }}
              className="mb-8"
            >
              <motion.h1
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="text-7xl md:text-8xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent mb-4 tracking-tight"
                style={{ backgroundSize: '200% auto' }}
              >
                NegoLab
              </motion.h1>

              {/* Subtitle with shimmer effect */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-2 text-sm font-semibold text-purple-600 uppercase tracking-widest"
              >
                <span className="inline-block w-8 h-px bg-gradient-to-r from-transparent to-purple-600" />
                <span>Maîtrisez l&apos;art de la négociation</span>
                <span className="inline-block w-8 h-px bg-gradient-to-r from-purple-600 to-transparent" />
              </motion.div>
            </motion.div>

            {/* Description with stagger animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-12"
            >
              <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed font-medium">
                Découvrez votre{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold">
                  style unique
                </span>{' '}
                de négociation
              </p>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Une évaluation scientifique en 10 questions pour révéler vos forces naturelles et
                débloquer votre potentiel de négociateur d&apos;exception.
              </p>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {[
                { icon: '🎯', text: '10 Questions' },
                { icon: '⚡', text: '5 Minutes' },
                { icon: '🏆', text: 'Résultats Détaillés' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/50 rounded-full text-sm font-semibold text-gray-700 shadow-sm"
                >
                  <span className="mr-2">{feature.icon}</span>
                  {feature.text}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button with advanced effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="relative inline-block"
            >
              {/* Glowing effect */}
              <motion.div
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-60"
              />

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={onStart}
                className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white px-12 py-5 rounded-full text-lg font-bold shadow-2xl transition-all duration-300 overflow-hidden group"
                style={{ backgroundSize: '200% auto' }}
              >
                {/* Button shimmer effect */}
                <motion.div
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />

                <span className="relative z-10 flex items-center gap-3">
                  Commencer l&apos;Évaluation
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-10 flex flex-col items-center gap-3"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white"
                    />
                  ))}
                </div>
                <span className="font-medium">Rejoint par 10,000+ négociateurs</span>
              </div>

              <div className="flex items-center gap-1 text-yellow-500">
                {'★★★★★'.split('').map((star, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    className="text-lg"
                  >
                    {star}
                  </motion.span>
                ))}
                <span className="ml-2 text-sm text-gray-600 font-medium">
                  4.9/5 - Excellente précision
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
