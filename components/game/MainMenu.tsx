interface MainMenuProps {
  highScore: number
  onStart: () => void
}

export default function MainMenu({ highScore, onStart }: MainMenuProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="game-card max-w-lg w-full text-center">
        <h1 className="text-6xl font-bold mb-4 text-game-accent">Math Dodge</h1>
        <p className="text-xl text-gray-400 mb-8">
          Dodge obstacles and solve math problems to survive!
        </p>

        <div className="mb-8">
          <p className="text-gray-400 mb-2">High Score</p>
          <p className="text-4xl font-bold">{highScore}</p>
        </div>

        <button onClick={onStart} className="game-button text-xl px-8 py-4">
          Start Game
        </button>

        <div className="mt-8 text-left">
          <h3 className="text-xl font-bold mb-2">How to Play:</h3>
          <ul className="text-gray-400 space-y-1">
            <li>• Use arrow keys or WASD to move</li>
            <li>• Avoid red obstacles</li>
            <li>• Collect power-ups for bonuses</li>
            <li>• Answer math questions to progress</li>
            <li>• Difficulty increases with each level</li>
          </ul>
        </div>
      </div>
    </div>
  )
}