import { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';
import sakura from '../assets/sakura.mp3'; // Corrected import statement
import { a } from '@react-spring/three';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(true);
  const [currentStage, setCurrentStage] = useState(1);
  const [rotationY, setRotationY] = useState(0); // Track island rotation state
  const [isPlayingMusic, setisPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const targetRotationY = useRef(rotationY); // Target rotation to smooth to
  const rotationSpeed = 0.05; // Speed of rotation change

  // Smooth rotation using lerp
  const smoothRotation = () => {
    const diff = targetRotationY.current - rotationY;
    if (Math.abs(diff) > 0.001) {
      setRotationY(rotationY + diff * rotationSpeed);
      requestAnimationFrame(smoothRotation);
    }
  };

  // Handle rotation logic based on the normalized rotation
  const handleRotation = (rotationY) => {
    const rotationDegrees = (rotationY * 180) / Math.PI;
    const normalizedRotation = (rotationDegrees + 360) % 360; // Ensure positive rotation

    // Determine the stage based on the normalized rotation
    const newStage = Math.floor(normalizedRotation / 90) + 1;
    if (newStage !== currentStage) {
      setCurrentStage(newStage);
    }
  };

  // Keydown event handler for keyboard rotation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        let delta = e.key === 'ArrowLeft' ? -1 : 1;
        targetRotationY.current = rotationY + delta * Math.PI / 18;  // Adjust rotation speed
        smoothRotation();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [rotationY]);

  useEffect(() => {
    handleRotation(rotationY); // Update stage based on rotation
  }, [rotationY]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }
    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />

          {/* Increase the bird size */}
          <Bird
            islandPosition={islandPosition}
            scale={[3, 3, 3]} // Increase the bird size by scaling it up (adjust the values as needed)
          />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            onRotate={handleRotation}
            position={islandPosition}
            rotation={[0, rotationY, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='sound'
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setisPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
