import React from "react";


const Ground = () => {
    return <mesh position={[0, -0.5, 0]} rotation={[-Math.PI/2, 0, 0]} receiveShadow>
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshPhysicalMaterial attach="material" color={'brown'} />
    </mesh>
};

export default Ground