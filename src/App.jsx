import { Canvas } from '@react-three/fiber'
import { Experience } from './components/canvas/Experience'
import { Loader } from '@react-three/drei'
import { Suspense } from 'react'

function App() {
  return (
    <>
      <div className="relative h-screen w-full bg-slate-900">
        <Canvas
          shadows
          camera={{
            position: [0, 0, 5],
            fov: 30
          }}
          className="h-full w-full"
        >
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </Canvas>
      </div>
      <Loader />
    </>
  )
}

export default App
