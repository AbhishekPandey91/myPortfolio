import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  });

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* Target board outer circle */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 0.15, 32]} />
        <meshStandardMaterial color="#e63946" />
      </mesh>
      {/* Target middle white ring */}
      <mesh position={[0, 0, 0.08]}>
        <cylinderGeometry args={[0.9, 0.9, 0.05, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* Target inner red ring */}
      <mesh position={[0, 0, 0.11]}>
        <cylinderGeometry args={[0.6, 0.6, 0.05, 32]} />
        <meshStandardMaterial color="#e63946" />
      </mesh>
      {/* Target bullseye */}
      <mesh position={[0, 0, 0.14]}>
        <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
        <meshStandardMaterial color="#ffb703" />
      </mesh>
      {/* Target stand pole */}
      <mesh position={[0, -1.2, -0.1]}>
        <cylinderGeometry args={[0.08, 0.08, 1.5, 16]} />
        <meshStandardMaterial color="#4a5568" />
      </mesh>
      {/* Target stand base */}
      <mesh position={[0, -1.9, -0.1]}>
        <cylinderGeometry args={[0.6, 0.6, 0.1, 16]} />
        <meshStandardMaterial color="#2d3748" />
      </mesh>
    </group>
  );
};

export default Target;
