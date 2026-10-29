import { useId } from 'react'

/* =========================================================
   SPARK GLYPH 
========================================================= */

const PATH =
  'M480.26 265.16L475.62 211.31L314.07 225.15C296.08 226.74 285.04 241.62 285.04 256.98C285.04 265.58 288.58 274.36 296.38 280.95L420.42 385.36L455.24 344.01L372.6 274.43L480.24 265.16H480.26ZM414.33 61.41L322.67 118.55L347.13 13.29L294.44 1.03L257.73 158.98C257.12 161.48 256.88 163.98 256.88 166.42C256.88 190.08 283.59 206.55 305.36 193.01L442.94 107.33L414.34 61.41H414.33ZM224.42 157.34L185.45 0L133 12.99L158.98 117.88L66.41 62.08L38.54 108.37L177.34 192.1C182.65 195.33 188.26 196.73 193.68 196.73C212.83 196.73 229.72 178.68 224.42 157.33V157.34ZM165.51 223.27L3.84 211.68L0 265.65L107.76 273.33L26.1 344.07L61.53 384.93L184.05 278.75C191.61 272.22 195.03 263.56 195.03 255.09C195.03 239.6 183.69 224.54 165.51 223.26V223.27ZM268.52 299.19C263.09 286.26 251.2 279.86 239.37 279.86C227.54 279.86 215.34 286.45 210.04 299.62L149.05 449.89L199.18 470.2L239.8 370.06L281.88 469.59L331.64 448.55L268.52 299.2V299.19Z'

type FooterGlyphProps = {
  variant?: 'fade' | 'solid'
  className?: string
}

function FooterGlyph({ variant = 'fade', className }: FooterGlyphProps) {
  const id = useId().replace(/:/g, '')

  const fadeId = `${id}-fade`
  const tintId = `${id}-tint`

  return (
    <svg
      viewBox="0 0 481 471"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {variant === 'fade' && (
        <defs>
          <linearGradient
            id={fadeId}
            x1="417.63"
            y1="62.5"
            x2="313.13"
            y2="167"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" stopOpacity="0" />
            <stop offset="1" stopColor="#fff" />
          </linearGradient>

          <linearGradient
            id={tintId}
            x1="0.3"
            y1="0.05"
            x2="0.95"
            y2="0.95"
          >
            <stop offset="0.38" stopColor="#df4fff" stopOpacity="0" />
            <stop offset="0.68" stopColor="#df4fff" stopOpacity="0.9" />
            <stop offset="1" stopColor="#9333ea" />
          </linearGradient>
        </defs>
      )}

      <path
        d={PATH}
        fill={variant === 'solid' ? '#fff' : `url(#${fadeId})`}
      />

      {variant === 'fade' && (
        <path
          d={PATH}
          fill={`url(#${tintId})`}
        />
      )}
    </svg>
  )
}

export default FooterGlyph;