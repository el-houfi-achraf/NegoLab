'use client';

import { motion } from 'framer-motion';
import { QuizResult, NegotiatorStyle } from '@/types/quiz';

interface ResultScreenProps {
  result: QuizResult;
  onRestart: () => void;
}

export function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const { profile, scores } = result;

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  // Icônes pour chaque profil
  const profileIcons: Record<string, string> = {
    ASSERTIF: '💪',
    COOPERATIF: '🤝',
    ANALYTIQUE: '🧠',
    COMPETITIF: '🏆',
    ACCOMMODANT: '🕊️',
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-8 sm:py-12">
      {/* Confettis célébratoires */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '-10%', opacity: 0 }}
            animate={{
              y: '110%',
              opacity: [0, 1, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2 + Math.random(),
              delay: Math.random() * 0.5,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'linear',
            }}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              background: ['#a855f7', '#ec4899', '#06b6d4', '#f59e0b'][
                Math.floor(Math.random() * 4)
              ],
              willChange: 'transform',
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative w-full max-w-3xl"
      >
        {/* Badge de Profil Principal */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
          className="mb-6"
        >
          <div
            className={`relative bg-gradient-to-br ${profile.color} rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden`}
          >
            {/* Pattern animé */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-full h-full"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                  willChange: 'background-position',
                }}
              />
            </div>

            <div className="relative z-10 text-center">
              {/* Badge Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.4 }}
                className="inline-block mb-6"
              >
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-white rounded-full blur-2xl"
                  />
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/30 backdrop-blur-xl border-4 border-white/50 flex items-center justify-center shadow-2xl">
                    <span className="text-6xl sm:text-7xl drop-shadow-lg">
                      {profileIcons[profile.id]}
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-lg leading-tight"
              >
                {profile.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-base sm:text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed"
              >
                {profile.description}
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-6 h-1 w-32 mx-auto bg-white/40 rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Carte blanche avec détails */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 mb-6"
        >
          {/* Distribution des scores */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Distribution</h3>
              <div className="px-3 py-1 bg-purple-100 rounded-full">
                <span className="text-xs sm:text-sm font-bold text-purple-600">100% analysé</span>
              </div>
            </div>

            <div className="space-y-4">
              {(Object.entries(scores) as [NegotiatorStyle, number][])
                .sort(([, a], [, b]) => b - a)
                .map(([style, score], index) => {
                  const percentage = Math.round((score / totalScore) * 100);
                  const isTopStyle = style === profile.id;

                  return (
                    <motion.div
                      key={style}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-xl sm:text-2xl">{profileIcons[style]}</span>
                          <span
                            className={`font-semibold text-sm sm:text-base ${
                              isTopStyle ? 'text-gray-900' : 'text-gray-700'
                            }`}
                          >
                            {style}
                          </span>
                          {isTopStyle && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="px-2 py-0.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full"
                            >
                              TOP
                            </motion.span>
                          )}
                        </div>
                        <span
                          className={`font-bold text-sm sm:text-lg ${
                            isTopStyle ? 'text-purple-600' : 'text-gray-600'
                          }`}
                        >
                          {percentage}%
                        </span>
                      </div>

                      <div className="h-2.5 sm:h-3 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ delay: 1.2 + index * 0.1, duration: 1, ease: 'easeOut' }}
                          className={`h-full rounded-full ${
                            isTopStyle ? `bg-gradient-to-r ${profile.color}` : 'bg-gray-300'
                          }`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </div>

          {/* Points forts & amélioration */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border-2 border-green-200/50"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-xl">
                  ✨
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800">Points Forts</h3>
              </div>

              <ul className="space-y-2">
                {profile.strengths.map((strength, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    className="flex items-start gap-2 text-sm sm:text-base text-gray-700"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed">{strength}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-5 border-2 border-orange-200/50"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-xl">
                  💡
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800">Amélioration</h3>
              </div>

              <ul className="space-y-2">
                {profile.weaknesses.map((weakness, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 + index * 0.1 }}
                    className="flex items-start gap-2 text-sm sm:text-base text-gray-700"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                      !
                    </span>
                    <span className="leading-relaxed">{weakness}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Boutons d'action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onRestart}
              className="flex-1 relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white px-6 py-4 rounded-2xl font-bold text-base sm:text-lg shadow-xl overflow-hidden"
              style={{ backgroundSize: '200% auto' }}
            >
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
              <span className="relative z-10 flex items-center justify-center gap-2">
                🔄 Refaire le Test
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Mon Profil NegoLab',
                    text: `Je suis un ${profile.name} ! Découvrez votre style de négociation.`,
                  });
                }
              }}
              className="px-6 py-4 bg-white border-2 border-purple-600 text-purple-600 rounded-2xl font-bold text-base sm:text-lg hover:bg-purple-50 transition-colors"
            >
              <span className="flex items-center justify-center gap-2">📤 Partager</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
