import React, {useEffect, useRef, useState} from "react";
import SingleScene from "./Scenes/SingleScene";
import MultiScene from "./Scenes/MultiScene";

const Game = (props) => {
    let [scene, setScene] = useState();
    useEffect(() => {
        setScene(() => props.match.params.type === "single" ? <SingleScene/> : <MultiScene/>);
    }, [props.match.params.type]);
    return scene ? scene : <div/>;

};

export default Game;