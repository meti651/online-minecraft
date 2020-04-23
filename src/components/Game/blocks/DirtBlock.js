import React, {useRef} from "react";
import {TextureLoader} from "three";
import {textures} from "../../Constants";


interface Props {
    position: number[]
}

const DirtBlock:React.FC<Props> = ({position}) => {
    const mesh = useRef();

    const loader = new TextureLoader();
    const top = loader.load(textures.dirtTop);
    const bottom = loader.load(textures.dirtBottom);
    const side = loader.load(textures.dirtSide);

    const materials = [
        <meshPhysicalMaterial key={"side1"} attach="material" map={side}/>,
        <meshPhysicalMaterial key={"bottom"} attach="material" map={bottom}/>,
        <meshPhysicalMaterial key={"side2"} attach="material" map={side}/>,
        <meshPhysicalMaterial key={"side3"} attach="material" map={side}/>,
        <meshPhysicalMaterial key={"side4"} attach="material" map={side}/>,
        <meshPhysicalMaterial key={"top"} attach="material" map={top}/>
    ];
    
    return <mesh {...position} ref={mesh} castShadow>
        {materials.map(material => material)}
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
    </mesh>
};

export default DirtBlock;