'use client'

import { useEffect, useRef, useCallback } from 'react'
import { Player, Obstacle, PowerUp } from '@/lib/types/game'
import { checkCollision } from '@/lib/utils/collision'

interface GameCanvasProps {
  player: Player
  obstacles: Obstacle[]
  powerUps: PowerUp[]
  isPaused: boolean
  onCollision: () => void
  onPowerUpCollect: (powerUp: PowerUp) => void
}

export default function GameCanvas({
  player,
  obstacles,
  powerUps,
  isPaused,
  onCollision,
  onPowerUpCollect
}: GameCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.fillStyle = '#1a1a2e'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw grid pattern
    ctx.strokeStyle = '#16213e'
    ctx.lineWidth = 1
    for (let i = 0; i < canvas.width; i += 50) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i, canvas.height)
      ctx.stroke()
    }
    for (let i = 0; i < canvas.height; i += 50) {
      ctx.beginPath()
      ctx.moveTo(0, i)
      ctx.lineTo(canvas.width, i)
      ctx.stroke()
    }

    // Draw player
    ctx.fillStyle = '#0f3460'
    ctx.beginPath()
    ctx.arc(player.position.x, player.position.y, player.size / 2, 0, Math.PI * 2)
    ctx.fill()
    
    // Player glow effect
    ctx.shadowBlur = 20
    ctx.shadowColor = '#0f3460'
    ctx.fill()
    ctx.shadowBlur = 0

    // Draw obstacles
    obstacles.forEach(obstacle => {
      ctx.fillStyle = obstacle.type === 'fast' ? '#ff6b6b' : 
                      obstacle.type === 'large' ? '#845ec2' : '#e94560'
      ctx.beginPath()
      ctx.arc(obstacle.position.x, obstacle.position.y, obstacle.size / 2, 0, Math.PI * 2)
      ctx.fill()
    })

    // Draw power-ups
    powerUps.forEach(powerUp => {
      ctx.fillStyle = powerUp.type === 'shield' ? '#4ecdc4' :
                      powerUp.type === 'slowTime' ? '#ffe66d' : '#95e1d3'
      ctx.beginPath()
      ctx.arc(powerUp.position.x, powerUp.position.y, 15, 0, Math.PI * 2)
      ctx.fill()
      
      // Power-up icon
      ctx.fillStyle = '#1a1a2e'
      ctx.font = '12px Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      const icon = powerUp.type === 'shield' ? '🛡️' :
                   powerUp.type === 'slowTime' ? '⏱️' : '2x'
      ctx.fillText(icon, powerUp.position.x, powerUp.position.y)
    })

    // Check collisions
    obstacles.forEach(obstacle => {
      if (checkCollision(player.position, player.size, obstacle.position, obstacle.size)) {
        onCollision()
      }
    })

    // Check power-up collection
    powerUps.forEach(powerUp => {
      if (checkCollision(player.position, player.size, powerUp.position, 30)) {
        onPowerUpCollect(powerUp)
      }
    })
  }, [player, obstacles, powerUps, onCollision, onPowerUpCollect])

  useEffect(() => {
    if (!isPaused) {
      const animationId = requestAnimationFrame(draw)
      return () => cancelAnimationFrame(animationId)
    }
  }, [draw, isPaused])

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      className="border-2 border-gray-700 rounded-lg shadow-2xl"
    />
  )
}