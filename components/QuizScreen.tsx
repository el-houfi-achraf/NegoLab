'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question, Answer } from '@/types/quiz';

interface QuizScreenProps {
  questions: Question[];
  onComplete: (answers: Answer[]) => void;
}

export function QuizScreen({ questions, onComplete }: QuizScreenProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  // Auto-avance après sélection avec animation fluide
  const handleOptionSelect = (optionIndex: number) => {
    if (isTransitioning) return;

    setSelectedOption(optionIndex);
    setIsTransitioning(true);

    const selectedOptionData = currentQuestion.options[optionIndex];
    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      selectedStyle: selectedOptionData.style,
      points: selectedOptionData.points,
    };

    const newAnswers = [...answers, newAnswer];

    // Délai pour voir l'animation de sélection
    setTimeout(() => {
      setAnswers(newAnswers);

      if (currentQuestionIndex < questions.length - 1) {
        // Question suivante
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setIsTransitioning(false);
      } else {
        // Quiz terminé - on affiche les résultats
        onComplete(newAnswers);
      }
    }, 600);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Barre de progression ultra-fine en haut - Mobile First */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="relative h-1 bg-gray-200/50 backdrop-blur-sm">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 relative"
            style={{
              backgroundSize: '200% 100%',
              willChange: 'width',
            }}
          >
            <motion.div
              animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              style={{ willChange: 'background-position' }}
            />
          </motion.div>
        </div>

        {/* Indicateur de question - Mobile optimisé */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2">
          <motion.div
            key={currentQuestionIndex}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="px-4 py-2 backdrop-blur-xl bg-white/90 rounded-full shadow-lg border border-white/20"
          >
            <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {currentQuestionIndex + 1} / {questions.length}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Question - Une seule à l'écran, mobile-first */}
      <div className="w-full max-w-2xl px-4 sm:px-6 pt-20 pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 300, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -300, scale: 0.9 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              mass: 0.8,
            }}
            className="space-y-6"
          >
            {/* Question Text - Mobile optimisé */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight px-2">
                {currentQuestion.text}
              </h2>
            </motion.div>

            {/* Options - Espacées pour mobile */}
            <div className="space-y-3 sm:space-y-4">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedOption === index;

                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.15 + index * 0.05,
                      type: 'spring',
                      stiffness: 400,
                      damping: 25,
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleOptionSelect(index)}
                    disabled={isTransitioning}
                    className={`
                      group relative w-full text-left p-5 sm:p-6 rounded-2xl
                      transition-all duration-300 transform
                      ${
                        isSelected
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl scale-[1.02]'
                          : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl active:scale-[0.98]'
                      }
                      ${isTransitioning && !isSelected ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                    style={{ willChange: 'transform' }}
                  >
                    <div className="flex items-center gap-4">
                      {/* Radio indicator */}
                      <div
                        className={`
                        flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center
                        transition-all duration-300
                        ${
                          isSelected
                            ? 'border-white bg-white'
                            : 'border-purple-300 group-hover:border-purple-500'
                        }
                      `}
                      >
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                            className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-600 to-pink-600"
                          />
                        )}
                      </div>

                      {/* Text */}
                      <span
                        className={`
                        flex-1 text-base sm:text-lg font-medium leading-relaxed
                        transition-colors duration-300
                        ${isSelected ? 'text-white' : 'text-gray-800'}
                      `}
                      >
                        {option.text}
                      </span>

                      {/* Checkmark animation */}
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                          className="flex-shrink-0 w-7 h-7 rounded-full bg-white flex items-center justify-center"
                        >
                          <span className="text-purple-600 text-lg font-bold">✓</span>
                        </motion.div>
                      )}
                    </div>

                    {/* Shimmer effect on selection */}
                    {isSelected && (
                      <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        style={{ willChange: 'transform' }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
