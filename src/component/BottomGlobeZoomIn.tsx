import { useEffect, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import styles from "./BottomGlobe.module.css";
import { useNavigateNextPage } from "../hook/useNavigateNextPage";
import gsap from "gsap";

interface BottomGlobeProps {
  zoomedIn: boolean;
}

export const BottomGlobe = ({ zoomedIn }: BottomGlobeProps) => {
  // globe settings
  const globeContainerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<GlobeMethods>();
  const [globeWidth, setGlobeWidth] = useState(0);
  const [globeHeight, setGlobeHeight] = useState(0);

  const handleNext = useNavigateNextPage();

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

      // Set initial camera position (zoomed-out view)
      camera.position.set(0, -20, 120); // Initial Zoomed-out view
      controls.target.set(0, 300, 0); // Looking at the globe's center
    }
  }, []);

  const handleZoomIn = () => {
    const globe = globeRef.current;
    if (globe) {
      const controls = globe.controls();
      const camera = globe.camera();

      // Animate the camera to the zoomed-in view
      gsap.to(camera.position, {
        duration: 2,
        x: camera.position.x * 0.85,
        y: camera.position.y * 0.85,
        z: camera.position.z * 0.85,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.lookAt(controls.target);
        }
      });

      // Animate the controls target
      gsap.to(controls.target, {
        duration: 2,
        x: 0,
        y: 0,
        z: 0,
        ease: "power2.inOut",
        onUpdate: () => {
          controls.update();
        }
      });
    }

    const nextScreen = setTimeout(() => {
      handleNext();
    }, 1000);
    return () => clearTimeout(nextScreen);
  };

    useEffect(() => {
        if (zoomedIn) {
        handleZoomIn();
        }
    }, [zoomedIn]);

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