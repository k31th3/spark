import { Component, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'

/* =========================================================
   SHADER GRADIENT
========================================================= */

const GRADIENT_PROPS = {
  axesHelper: 'off',
  bgColor1: '#000000',
  bgColor2: '#000000',
  brightness: 1.2,
  cAzimuthAngle: 170,
  cDistance: 3.99,
  cPolarAngle: 70,
  cameraZoom: 1,
  color1: '#ff925c',
  color2: '#df4fff',
  color3: '#433082',
  destination: 'onCanvas',
  envPreset: 'city',
  fov: 45,
  gizmoHelper: 'hide',
  grain: 'on',
  lightType: '3d',
  pixelDensity: 1,
  positionX: 0,
  positionY: 0.9,
  positionZ: -0.3,
  range: 'disabled',
  rangeEnd: 40,
  rangeStart: 0,
  reflection: 0,
  rotationX: 45,
  rotationY: 0,
  rotationZ: 0,
  shader: 'defaults',
  type: 'waterPlane',
  uAmplitude: 0,
  uDensity: 1.2,
  uFrequency: 0,
  uSpeed: 0.2,
  uStrength: 3.4,
  uTime: 0,
  wireframe: false,
} as const

/* =========================================================
   ERROR BOUNDARY (A WEBGL FAILURE MUST NOT BLANK THE PAGE)
========================================================= */

class GradientBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error: unknown) {
    console.warn('Shader gradient disabled:', error)
  }

  render() {
    return this.state.failed ? null : this.props.children
  }
}

/* =========================================================
   GRADIENT BACKDROP
========================================================= */

function GradientBackdrop() {
  const [ready, setReady] = useState(false)

  /* The canvas waits for an idle moment so it never competes
     with first paint. The cleanup cancels the pending call, so
     StrictMode's mount, unmount, mount only creates one canvas */

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) return

    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(() => setReady(true), {
        timeout: 2000,
      })

      return () => window.cancelIdleCallback(id)
    }

    const timer = window.setTimeout(() => setReady(true), 400)

    return () => window.clearTimeout(timer)
  }, [])

  if (!ready) return null

  return (
    <GradientBoundary>
      <ShaderGradientCanvas
        pixelDensity={1}
        fov={45}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <ShaderGradient
          animate="on"
          {...GRADIENT_PROPS}
        />
      </ShaderGradientCanvas>
    </GradientBoundary>
  )
}

export default GradientBackdrop;