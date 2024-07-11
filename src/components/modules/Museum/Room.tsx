import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";

function Room() {
  const { scene }: any = useGLTF("/models/room.glb");
  return (
    <RigidBody>
      <primitive object={scene} />
    </RigidBody>
  );
}

export default Room;
