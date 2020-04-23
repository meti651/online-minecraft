import React, {useRef, useState} from "react";
import {gameTextures} from "../../Constants";
import {TextureLoader} from "three";


const DirtBlock = ({position, textures}) => {


    const mesh = useRef();

    return (
            <mesh position={position} ref={mesh} castShadow >
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
                {textures.map(texture => <meshLambertMaterial key={texture.uuid} attachArray="material" color='white' map={texture}/>)}
            </mesh>
    )
};

export default DirtBlock;