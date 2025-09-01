interface GameOverScreenProps {
  score: number
  highScore: number
  level: number
  onRestart: () => void
  onMainMenu: () => void
}

export default function GameOverScreen({
  score,
  highScore,
  level,
  onRestart,
  onMainMenu
}: GameOverScreenProps) {
  const isNewHighScore = score === highScore && score > 0

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="game-card max-w-md w-full text-center">
        <h2 className="text-5xl font-bold mb-4 text-game-accent">Game Over!</h2>
        
        {isNewHighScore && (
          <p className="text-2xl text-yellow-400 mb-4 animate-pulse">
            🎉 New High Score! 🎉
          </p>
        )}

        <div className="space-y-4 mb-8">
          <div>
            <p className="text-gray-400">Final Score</p>
            <p className="text-4xl font-bold">{score}</p>
          </div>
          <div>
            <p className="text-gray-400">Level Reached</p>
            <p className="text-3xl font-bold">{level}</p>
          </div>
          <div>
            <p className="text-gray-400">High Score</p>
            <p className="text-3xl font-bold text-game-accent">{highScore}</p>
          </div>
        </div>

        <div className="space-y-3">
          <button onClick={onRestart} className="game-button w-full">
            Play Again
          </button>
          <button 
            onClick={onMainMenu} 
            className="w-full px-6 py-3 bg-gray-700 text-white font-bold rounded-lg 
                     hover:bg-gray-600 transition-colors duration-200"
          >
            Main Menu
          </button>
        </div>
      </div>
    </div>
  )
}