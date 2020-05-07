import {useFrame, useThree, extend} from "react-three-fiber";
import React, {useEffect, useRef} from "react";
import {PointerLockControls} from "three/examples/jsm/controls/PointerLockControls";

extend({PointerLockControls});

const PointerLockControl = Props => {
    //const {gl, camera, invalidate} = useThree();
    const {gl, camera} = useThree();
    const controls = useRef();
    const move = useRef({moveForward: 0, moveRight: 0});
    const keys = useRef({w: false, s:false, a:false, d:false});
    const velocity = useRef({y: 0});

    useEffect(() => {
        const control = controls.current;
        control.connect();
        window.addEventListener('click', () => control.lock());
        return(() => window.removeEventListener('click', () => control.lock()));
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', keyPressHandler);
        return(() => window.removeEventListener('keydown', keyPressHandler));
    }, []);

    useEffect(() => {
        window.addEventListener('keyup', keyUpHandler);
        return(() => window.removeEventListener('keyup', keyUpHandler));
    }, []);

    useFrame(() => {
        if(keys.current.w) move.current.moveForward = 0.3;
        if(keys.current.s) move.current.moveForward = - 0.3;
        if(keys.current.a) move.current.moveRight = - 0.3;
        if(keys.current.d) move.current.moveRight = + 0.3;
        controls.current.moveForward(move.current.moveForward);
        controls.current.moveRight(move.current.moveRight);
        controls.current.getObject().position.y += velocity.current.y;
    });

    const keyPressHandler = (event) => {
        if(event.key === "w") keys.current.w = true;
        else if(event.key === "s") keys.current.s = true;
        else if(event.key === "a") keys.current.a = true;
        else if(event.key === "d") keys.current.d = true;
        // else if(event.key === " ") velocity.current.y = 0.1;
    };

    const keyUpHandler = (event) => {
        if(event.key === "w") keys.current.w = false;
        else if(event.key === "s") keys.current.s = false;
        else if(event.key === "a") keys.current.a = false;
        else if(event.key === "d") keys.current.d = false;
        move.current.moveRight = 0;
        move.current.moveForward = 0;

    };

    return <pointerLockControls ref={controls} args={[camera, gl.domElement]} {...Props}/>
};

export default PointerLockControl;