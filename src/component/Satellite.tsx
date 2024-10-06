import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export const Satellite = () => {
    // const model = useGLTF('https://eyes.nasa.gov/assets/static/models/sc_pace/pace.gltf');
    const model = useGLTF('3d model/pace.glb');
    const lightRef = useRef<any>();

    useFrame(({ camera }) => {
        if (lightRef.current) {
            lightRef.current.position.copy(camera.position);
        }
    })

    return (
        <>
            <directionalLight ref={lightRef} intensity={1} />
            <ambientLight intensity={0.5} />
            <primitive object={model.scene} />
        </>
    );
};
