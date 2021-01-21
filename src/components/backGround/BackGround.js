import React, {Suspense} from "react";
import {Canvas} from "react-three-fiber";
import Controls from "./Controls";
import Plane from "./Plane";



const BackGround = (isPlaying) => {
    let content = (<Canvas camera={{position: [5, 5, 20], far: 100}} gl={{antialias: false, alpha: false}}>
            <Controls autoRotate />
            <ambientLight intensity={0.9}/>
            <pointLight castShadow position={[0, 10, 0]} intensity={0.5}/>
            <Suspense fallback={null}>
            <Plane/>
            </Suspense>
        </Canvas>
    );
    return content;
};

export default BackGround;