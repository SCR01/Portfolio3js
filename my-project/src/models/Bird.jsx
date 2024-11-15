import React, { useRef, useEffect } from "react";
import birdScene from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Bird = ({ islandPosition }) => {
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  const radius = 15;      // Increase radius to move the bird further from the island
  const speed = 1.0;      // Speed for rotation
  const yOffset = 12;     // Increased height to avoid collision with the island

  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime() * speed;

    // Calculate bird's position on a circular path around the island
    const x = islandPosition[0] + Math.cos(elapsedTime) * radius;
    const z = islandPosition[2] + Math.sin(elapsedTime) * radius;

    birdRef.current.position.set(x, islandPosition[1] + yOffset, z);

    // Calculate the angle to make the bird face forward along its path
    const angle = Math.atan2(z - islandPosition[2], x - islandPosition[0]);
    birdRef.current.rotation.y = angle + Math.PI / 2;
  });

  return (
    <mesh ref={birdRef} scale={[0.02, 0.02, 0.02]}>  {/* Bird size adjusted */}
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
