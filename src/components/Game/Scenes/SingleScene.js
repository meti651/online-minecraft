import React from "react";
import {Canvas} from "react-three-fiber";
import Scene from "../Scene";

const SingleScene = () => {
    return <Canvas camera={{position: [0, 2, 0], far: 100, lookAt(vector, y, z) {
        }}} gl={{antialias: false, alpha: false}}>
        <Scene/>
    </Canvas>
};

export default SingleScene;