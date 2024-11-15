/* eslint-disable react/no-unknown-property */
import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import islandScene from "../assets/3d/island.glb";
import { a } from "@react-spring/three";

const Island = ({ onRotate, ...props }) => {
  const islandRef = useRef();
  const { nodes, materials } = useGLTF(islandScene);

  const [lastX, setLastX] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(0);

  const [lastRotation, setLastRotation] = useState(0); // To store the last rotation value
  const rotationSensitivity = 0.003;
  const dampingFactor = 0.85;

  // Event handlers for mouse interaction
  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    setLastX(e.clientX);
  };

  const handlePointerUp = () => {
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    if (isRotating) {
      const delta = e.clientX - lastX;
      setRotationSpeed(delta * rotationSensitivity);
      setLastX(e.clientX);
    }
  };

  // Apply the rotation speed to the island on every frame with smooth damping
  useFrame(() => {
    if (islandRef.current) {
      if (Math.abs(rotationSpeed) > 0.001) {
        islandRef.current.rotation.y += rotationSpeed;
      }
      setRotationSpeed((prevSpeed) => prevSpeed * dampingFactor);

      // Normalize the rotation to the range of -PI to PI (or 0 to 2PI if you prefer)
      let normalizedRotation = islandRef.current.rotation.y % (Math.PI * 2);
      if (normalizedRotation < -Math.PI) normalizedRotation += Math.PI * 2;
      if (normalizedRotation > Math.PI) normalizedRotation -= Math.PI * 2;

      // Check for 90-degree intervals (PI/2)
      const roundedRotation = Math.round(normalizedRotation / (Math.PI / 2)) * (Math.PI / 2);

      // Only call onRotate when the rotation has passed a 90-degree mark
      if (Math.abs(roundedRotation - lastRotation) > 0.01) {
        setLastRotation(roundedRotation);
        onRotate(roundedRotation);
      }
    }
  });

  useEffect(() => {
    const canvas = window;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
    };
  }, [isRotating, lastX]);

  return (
    <a.group ref={islandRef} {...props} dispose={null}>
      <mesh geometry={nodes.polySurface944_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface945_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface946_tree2_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface947_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface948_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface949_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.pCube11_rocks1_0.geometry} material={materials.PaletteMaterial001} />
    </a.group>
  );
};

export default Island;
