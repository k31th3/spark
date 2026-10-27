import type { ReactNode } from 'react'

/* =========================================================
   EMOJI IMAGES
========================================================= */

const EMOJI_FILES = import.meta.glob<string>('@/assets/emoji/*.svg', {
  eager: true,
  query: '?no-inline',
  import: 'default',
})

const EMOJI_URLS: Record<string, string> = {}

for (const [path, url] of Object.entries(EMOJI_FILES)) {
  const match = path.match(/emoji_u([0-9a-f_]+)\.svg$/i)

  if (match) EMOJI_URLS[match[1].toLowerCase()] = url
}

function getEmojiUrl(emoji: string): string | undefined {
  const codepoints = Array.from(emoji).map((character) =>
    character.codePointAt(0)!.toString(16)
  )

  return (
    EMOJI_URLS[codepoints.filter((cp) => cp !== 'fe0f').join('_')] ??
    EMOJI_URLS[codepoints.join('_')]
  )
}

/* =========================================================
   STORY (WORD INDEXES FOR THE SCROLL HIGHLIGHT)
========================================================= */

export type StoryToken =
  | { kind: 'space'; text: string }
  | { kind: 'word'; text: string; index: number }

export function buildStory(paragraphs: string[][]) {
  let index = 0

  const built = paragraphs.map((lines) =>
    lines.map((line) =>
      line
        .split(/(\s+)/)
        .filter(Boolean)
        .map((part): StoryToken =>
          /^\s+$/.test(part)
            ? { kind: 'space', text: part }
            : { kind: 'word', text: part, index: index++ }
        )
    )
  )

  return { paragraphs: built, total: index }
}

/* =========================================================
   EMOJI DETECTION
========================================================= */

const EMOJI =
  /((?:\p{Emoji_Presentation}|\p{Extended_Pictographic}️)(?:‍(?:\p{Emoji_Presentation}|\p{Extended_Pictographic}️?))*)/u

/* =========================================================
   RENDER
========================================================= */

type EmojiClassNames = {
  /** Fallback span, used when there is no image for the emoji */
  emoji: string

  /** The image itself */
  image: string
}

export function renderWithEmoji(
  text: string,
  classNames: EmojiClassNames
): ReactNode[] {
  return text.split(EMOJI).map((part, index) => {
    if (index % 2 === 0) return part

    const url = getEmojiUrl(part)

    return url ? (
      <img
        key={index}
        src={url}
        alt={part}
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        draggable={false}
        className={classNames.image}
      />
    ) : (
      <span
        key={index}
        aria-hidden="true"
        className={classNames.emoji}
      >
        {part}
      </span>
    )
  })
}