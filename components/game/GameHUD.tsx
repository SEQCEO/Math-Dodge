interface GameHUDProps {
  score: number
  lives: number
  level: number
  highScore: number
}

export default function GameHUD({ score, lives, level, highScore }: GameHUDProps) {
  return (
    <div className="flex justify-between items-center mb-4 p-4 bg-game-primary rounded-lg">
      <div className="flex gap-8">
        <div>
          <span className="text-gray-400 text-sm">Score</span>
          <p className="text-2xl font-bold">{score}</p>
        </div>
        <div>
          <span className="text-gray-400 text-sm">Level</span>
          <p className="text-2xl font-bold">{level}</p>
        </div>
        <div>
          <span className="text-gray-400 text-sm">Lives</span>
          <p className="text-2xl font-bold">
            {Array.from({ length: lives }).map((_, i) => (
              <span key={i}>❤️</span>
            ))}
          </p>
        </div>
      </div>
      <div className="text-right">
        <span className="text-gray-400 text-sm">High Score</span>
        <p className="text-2xl font-bold text-game-accent">{highScore}</p>
      </div>
    </div>
  )
}