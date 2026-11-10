import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

function hexToRgba(hex: string, alpha: number): string | null {
  const value = hex.trim()
  const match = value.startsWith('#') ? value.slice(1) : null
  if (match === null || (match.length !== 6 && match.length !== 3)) return null
  const full = match.length === 3 ? match.split('').map((c) => c + c).join('') : match
  const r = Number.parseInt(full.slice(0, 2), 16)
  const g = Number.parseInt(full.slice(2, 4), 16)
  const b = Number.parseInt(full.slice(4, 6), 16)
  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) return null
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function readColors(): { node: string; nodeAlt: string; edge: string } {
  const styles = getComputedStyle(document.documentElement)
  const cyan = styles.getPropertyValue('--cyan')
  const blue = styles.getPropertyValue('--blue')
  return {
    node: hexToRgba(cyan, 0.9) ?? 'rgba(79, 216, 236, 0.9)',
    nodeAlt: hexToRgba(blue, 0.85) ?? 'rgba(91, 156, 249, 0.85)',
    edge: hexToRgba(cyan, 0.14) ?? 'rgba(79, 216, 236, 0.14)',
  }
}

/**
 * Decorative neural-network backdrop: a slowly drifting particle field with
 * proximity edges. Fully honouring `prefers-reduced-motion` (static frame),
 * capped at 2× DPR, pausable and hidden from assistive technology.
 */
export function NeuralBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas === null) return
    const context = canvas.getContext('2d')
    if (context === null) return

    const mediaReduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    let particles: Particle[] = []
    let colors = readColors()
    let width = 0
    let height = 0
    let dpr = 1
    let frame = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = Math.max(1, Math.floor(rect.width))
      height = Math.max(1, Math.floor(rect.height))
      dpr = Math.min(2, window.devicePixelRatio || 1)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      const target = Math.round(Math.min(44, Math.max(16, (width * height) / 26000)))
      particles = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: 1.1 + Math.random() * 1.7,
      }))
    }

    const linkDistance = () => Math.max(90, Math.min(150, width / 7))

    const draw = () => {
      context.clearRect(0, 0, width, height)
      const maxDist = linkDistance()
      const maxDistSq = maxDist * maxDist
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distSq = dx * dx + dy * dy
          if (distSq < maxDistSq) {
            const alpha = (1 - distSq / maxDistSq) * 0.6
            context.strokeStyle = colors.edge
            context.globalAlpha = alpha
            context.lineWidth = 1
            context.beginPath()
            context.moveTo(a.x, a.y)
            context.lineTo(b.x, b.y)
            context.stroke()
          }
        }
      }
      context.globalAlpha = 1
      particles.forEach((particle, index) => {
        context.fillStyle = index % 3 === 0 ? colors.nodeAlt : colors.node
        context.beginPath()
        context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2)
        context.fill()
      })
    }

    const step = () => {
      for (const particle of particles) {
        particle.x += particle.vx
        particle.y += particle.vy
        if (particle.x < -20) particle.x = width + 20
        if (particle.x > width + 20) particle.x = -20
        if (particle.y < -20) particle.y = height + 20
        if (particle.y > height + 20) particle.y = -20
      }
      draw()
    }

    const animate = () => {
      step()
      frame = requestAnimationFrame(animate)
    }

    const reduced = () => mediaReduce.matches
    const startStop = () => {
      cancelAnimationFrame(frame)
      if (reduced() || document.hidden) {
        draw()
        return
      }
      frame = requestAnimationFrame(animate)
    }

    const onVisibility = () => startStop()

    resize()
    startStop()

    const resizeObserver = new ResizeObserver(() => {
      resize()
      if (reduced()) draw()
    })
    resizeObserver.observe(canvas)

    const onReduceChange = () => startStop()
    mediaReduce.addEventListener?.('change', onReduceChange)
    document.addEventListener('visibilitychange', onVisibility)

    // Repaint with the palette of the active theme.
    const themeObserver = new MutationObserver(() => {
      colors = readColors()
      if (reduced()) draw()
    })
    themeObserver.observe(document.documentElement, { attributeFilter: ['class'] })

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      themeObserver.disconnect()
      mediaReduce.removeEventListener?.('change', onReduceChange)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-80 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
    />
  )
}
