'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { QuizScreen } from '@/components/QuizScreen';
import { ResultScreen } from '@/components/ResultScreen';
import { questions } from '@/data/questions';
import { profiles } from '@/data/profiles';
import { Answer, QuizResult } from '@/types/quiz';
import { calculateQuizResult } from '@/lib/quizLogic';

type Screen = 'welcome' | 'quiz' | 'calculating' | 'result';

// Composant d'écran de calcul
function CalculatingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* Cercles animés */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-32 h-32 rounded-full border-4 border-purple-200 border-t-purple-600"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 w-32 h-32 rounded-full border-4 border-pink-200 border-b-pink-600"
            />

            {/* Icône centrale */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-5xl">🧠</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl font-black text-gray-800 mb-4"
        >
          Analyse en cours...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-600 mb-8"
        >
          Nous analysons vos réponses pour révéler votre profil unique
        </motion.p>

        {/* Points de chargement */}
        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleStartQuiz = () => {
    setCurrentScreen('quiz');
    setAnswers([]);
    setResult(null);
  };

  const handleQuizComplete = (quizAnswers: Answer[]) => {
    setAnswers(quizAnswers);
    setCurrentScreen('calculating');

    // Simulation du temps de calcul pour créer du suspense
    setTimeout(() => {
      const quizResult = calculateQuizResult(quizAnswers, profiles);
      setResult(quizResult);
      setCurrentScreen('result');
    }, 2500); // 2.5 secondes de calcul
  };

  const handleRestart = () => {
    setCurrentScreen('welcome');
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <AnimatePresence mode="wait">
        {currentScreen === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <WelcomeScreen onStart={handleStartQuiz} />
          </motion.div>
        )}

        {currentScreen === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <QuizScreen questions={questions} onComplete={handleQuizComplete} />
          </motion.div>
        )}

        {currentScreen === 'calculating' && (
          <motion.div
            key="calculating"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <CalculatingScreen />
          </motion.div>
        )}

        {currentScreen === 'result' && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <ResultScreen result={result} onRestart={handleRestart} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
