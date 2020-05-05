import React, {Suspense} from "react";
import Lights from "./Lights";
import Plane from "../backGround/Plane";

const GamePlane = () => {
    console.log("Scene");
    return (
        <React.Fragment>
            <Lights/>
            <Suspense fallback={null}>
                <Plane/>
            </Suspense>
        </React.Fragment>
    );
};

export default GamePlane;