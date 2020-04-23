import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {endpoints} from "../ApiEndpoints";

import "./Authentication.css";
import BackStepper from "../BackStepper";

interface Props {

}

const Login: React.FC<Props> = () => {
    const [username, setUsername] = useState<any>("");
    const [password, setPassword] = useState<any>("");
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const [statusList, setStatusList] = useState<string[]>([]);
    const history = useHistory();

    useEffect(() => {
        setStatusList([]);
        if(username === "" || password === "") {
            setStatusList(["Username and password must be filled"]);
            setIsDisabled(true);
        }
        else setIsDisabled(false);
    }, [username, password]);

    const usernameChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {setUsername(event.target.value)};
    const passwordChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {setPassword(event.target.value)};

    const submitHandler = () => {
        axios.post(endpoints.login, {username, password})
            .then(response => {
                if (response.status === 200) history.push("/");
            })
            .catch(error => {
                setStatusList(["Something went wrong"]);
            })
    };

    return <div className="auth-container">
        <BackStepper/>
        <div className="auth-title"><div className="title">Login</div></div>
        <div className="auth-form">
            <div className="auth-username">
                <input className="username" onChange={usernameChangeHandler} value={username} placeholder="Username" type="text"/>
            </div>
            <div className="auth-password">
                <input className="password" onChange={passwordChangeHandler} value={password} placeholder="Password" type="password"/>
            </div>
            <button type="submit" onClick={submitHandler} className="auth-submit" disabled={isDisabled}>Submit</button>
        </div>
        {statusList.length > 0 ?<div className="auth-status">{statusList}</div> : <div/>}
    </div>
};

export default Login;