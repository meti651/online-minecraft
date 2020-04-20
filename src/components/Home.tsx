import React from "react";
import {Link} from "react-router-dom";

interface Props {

}

const Home: React.FC<Props> = () => {
    return <div className="home-container">
        <div className="home-title">
            <h1>Online Minecraft</h1>
        </div>
        <div className="home-btns">
            <Link to="/game/single" className="home-btn">Single Play</Link>
            <Link to="/game/multi" className="home-btn">Multi Play</Link>
            <Link to="/options" className="home-btn">Options</Link>
            <Link to="/registration" className="home-btn">Sign Up</Link>
            <Link to="/login" className="home-btn">Login</Link>
        </div>
    </div>;
};

export default Home;