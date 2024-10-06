import { useEffect, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import styles from "./BottomGlobe.module.css";
import gsap from "gsap";

export const BottomGlobe = () => {
  // globe settings
  const globeContainerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<GlobeMethods>();
  const [globeWidth, setGlobeWidth] = useState(0);
  const [globeHeight, setGlobeHeight] = useState(0);

  useEffect(() => {
    if (!globeContainerRef.current) return;
    const { clientWidth, clientHeight } = globeContainerRef.current;
    setGlobeWidth(clientWidth);
    setGlobeHeight(clientHeight);
  }, [globeContainerRef.current]);

  useEffect(() => {
    const globe = globeRef.current;
    if (globe) {
      const controls = globe.controls();
      const camera = globe.camera();

      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.3;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableRotate = false;
      controls.enabled = false;

      camera.position.set(0, -15, 100); 
      controls.target.set(0, 0, 0); 
    }
  }, []);

  const handleZoomOut = () => {
    const globe = globeRef.current;
    if (globe) {
      const controls = globe.controls();
      const camera = globe.camera();

      // Animate the camera to the zoomed-in view
      gsap.to(camera.position, {
        duration: 2,
        x: 0,
        y: -20,
        z: 120,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.lookAt(controls.target);
        }
      });

      // Animate the controls target
      gsap.to(controls.target, {
        duration: 2,
        x: 0,
        y: 300,
        z: 0,
        ease: "power2.inOut",
        onUpdate: () => {
          controls.update();
        }
      });
    }}

    useEffect(() => {
        handleZoomOut();
    }, []);

  return (
    <div className={styles['globe-container']} ref={globeContainerRef}>
      <Globe
        ref={globeRef}
        globeImageUrl="/earth_hires.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="black"
        width={globeWidth}
        height={globeHeight}
        animateIn={false}
      />
    </div>
  );
};