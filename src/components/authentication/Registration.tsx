import React, {useEffect, useState} from "react";
import axios from 'axios';
import {endpoints} from "./AuthenticationPaths";
import {useHistory} from 'react-router-dom';
import "./Authentication.css";
import BackStepper from "../BackStepper";

interface Props {
    username? : any,
    password?: any,
    email?: any,
    confirm?: any
}


const Registration: React.FC<Props> = () => {
    const [stateUsername, setUsername] = useState<any>("");
    const [statePassword, setPassword] = useState<any>("");
    const [stateEmail, setEmail] = useState<any>("");
    const [confirmPassword, setConfirmPassword] = useState<any>("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [statusList, setStatusList] = useState<string[]>([]);
    const history = useHistory();


    useEffect(() => {
        if(stateUsername !== "" && statePassword !== "" && stateEmail !== "" && confirmPassword === statePassword) {
            setIsDisabled(false);
        }else{
            setIsDisabled(true);
        }
    }, [stateUsername, statePassword, stateEmail, confirmPassword]);


    const usernameChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const passwordChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const emailChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const confirmPasswordChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    const submitHandler = async () => {
        axios.post(endpoints.registration, {username: stateUsername, password: statePassword, email:stateEmail})
            .then(response => {
                if(response.status === 200){
                    setStatusList(["Successful Sign up!"]);
                    history.push("/login")
                }
            }).catch(error => setStatusList(["Something went wrong"]));
    };


    return <div className="auth-container">
            <BackStepper/>
            <div className="auth-title">
                <div className="title">Registration</div>
            </div>
            <div className="auth-form">
                <div className="auth-username">
                    <input className="username" onChange={usernameChangeHandler} value={stateUsername} placeholder="Username" type="text"/>
                </div>
                <div className="auth-password">
                    <input className="password" onChange={passwordChangeHandler} value={statePassword} placeholder="password" type="password" />
                </div>
                <div className="auth-password-confirm">
                    <input className="password-confirm" onChange={confirmPasswordChangeHandler} value={confirmPassword} placeholder="Confirm password" type="password" />
                </div>
                <div className="auth-email">
                    <input className="email" onChange={emailChangeHandler} value={stateEmail} placeholder="email" type="text" inputMode="email"/>
                </div>
                <button onClick={submitHandler} className="auth-submit btn-submit" type="submit" disabled={isDisabled}>Submit</button>
            </div>
            <div className="auth-status">{statusList}</div>
    </div>
};

export default Registration;