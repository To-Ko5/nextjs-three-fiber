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
          </ScrollControls>

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
