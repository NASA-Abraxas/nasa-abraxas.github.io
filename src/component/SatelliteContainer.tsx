import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Satellite } from './Satellite';
import styles from './SatelliteContainer.module.css';

export const SatelliteContainer = ({ cameraPosition = [10, 0, 0] }: { cameraPosition?: number[] }) => {
  const view = {
    enabled: true,
    fullWidth: 1,
    fullHeight: 1,
    offsetX: 0,
    offsetY: 0,
    width: 1,
    height: 1
  }

  return (
    <div className={styles['satellite-container']}>
      <Canvas gl={{ toneMappingExposure: 3 }}  >
        <Suspense fallback={null}>
          <Satellite />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} minDistance={5} maxDistance={20} />
          <PerspectiveCamera makeDefault position={[
            cameraPosition[0], cameraPosition[1], cameraPosition[2]]} view={view} />
          {/* <Environment preset="forest" /> */}
        </Suspense>
      </Canvas>
    </div >
  )
}