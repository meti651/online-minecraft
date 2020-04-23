import React, {Suspense} from "react";
import {Canvas} from "react-three-fiber";
import DirtBlock from "../Game/blocks/DirtBlock";
import Ground from "./Ground";
import Controls from "./Controls";



const BackGround = () => {
    return <Canvas camera={{position: [5, 5, 5], rotation: [0, 0, 90]}} shadowMap>
        {/*<fog attach="fog" args={["white", 10, 30]}/>*/}
        <Controls autoRotate />
        <ambientLight intensity={0.75}/>
        <pointLight intensity={0.25} position={[5, 0, 5]}/>
        <spotLight position={[-5, 2.5, 5]} intensity={0.25} penumbra={1} castShadow/>
        <Suspense fallback={null}>
            <DirtBlock position={[0, -0.5, 0]}/>
        </Suspense>
        <Ground/>
    </Canvas>
};

export default BackGround;