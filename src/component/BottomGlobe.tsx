import { useEffect, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import styles from "./BottomGlobe.module.css"

export const BottomGlobe = () => {
  // globe settings
  const globeContainerRef = useRef<any>(null);
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

      // Set initial camera position (zoomed out)
      camera.position.set(0, -20, 120); // Zoomed-out view
      controls.target.set(0, 300, 0); // Looking at the globe's center
    }
  }, []);
  // end globe settings

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
}