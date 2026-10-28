/* =========================================================
   PIXEL CAT (ORIGINAL ART, DRAWN AS A 16x16 GRID)
========================================================= */

const PALETTE: Record<string, string> = {
  b: '#9333EA', // body (brand primary)
  p: '#F472B6', // inner ears
  l: '#F5E9FF', // cheeks
  e: '#1E0B36', // eyes
  n: '#F472B6', // nose
}

const GRID = [
  '................',
  '................',
  '..bb........bb..',
  '..bpb......bpb..',
  '..bppbbbbbbppb..',
  '..bbbbbbbbbbbb..',
  '..bbbbbbbbbbbb..',
  '..bbeebbbbeebb..',
  '..bbeebbbbeebb..',
  '..bbbbbnnbbbbb..',
  '..bllbbbbbbllb..',
  '..bbbbbbbbbbbb..',
  '...bbbbbbbbbb...',
  '...bbb....bbb...',
  '...bbb....bbb...',
  '................',
]

/* ===== MERGE HORIZONTAL RUNS OF THE SAME COLOR INTO ONE <rect> ===== */

interface Run {
  x: number
  y: number
  width: number
  fill: string
}

function buildRuns(): Run[] {
  const runs: Run[] = []

  GRID.forEach((row, y) => {
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

const RUNS = buildRuns()

/* =========================================================
   COMPONENT (SIZE IS SET BY THE PARENT, SVG FILLS IT)
========================================================= */

export function PixelCatAsset() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="100%"
      height="100%"
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      {RUNS.map(({ x, y, width, fill }) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={width} height={1} fill={fill} />
      ))}
    </svg>
  )
}

export default PixelCatAsset;