import React, {useRef, useState} from "react";
import {gameTextures} from "../../Constants";
import {TextureLoader} from "three";


const DirtBlock = ({position, children}) => {
    const mesh = useRef();
    return (
            <mesh position={position} ref={mesh} castShadow >
                {children}
            </mesh>
    )
};

export default DirtBlock;