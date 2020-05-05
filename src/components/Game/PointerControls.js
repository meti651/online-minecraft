import React, {useRef} from "react";
import {extend, useFrame, useThree} from "react-three-fiber";
import {PointerLockControls} from "three/examples/jsm/controls/PointerLockControls";

extend({PointerLockControls});

const PointerLockControl = (props) => {
    const {gl, camera} = useThree();
    const controls = useRef();

    useFrame(() => {});

    return <pointerLockControl ref={controls} args={[camera, gl.domElement]} {...props}/>
};


export default PointerLockControl;