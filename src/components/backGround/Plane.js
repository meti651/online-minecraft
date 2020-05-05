import React, {useEffect, useMemo, useRef, useState} from "react";
import axios from "axios";
import {endpoints} from "../ApiEndpoints";
import {gameTextures} from "../Constants";
import {Object3D, TextureLoader} from "three";
import {useFrame, useLoader} from "react-three-fiber";

const defaultCells = () => {
    const constans = 100;
    const offSet = constans/2;
    let blocks = [];
    // for(let y = 0; y < constans; y++)
    for(let x = 0; x < constans; x++){
        for(let z = 0; z < constans; z++){
            blocks.push({
                position: [x-offSet, 0, z-offSet]
            })
        }
    }
    return blocks;
};


const _object = new Object3D();

const Plane = () => {
    const [cells, setCells] = useState([]);
    const [side, top, bottom] = useLoader(TextureLoader, [gameTextures.dirtSide, gameTextures.dirtTop, gameTextures.dirtBottom]);
    const textures = [side, side, top, bottom, side, side];
    const materials = textures.map((texture, i) => <meshLambertMaterial key={texture.uuid + i} attachArray="material" color='white' map={texture}/>);


    useFrame(state => {
        let i = 0;
        cells.forEach(cell => {
            const id = i++;
            const [x, y, z] = cell.position;
            _object.position.set(x, y, z);
            _object.updateMatrix();
            ref.current.setMatrixAt(id, _object.matrix);
        });
        ref.current.instanceMatrix.needsUpdate = true;
    });

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

    const ref = useRef();
    const attrib = useRef();
    useFrame(state => {
        let i = 0;
        cells.forEach(cell => {
            const [x, y, z] = cell.position;
            const id = i++;
            _object.position.set(x, y, z);
            _object.updateMatrix();
            ref.current.setMatrixAt(id, _object.matrix)
        });
        ref.current.instanceMatrix.needsUpdate = true
    });

    return (
        <instancedMesh ref={ref} args={[null, null, 125000]}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]}>
                <instancedBufferAttribute ref={attrib} attachObject={['attributes']} args={[0]} />
            </boxBufferGeometry>
            {materials}
        </instancedMesh>
    )
};

export default Plane;