'use client'

import { Image, Scroll, ScrollControls, useScroll } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const Images = () => {
  const group = useRef(null)
  const scrollDate = useScroll()

  useFrame(() => {
    group.current.children[0].material.zoom = 1 + scrollDate.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + scrollDate.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom = 1 + scrollDate.range(0, 1 / 3) / 3
  })
  return (
    <group ref={group}>
      <Image url="./photo.jpg" scale={[4, 3, 1]} position={[1, 1, 1]} />
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

          <Scroll html>
            <h1 className="absolute top-40 left-40 text-8xl text-white">
              Title
            </h1>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default Page
