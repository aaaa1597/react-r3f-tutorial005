import React, {useRef} from 'react';
import './App.css';
import { Canvas, MeshProps, useFrame, ThreeEvent } from '@react-three/fiber'
import { number } from 'prop-types';

const Box = (props: MeshProps) => {
  const ref = useRef<MeshProps>()

  useFrame(() => {
    if(!ref.current) return
    ref.current.rotation.x += 1 * 0.01
    ref.current.rotation.y += 0.5 * 0.01
  })

  return (
    <mesh {...props} ref={ref}
      onPointerDown={(e: ThreeEvent<PointerEvent>) => console.log('pointer down ' + e)}
      onPointerUp={(e: ThreeEvent<PointerEvent>) => console.log('pointer up ' + e)}
      onPointerOver={(e: ThreeEvent<PointerEvent>) => console.log('pointer over ' + e)}
      onPointerOut={(e: ThreeEvent<PointerEvent>) => console.log('pointer out ' + e)}
      >
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  )
}

const App = () => {
  return (
    <div style={{ width: "75vw", height: "75vh" }}>
      <Canvas camera={{ position: [3, 1, 2] }}>
        <ambientLight />
        <directionalLight />
        <Box position={[-0.75, 0, 0]} name="A" />
        <Box position={[0.75, 0, 0]} name="B" />
      </Canvas>
    </div>
  );
}

export default App;
