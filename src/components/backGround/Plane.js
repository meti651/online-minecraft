import React, {useEffect, useRef, useState} from "react";
import {gameTextures} from "../Constants";
import {Object3D, TextureLoader} from "three";
import {useFrame, useLoader, useThree} from "react-three-fiber";
import * as signalR from "@aspnet/signalr";
import {HubConnection} from "@aspnet/signalr";

const defaultCells = () => {
    const constans = 350;
    const offSet = constans/2;
    let blocks = [];
    // for(let y = 0; y < constans; y++)
    for(let x = 0; x < constans; x++){
        let row = [];
        for(let z = 0; z < constans; z++){
            row.push({
                XPOS: x - offSet, YPOS: 0, ZPOS:z - offSet
            })
        }
        blocks.push(row);
    }
    return blocks;
};


const _object = new Object3D();

const Plane = () => {
    const { camera } = useThree();
    const [side, top, bottom] = useLoader(TextureLoader, [gameTextures.dirtSide, gameTextures.dirtTop, gameTextures.dirtBottom]);
    const textures = [side, side, top, bottom, side, side];
    const materials = textures.map((texture, i) => <meshLambertMaterial key={texture.uuid + i} attachArray="material" color='white' map={texture}/>);
    const [gameState, setGameState] = useState([]);
    const connection = useRef(HubConnection);

    useEffect(() => {
        connection.current = new signalR.HubConnectionBuilder().withUrl("https://localhost:5001/game").build();
        // if(connection.current.state === 0) {
        //     console.log("Connection is disabled with the server. Default plane reading...");
        //     setGameState(defaultCells);
        //     return;
        // }
        connection.current.on("ReceiveGameState", update);
        connection.current.start();
    }, []);

    const update = (state) => {
        console.log("Getting data...");
        setGameState(gameState => {
            const cells = JSON.parse(state);
            // camera.position.x = cells[10][10].XPOS;
            // camera.position.y = cells[10][10].YPOS + 1;
            // camera.position.z = cells[10][10].ZPOS;
            return cells;
        });

    };


    const ref = useRef();
    const attrib = useRef();

    useFrame(state => {
        let i = 0;
        gameState.forEach(cells => {
            cells.forEach(cell => {
                const x = cell.XPOS;
                const y = cell.YPOS;
                const z = cell.ZPOS;
                const id = i++;
                _object.position.set(x, y, z);
                _object.updateMatrix();
                ref.current.setMatrixAt(id, _object.matrix)
            });
            ref.current.instanceMatrix.needsUpdate = true;
        })
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