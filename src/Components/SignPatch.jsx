import { Text } from "@react-three/drei"
import * as THREE from 'three'

export default function PatchGrid() {
    // The text "MAXIME HOUSE" is located at roughly X=[-2.5..0], Y=[4.5..6.5], Z=-3.9
    // We will cover it with a board and writing.

    return (
        <group position={[-3.2, 5.3, -3.6]}>
            {/* The main wooden board to cover the text */}
            <mesh rotation={[0, 0, -0.2]}>
                <boxGeometry args={[4.2, 2.5, 0.1]} />
                <meshStandardMaterial color="#8b5a2b" />

                {/* The new text */}
                <Text
                    position={[0, 0.3, 0.11]}
                    fontSize={0.5}
                    color="#f4eadb"
                    font="./fonts/Bangers.ttf"
                >
                    NAKSHATRA
                </Text>
                <Text
                    position={[0, -0.3, 0.11]}
                    fontSize={0.4}
                    color="#f4eadb"
                    font="./fonts/Bangers.ttf"
                >
                    PORTFOLIO
                </Text>
            </mesh>
        </group>
    )
}
