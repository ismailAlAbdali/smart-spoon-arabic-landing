
"use client"

import type React from "react"

import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ShineBorderProps {
  children: React.ReactNode
  borderWidth?: number
  borderColor?: string
  shineWidth?: number
  shineColor?: string
  borderRadius?: string
  className?: string
}

export function ShineBorder({
  children,
  borderWidth = 1,
  borderColor = "rgba(255, 255, 255, 0.15)",
  shineWidth = 100,
  shineColor = "rgba(255, 255, 255, 0.5)",
  borderRadius = "0.5rem",
  className,
}: ShineBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setOpacity(0)
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        borderRadius,
        padding: borderWidth,
        background: `linear-gradient(to right, ${borderColor}, ${borderColor})`,
      }}
    >
      {/* Shine effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius,
          opacity,
          background: `radial-gradient(circle ${shineWidth}px at ${position.x}px ${position.y}px, ${shineColor}, transparent)`,
          transition: isHovered ? "opacity 0.15s" : "opacity 0.5s",
        }}
      />
      {children}
    </div>
  )
}
