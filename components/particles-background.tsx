"use client"

import { useEffect, useState } from "react"


const PARTICLE_COUNT = 30

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  duration: number
  delay: number
}

function generateParticles(): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    opacity: Math.random() * 0.4 + 0.1,
    duration: Math.random() * 15 + 20, // 20-35s fall time
    delay: Math.random() * 15,
  }))
}

export function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(generateParticles())
  }, [])

  if (particles.length === 0) return null

  return (
    <>
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white particle-fall"
            style={{
              left: `${p.x}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes particleFall {
          0% {
            transform: translateY(-5vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(105vh) translateX(20px);
            opacity: 0;
          }
        }
        .particle-fall {
          animation-name: particleFall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
      `}</style>
    </>
  )
}