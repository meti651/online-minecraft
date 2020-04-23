import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {endpoints} from "../ApiEndpoints";
import DirtBlock from "../Game/blocks/DirtBlock";
import {gameTextures} from "../Constants";
import {TextureLoader} from "three";
import {useThree} from "react-three-fiber";

const defaultCells = () => {
    const constans = 20;
    const offSet = constans/2;
    let blocks = [];
    for(let x = 0; x < constans; x++){
        for(let z = 0; z < constans; z++){
            blocks.push({
                position: [x-offSet, 0, z-offSet]
            })
        }
    }
    return blocks;
};


const Plane = () => {
    const {invalidate} = useThree();
    const [cells, setCells] = useState([]);
    const [textures] = useState(() => [gameTextures.dirtSide, gameTextures.dirtSide, gameTextures.dirtTop, gameTextures.dirtBottom,  gameTextures.dirtSide, gameTextures.dirtSide].map(texture => {
        return new TextureLoader().load(texture, invalidate);
    }));


    useEffect(() => {
        console.log("Sending block request...");
        axios.get(endpoints.blocks)
            .then(response => {
                if(response.status === 200) setCells(response.data);
            }).catch(_ => {
                const defBlocks = defaultCells();
                setCells(defBlocks);
        })
    }, []);


    return (<group>
        {cells.length > 0 ? cells.map(block => {return <DirtBlock key={`${block.position[0]}${block.position[2]}`} position={block.position} textures={textures}/>;}) : null}
        </group>
    );
};

export default Plane;