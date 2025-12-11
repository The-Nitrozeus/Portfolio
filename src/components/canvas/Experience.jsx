import { OrbitControls, Environment, PerspectiveCamera, ScrollControls, Scroll } from '@react-three/drei'
import { Hero3D } from './Hero3D'
import { Stars } from './Stars'
import { Overlay } from '../dom/Overlay'

export const Experience = () => {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <Environment preset="city" />

            {/* Background elements */}
            <color attach="background" args={['#050511']} />
            <Stars />

            <ScrollControls pages={4} damping={0.3}>
                {/* 3D Scene Subject */}
                <Hero3D />

                {/* DOM Overlay */}
                <Scroll html style={{ width: '100%' }}>
                    <Overlay />
                </Scroll>
            </ScrollControls>
        </>
    )
}
