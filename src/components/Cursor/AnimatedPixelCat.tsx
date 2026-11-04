import { useEffect, useState } from 'react'

/* =========================================================
   PIXEL MANEKI-NEKO
========================================================= */

const PALETTE: Record<string, string> = {
  b: '#9333EA', // body (brand primary)
  s: '#7E22CE', // shade (resting paw)
  p: '#F472B6', // ears, paw pads, nose, feet
  l: '#F5E9FF', // bell
  e: '#1E0B36', // eyes
  c: '#FACC15', // gold: collar + coin (koban)
  d: '#CA8A04', // coin hole
}

// Frame 1: paw raised
const GRID_FRAME_1 = [
  '..................',
  '....b......b......',
  '...bpb....bpb.....',
  '...bbbbbbbbbb.....',
  '...bbbbbbbbbb.....',
  '...bbebbbbebb..bb.',
  '...bebebbebeb.bbbb',
  '...bpbbppbbpb.bppb',
  '....bbbbbbbb..bbbb',
  '....cccccccc..bbb.',
  '..bbbbbllbbbbbbbb.',
  '..bbbbbbbbbbbsbbb.',
  '..bssbbccbbbbsbb..',
  '..bspscddcbbbb....',
  '..bssscddcbbbb....',
  '..bbbbbccbbbbb....',
  '..bppb....bppb....',
  '..................',
]

// Frame 2: paw one pixel lower (the wave)
const GRID_FRAME_2 = [
  '..................',
  '....b......b......',
  '...bpb....bpb.....',
  '...bbbbbbbbbb.....',
  '...bbbbbbbbbb.....',
  '...bbebbbbebb.....',
  '...bebebbebeb..bb.',
  '...bpbbppbbpb.bbbb',
  '....bbbbbbbb..bppb',
  '....cccccccc..bbbb',
  '..bbbbbllbbbbbbbb.',
  '..bbbbbbbbbbbsbbb.',
  '..bssbbccbbbbsbb..',
  '..bspscddcbbbb....',
  '..bssscddcbbbb....',
  '..bbbbbccbbbbb....',
  '..bppb....bppb....',
  '..................',
]

/* =======================================================
   RUN BUILDER
======================================================= */

interface Run {
  x: number
  y: number
  width: number
  fill: string
}

function buildRuns(grid: string[]): Run[] {
  const runs: Run[] = []

  grid.forEach((row, y) => {
    let x = 0

    while (x < row.length) {
      const key = row[x]
      const fill = PALETTE[key]

      if (!fill) {
        x += 1
        continue
      }

      let width = 1
      while (row[x + width] === key) width += 1

      runs.push({ x, y, width, fill })
      x += width
    }
  })

  return runs
}

/* Built once at load, not on every frame swap */

const FRAME_RUNS = [GRID_FRAME_1, GRID_FRAME_2].map(buildRuns)

/* =========================================================
   COMPONENT
========================================================= */

export function AnimatedPixelCat({ intervalMs = 380 }: { intervalMs?: number }) {
  const [frameIndex, setFrameIndex] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) return

    const timer = window.setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % FRAME_RUNS.length)
    }, intervalMs)

    return () => window.clearInterval(timer)
  }, [intervalMs])

  return (
    <svg
      viewBox="0 0 18 18"
      width="100%"
      height="100%"
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      {FRAME_RUNS[frameIndex].map(({ x, y, width, fill }) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={width} height={1} fill={fill} />
      ))}
    </svg>
  )
}

export default AnimatedPixelCat; 