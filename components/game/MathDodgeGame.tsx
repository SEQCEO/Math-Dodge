'use client'

import dynamic from 'next/dynamic'
import { useGameLoop } from '@/hooks/useGameLoop'
import GameHUD from './GameHUD'
import MainMenu from './MainMenu'
import GameOverScreen from './GameOverScreen'
import MathQuestionModal from './MathQuestionModal'

// Dynamically import GameCanvas to avoid SSR issues
const GameCanvas = dynamic(() => import('./GameCanvas'), { ssr: false })

export default function MathDodgeGame() {
  const {
    gameState,
    player,
    obstacles,
    powerUps,
    startGame,
    handleCollision,
    handlePowerUpCollect,
    handleQuestionAnswer,
    goToMainMenu
  } = useGameLoop()

  if (gameState.status === 'menu') {
    return <MainMenu highScore={gameState.highScore} onStart={startGame} />
  }

  if (gameState.status === 'gameOver') {
    return (
      <GameOverScreen
        score={gameState.score}
        highScore={gameState.highScore}
        level={gameState.level}
        onRestart={startGame}
        onMainMenu={goToMainMenu}
      />
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <GameHUD
          score={gameState.score}
          lives={player.lives}
          level={gameState.level}
          highScore={gameState.highScore}
        />
        
        <div className="flex justify-center">
          <GameCanvas
            player={player}
            obstacles={obstacles}
            powerUps={powerUps}
            isPaused={gameState.status === 'paused' || gameState.status === 'question'}
            onCollision={handleCollision}
            onPowerUpCollect={handlePowerUpCollect}
          />
        </div>

        {gameState.status === 'question' && gameState.currentQuestion && (
          <MathQuestionModal
            question={gameState.currentQuestion}
            onAnswer={handleQuestionAnswer}
          />
        )}
      </div>
    </div>
  )
}