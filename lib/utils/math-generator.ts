import { MathQuestion } from '@/lib/types/game'

export function generateMathQuestion(
  level: number,
  difficulty: 'easy' | 'medium' | 'hard'
): MathQuestion {
  const operations = ['+', '-', '*', '/']
  let operation: string
  let num1: number
  let num2: number
  let answer: number

  switch (difficulty) {
    case 'easy':
      operation = operations[Math.floor(Math.random() * 2)] // Only + and -
      num1 = Math.floor(Math.random() * 10) + 1
      num2 = Math.floor(Math.random() * 10) + 1
      break
    case 'medium':
      operation = operations[Math.floor(Math.random() * 3)] // +, -, *
      num1 = Math.floor(Math.random() * 20) + 1
      num2 = Math.floor(Math.random() * 20) + 1
      break
    case 'hard':
      operation = operations[Math.floor(Math.random() * 4)] // All operations
      num1 = Math.floor(Math.random() * 50) + 1
      num2 = Math.floor(Math.random() * 50) + 1
      break
  }

  // Calculate answer
  switch (operation) {
    case '+':
      answer = num1 + num2
      break
    case '-':
      answer = num1 - num2
      break
    case '*':
      answer = num1 * num2
      break
    case '/':
      // Ensure clean division
      answer = num1
      num1 = answer * num2
      break
  }

  // Generate wrong options
  const options = [answer]
  while (options.length < 4) {
    const offset = Math.floor(Math.random() * 10) - 5
    const wrongAnswer = answer + offset
    if (!options.includes(wrongAnswer) && wrongAnswer !== answer) {
      options.push(wrongAnswer)
    }
  }

  // Shuffle options
  options.sort(() => Math.random() - 0.5)

  return {
    id: Math.random().toString(36).substr(2, 9),
    question: `${num1} ${operation} ${num2}`,
    answer,
    options,
    difficulty
  }
}