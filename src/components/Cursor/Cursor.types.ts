import type { ReactNode } from 'react'

export interface CursorProps {
  ease?: number

  follower?: ReactNode

  followerEase?: number

  followerSize?: number
  
  followerFlip?: boolean
}