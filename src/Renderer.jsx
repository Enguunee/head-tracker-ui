import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'


function clickHandle() {
    alert("Click!")
}

export function Renderer() {



    return (
        <Canvas onClick={clickHandle}>
            <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshPhongMaterial />
            </mesh>
            <ambientLight intensity={0.1} />
            <directionalLight position={[0, 0, 5]} color="red" />
        </Canvas>
    )
}