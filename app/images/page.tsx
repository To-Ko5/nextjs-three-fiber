'use client'

import { Image } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Page = () => {
  return (
    <>
      <Canvas>
        <Image url="./photo.jpg" scale={2}></Image>
      </Canvas>
    </>
  )
}

export default Page
