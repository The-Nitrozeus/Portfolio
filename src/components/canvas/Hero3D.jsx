import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, useScroll } from '@react-three/drei'

export const Hero3D = () => {
    const meshRef = useRef()
    const scroll = useScroll()

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Continuous rotation
            meshRef.current.rotation.x += delta * 0.1
            meshRef.current.rotation.y += delta * 0.15

            // Scroll-driven animation
            const offset = scroll.offset

            // Move object based on scroll
            // Initial center -> Move Left -> Move Right -> Center
            // We can use dampening or direct assignment

            // Page 1: Center
            // Page 2: Left (for Projects)
            // Page 3: Right (for Skills)
            // Page 4: Center (Contact)

            // Simple interpolation for demo:
            // meshRef.current.rotation.z = offset * Math.PI * 2

            // Position interpolation
            // 0 -> 1 range
            // We can use steps or curves

            // shift x based on scroll curve
            // 0-0.25: 0
            // 0.25-0.5: -2
            // 0.5-0.75: 2
            // 0.75-1: 0

            // Let's keep it simple: rotate fast on scroll
            meshRef.current.rotation.y += offset * 0.5
        }
    })

    return (
        <Float
            speed={2} // Animation speed
            rotationIntensity={1} // XYZ rotation intensity
            floatIntensity={2} // Up/down float intensity
            floatingRange={[-0.2, 0.2]} // Range of y-axis values the object will float within
        >
            <mesh ref={meshRef} scale={2}>
                <icosahedronGeometry args={[1, 15]} />
                <MeshDistortMaterial
                    color="#6b44a6" // Deep purple
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>

            {/* Secondary ring for detail */}
            <mesh scale={2.5} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1, 0.02, 16, 100]} />
                <meshStandardMaterial color="white" emissive="white" emissiveIntensity={2} />
            </mesh>
        </Float>
    )
}
