import { Position } from '@/lib/types/game'

export function checkCollision(
  pos1: Position,
  size1: number,
  pos2: Position,
  size2: number
): boolean {
  const distance = Math.sqrt(
    Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2)
  )
  return distance < (size1 + size2) / 2
}

export function isOutOfBounds(
  position: Position,
  size: number,
  canvasWidth: number,
  canvasHeight: number
): boolean {
  return (
    position.x - size / 2 < 0 ||
    position.x + size / 2 > canvasWidth ||
    position.y - size / 2 < 0 ||
    position.y + size / 2 > canvasHeight
  )
}