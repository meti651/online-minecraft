import React, {Suspense} from "react";
import Lights from "./Lights";
import Plane from "../backGround/Plane";
import PointerControls from "./PointerControls";

const Scene = () => {
    return (
        <>
            <PointerControls/>
            <Lights/>
            <Suspense fallback={null}>
                <Plane/>
            </Suspense>
        </>
    );
};

export default Scene;