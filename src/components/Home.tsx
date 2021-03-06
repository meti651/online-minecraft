import React from "react";
import {Link} from "react-router-dom";

import "./Home.css";

interface Props {
    setPlaying: (isPlaying: boolean) => void
}

const Home: React.FC<Props> = ({setPlaying}) => {
    return <div className="home-container">
        <div className="home-title">
            <div className="title">Online Minecraft</div>
        </div>
        <div className="home-btns">
            <Link to="/game/single" className="home-btn" onClick={() => setPlaying(true)}>Single Play</Link>
            <Link to="/game/multi" className="home-btn" onClick={() => setPlaying(true)}>Multi Play</Link>
            <Link to="/options" className="home-btn">Options</Link>
            <div className="home-auth">
                <Link to="/registration" className="home-btn">Sign Up</Link>
                <div className="spacer"/>
                <Link to="/login" className="home-btn">Login</Link>
            </div>
        </div>
    </div>;
};

export default Home;