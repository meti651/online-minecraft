import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./components/Home";
import Registration from "./components/authentication/Registration";
import Login from "./components/authentication/Login";
import Game from "./components/Game/Game.js";
import BackGround from "./components/backGround/BackGround.js";

function App() {
  return (
      <React.Fragment>
      <BackGround/>
      <div className="main-container">
          <Router>
            <Route exact path="/" component={Home} />
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
            <Route path="/game/{:type}" component={Game} />
        </Router>
      </div>
      </React.Fragment>
  );
}

export default App;
