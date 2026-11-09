import { createContext, useContext } from 'react'

export const RevealGateContext = createContext(true)

export function useRevealGate() {
  return useContext(RevealGateContext)
}