import { useGLTF } from "@react-three/drei";

const Gltf = () => {
  const { scene } = useGLTF("/planet/scene.gltf");

  return <primitive object={scene} />;
};

export default Gltf;
useGLTF.preload("/planet/scene.gltf");