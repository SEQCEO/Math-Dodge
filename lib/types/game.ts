export interface Position {
  x: number
  y: number
}

export interface Player {
  position: Position
  size: number
  speed: number
  lives: number
}

export interface Obstacle {
  id: string
  position: Position
  size: number
  speed: number
  type: 'normal' | 'fast' | 'large'
}

export interface MathQuestion {
  id: string
  question: string
  answer: number
  options: number[]
  difficulty: 'easy' | 'medium' | 'hard'
}

export interface GameState {
  status: 'menu' | 'playing' | 'paused' | 'gameOver' | 'question'
  score: number
  level: number
  highScore: number
  currentQuestion: MathQuestion | null
}

export interface PowerUp {
  id: string
  type: 'shield' | 'slowTime' | 'doublePoints'
  position: Position
  duration: number
}