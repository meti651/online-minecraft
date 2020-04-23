import React from "react";
import {Canvas} from "react-three-fiber";
import DirtBlock from "../Game/blocks/DirtBlock";
import Ground from "./Ground";
import Controls from "./Controls";

interface Props {

}

const BackGround: React.FC<Props> = () => {
    return <Canvas camera={{position: [5, 5, 5], rotation: [0, 0, 90]}} shadowMap>
        <Controls autoRotate enablePan={true} enableZoom={true} enableDamping dampingFactor={0.5} rotateSpeed={1}/>
        <ambientLight intensity={0.75}/>
        <pointLight intensity={0.25} position={[5, 0, 5]}/>
        <spotLight position={[-5, 2.5, 5]} intensity={0.25} penumbra={1} castShadow/>
        <DirtBlock position={[0, -0.5, 0]}/>
        <Ground/>
    </Canvas>
};

export default BackGround;