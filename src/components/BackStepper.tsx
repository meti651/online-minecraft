import React from "react";
import {Link} from "react-router-dom";
import {images} from "./Constants";

import "./BackStepper.css";

interface Props {

}

const BackStepper: React.FC<Props> = () => {
    return <Link to="/" className="back-arrow"><img src={images.backArrow} alt="Back" className="back-image"/></Link>
};

export default BackStepper;