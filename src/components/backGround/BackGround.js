import React, {Suspense} from "react";
import {Canvas, useFrame} from "react-three-fiber";
import DirtBlock from "../Game/blocks/DirtBlock";
import Ground from "./Ground";
import Controls from "./Controls";
import Plane from "./Plane";



const BackGround = () => {

    return <Canvas camera={{position: [5, 5, 5], rotation: [0, 0, 90]}} invalidateFrameloop shadowMap>
        {/*<fog attach="fog" args={["white", 10, 30]}/>*/}
        <Controls autoRotate />
        <ambientLight intensity={0.75}/>
        <pointLight castShadow position={[0, 10, 0]} intensity={0.5}/>
        <Suspense fallback={null}>
            <Plane/>
        </Suspense>
        <Ground/>
    </Canvas>
};

export default BackGround;