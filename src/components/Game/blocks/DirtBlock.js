import React, {useRef, useState} from "react";
import {gameTextures} from "../../Constants";
import {TextureLoader} from "three";


const DirtBlock = ({position}) => {
    const [textures] = useState(() => [gameTextures.dirtSide, gameTextures.dirtSide, gameTextures.dirtTop, gameTextures.dirtBottom,  gameTextures.dirtSide, gameTextures.dirtSide].map(texture => {
        return new TextureLoader().load(texture);
    }));

    const mesh = useRef();

    return (
            <mesh {...position} ref={mesh} castShadow >
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
                {textures.map(texture => <meshLambertMaterial key={texture.uuid} attachArray="material" color='white' map={texture}/>)}
            </mesh>
    )
};

export default DirtBlock;