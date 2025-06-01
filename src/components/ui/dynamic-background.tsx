
"use client"

import { useEffect, useRef } from "react"

interface DynamicBackgroundProps {
  primaryColor?: string
  secondaryColor?: string
  speed?: number
}

export function DynamicBackground({
  primaryColor = "#1a1a1a",
  secondaryColor = "#000000",
  speed = 0.002,
}: DynamicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      time += speed

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, primaryColor)
      gradient.addColorStop(1, secondaryColor)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw animated shapes
      for (let i = 0; i < 5; i++) {
        const x = Math.sin(time + i * 0.5) * canvas.width * 0.25 + canvas.width * 0.5
        const y = Math.cos(time + i * 0.5) * canvas.height * 0.25 + canvas.height * 0.5
        const size = Math.sin(time * 2) * 50 + 100 + i * 20

        ctx.beginPath()
        ctx.fillStyle = `rgba(0, 0, 0, 0.1)`
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resize)
    resize()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [primaryColor, secondaryColor, speed])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.6 }} />
}
