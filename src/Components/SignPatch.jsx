import * as THREE from 'three'
import { Text } from '@react-three/drei'

export default function SignPatch() {
    return (
        <group
            position={[4.43, 4.96, 0.94]}
            rotation={[0.59, -1.65, 0.20]}
        >
            {/* Wall patch covering MAXIME HOUSE */}
            <mesh>
                <planeGeometry args={[3.5, 1.5]} />
                <meshBasicMaterial
                    color="#844445"
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Text on the visible face, flipped to read correctly */}
            <Text
                position={[0, 0, -0.1]}
                rotation={[0, Math.PI, 0]}
                fontSize={0.5}
                color="#168e16ff"
                font="./fonts/Bangers.ttf"
                anchorX="center"
                anchorY="middle"
            >
                NAKSHATRA HOUSE
            </Text>
        </group>
    )
}
