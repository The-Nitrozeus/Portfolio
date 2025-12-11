import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random'

export const Stars = (props) => {
    const ref = useRef()

    // Generate random points in a sphere
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 10 }))

    useFrame((state, delta) => {
        // Rotate the entire starfield
        if (ref.current) {
            ref.current.rotation.x -= delta / 15
            ref.current.rotation.y -= delta / 20
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ffa0e0"
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={2} // Additive blending
                />
            </Points>
        </group>
    )
}
