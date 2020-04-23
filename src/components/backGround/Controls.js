import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {useFrame, useThree, extend} from "react-three-fiber";
import React, {useRef} from "react";

extend({OrbitControls});


const Controls = Props => {
    const {gl, camera} = useThree();
    const controls = useRef();

    useFrame(() => {
        controls.current.update();
    });

    return <orbitControls ref={controls} args={[camera, gl.domElement]} {...Props}/>
};

export default Controls;