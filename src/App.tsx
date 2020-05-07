import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./components/Home";
import Registration from "./components/authentication/Registration";
import Login from "./components/authentication/Login";
import Game from "./components/Game/Game.js";
import BackGround from "./components/backGround/BackGround.js";

function App() {
    const [isPlaying, setIsPlaying] = useState(false);
  return (
      <React.Fragment>
          {/*<BackGround isPlaying={isPlaying}/>*/}
          <div className="main-container">
              <Router>
                  <Route exact path="/" component={() => <Home setPlaying={setIsPlaying}/>} />
                  <Route path="/registration" component={Registration} />
                  <Route path="/login" component={Login} />
                  <Route path="/game/:type" component={Game}/>
              </Router>
          </div>
      </React.Fragment>
  );
}

export default App;
