import { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function MatrixEffect() {
  const pointsRef = useRef();

  useEffect(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      colors[i * 3] = 0; // R
      colors[i * 3 + 1] = 1; // G (neon green)
      colors[i * 3 + 2] = 0.6; // B
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    pointsRef.current.geometry = geometry;

    const animate = () => {
      pointsRef.current.rotation.y += 0.001;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <points ref={pointsRef}>
      <pointsMaterial size={0.1} vertexColors transparent opacity={0.5} />
    </points>
  );
}

function MatrixBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <MatrixEffect />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
    </div>
  );
}

export default MatrixBackground;