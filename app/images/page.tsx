'use client'

import { Image, Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Images = () => {
  return (
    <group>
      <Image url="./photo.jpg" scale={[4, 3, 1]} position={[1, 1, 1]} a />
      <Image url="./photo.jpg" scale={[1, 3, 1]} position={[-1, -1, 1]} />
      <Image url="./photo.jpg" scale={[1.4, 1, 1]} position={[-1, 2, 0]} />
    </group>
  )
}

const Page = () => {
  return (
    <div className="h-dvh">
      <Canvas>
        <ScrollControls pages={3} damping={0.1}>
          <Scroll>
            <Images />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default Page
