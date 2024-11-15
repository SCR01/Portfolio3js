import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import planeScene from '../assets/3d/plane.glb';

const Plane = ({ isRotating, scale = [2, 2, 2], position = [0, 0, -10], rotation = [0, 0, 0] }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  // Log available animation names
  useEffect(() => {
    console.log("Available animations:", animations.map((anim) => anim.name)); // Check if 'Take 001' exists
  }, [animations]);

  useEffect(() => {
    if (isRotating) {
      if (actions['Take 001']) {
        actions['Take 001'].play(); // Play animation if rotating
      }
    } else {
      if (actions['Take 001']) {
        actions['Take 001'].stop(); // Stop animation when not rotating
      }
    }

    // Cleanup the animation when the component unmounts
    return () => {
      if (actions['Take 001']) {
        actions['Take 001'].stop();
      }
    };
  }, [isRotating, actions]);  // Re-run when isRotating changes

  return (
    <mesh scale={scale} position={position} rotation={rotation} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
