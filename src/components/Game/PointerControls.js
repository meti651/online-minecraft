import {useFrame, useThree, extend} from "react-three-fiber";
import React, {useEffect, useRef} from "react";
import {PointerLockControls} from "three/examples/jsm/controls/PointerLockControls";

extend({PointerLockControls});

const PointerLockControl = Props => {
    //const {gl, camera, invalidate} = useThree();
    const {gl, camera} = useThree();
    const controls = useRef();

    useEffect(() => {
        const control = controls.current;
        control.connect();
        window.addEventListener('click', () => control.lock());
        return(() => window.removeEventListener('click', () => control.lock()));
    }, []);

    useEffect(() => {
        const control = controls.current;
        window.addEventListener('keydown', () => control.moveForward(1));
        return(() => window.removeEventListener('keydown', () => control.moveForward(1)));
    }, []);

    useFrame(() => {
        //invalidate();

    });

    const keyPressHandler = (event) => {
        console.log(event.key);
    };

    return <pointerLockControls ref={controls} args={[camera, gl.domElement]} {...Props}/>
};

export default PointerLockControl;