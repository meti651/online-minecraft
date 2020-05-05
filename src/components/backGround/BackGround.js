import React, {Suspense} from "react";
import {Canvas} from "react-three-fiber";
import Controls from "./Controls";
import Plane from "./Plane";



const BackGround = () => {

    return <Canvas camera={{position: [5, 5, 5], far: 1000}} gl={{antialias: false, alpha: false}} shadowMap>
        {/*<fog attach="fog" args={["white", 10, 30]}/>*/}
        <Controls autoRotate />
        <ambientLight intensity={0.9}/>
        <pointLight castShadow position={[0, 10, 0]} intensity={0.5}/>
        <Suspense fallback={null}>
            <Plane/>
        </Suspense>
    </Canvas>
};

export default BackGround;