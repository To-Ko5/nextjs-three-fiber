'use client'

import {
  Image,
  Scroll,
  ScrollControls,
  useAspect,
  useScroll
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Scanline,
  Vignette
} from '@react-three/postprocessing'

const Images = () => {
  const group = useRef(null)
  const scrollDate = useScroll()

  const scale = useAspect(
    1900, // Pixel-width
    500, // Pixel-height
    1 - 100 / 150 // Optional scaling factor 1 - (maxWidth / viewport.width)
  )

  const scaleVertical = useAspect(
    100, // Pixel-width
    200, // Pixel-height
    1 - 100 / 120
  )

  useFrame(() => {
    group.current.children[0].material.zoom = 1 + scrollDate.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + scrollDate.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom = 1 + scrollDate.range(0, 1 / 3) / 3
  })

  return (
    <group ref={group}>
      <Image url="./photo.jpg" scale={scale} position={[0, 1.8, 1]} />
      <Image url="./photo.jpg" scale={scale} position={[0, -0.9, 1]} />
      <Image url="./photo.jpg" scale={scaleVertical} position={[0, -5, 1]} />
    </group>
  )
}

const Page = () => {
  return (
    <div>
      <div className="h-dvh bg-black">
        <Canvas>
          <ScrollControls pages={3} distance={1}>
            <Scroll>
              <Images />
            </Scroll>

            <Scroll html>
              <h1 className="absolute top-40 left-40 text-8xl text-white">
                Title
              </h1>
            </Scroll>

            <Scroll html>
              <h1>html in here (optional)</h1>
              <h1 className="absolute top-[100dvh]">second page</h1>
              <h1 className="absolute top-[200dvh]">third page</h1>
              <footer className="absolute top-[280dvh] h-[20dvh] text-muted-foreground ">
                footer
              </footer>
            </Scroll>
          </ScrollControls>

          <EffectComposer multisampling={3} autoClear>
            {/* <DepthOfField
              focusDistance={0}
              focalLength={0.02}
              bokehScale={2}
              height={480}
            /> */}
            {/* <Bloom
              luminanceThreshold={0}
              luminanceSmoothing={0.9}
              height={300}
              opacity={3}
            /> */}
            <Noise opacity={0.06} />
            {/* <Scanline density={5} /> */}
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>

          {/* <SpotLight
            distance={6}
            angle={0.3}
            attenuation={5}
            anglePower={7}
            position={[1, 3, 3]}
          /> */}
        </Canvas>
      </div>
    </div>
  )
}

export default Page
