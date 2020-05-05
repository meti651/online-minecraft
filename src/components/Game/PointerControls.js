import {useFrame, useThree, extend} from "react-three-fiber";
import React, {useRef} from "react";
import {PointerLockControls} from "three/examples/jsm/controls/PointerLockControls";

extend({PointerLockControls});

const PointerLockControl = Props => {
    //const {gl, camera, invalidate} = useThree();
    const {gl, camera} = useThree();
    const controls = useRef();

    useFrame(() => {
        //invalidate();
        controls.current.update();
    });

    return <pointerLockControls ref={controls} args={[camera, gl.domElement]} {...Props}/>
};

export default PointerLockControl;