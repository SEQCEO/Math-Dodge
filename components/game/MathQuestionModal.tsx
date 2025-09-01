'use client'

import { MathQuestion } from '@/lib/types/game'
import { useState } from 'react'

interface MathQuestionModalProps {
  question: MathQuestion
  onAnswer: (correct: boolean) => void
}

export default function MathQuestionModal({ question, onAnswer }: MathQuestionModalProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (answer: number) => {
    setSelectedAnswer(answer)
    setShowResult(true)
    const isCorrect = answer === question.answer
    
    setTimeout(() => {
      onAnswer(isCorrect)
      setSelectedAnswer(null)
      setShowResult(false)
    }, 1500)
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="game-card max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Solve to Continue!</h2>
        
        <div className="text-center mb-8">
          <p className="text-5xl font-bold text-game-accent mb-2">
            {question.question} = ?
          </p>
          <p className="text-gray-400">
            Difficulty: <span className="capitalize">{question.difficulty}</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showResult && handleAnswer(option)}
              disabled={showResult}
              className={`
                p-4 text-2xl font-bold rounded-lg transition-all duration-200
                ${!showResult ? 'bg-gray-700 hover:bg-gray-600 active:scale-95' : ''}
                ${showResult && selectedAnswer === option
                  ? option === question.answer
                    ? 'bg-green-600'
                    : 'bg-red-600'
                  : showResult && option === question.answer
                  ? 'bg-green-600'
                  : 'bg-gray-700'
                }
              `}
            >
              {option}
            </button>
          ))}
        </div>

        {showResult && (
          <p className="text-center mt-4 text-lg">
            {selectedAnswer === question.answer
              ? '✅ Correct! Well done!'
              : `❌ Wrong! The answer is ${question.answer}`}
          </p>
        )}
      </div>
    </div>
  )
}