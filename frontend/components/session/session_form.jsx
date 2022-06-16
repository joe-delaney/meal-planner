import React from "react";
import { useState } from "react";

const SessionForm = ({processForm, receiveErrors, clearErrors, formType, errors}) => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        fname: "",
        lname: ""
    })

    const {email, password, fname, lname} = userData;

    const handleInput = type => e => {
        setUserData(params => ({
            ...params,
            [type]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(userData);
        processForm(userData);
    }

    let signupInputs = formType === "login" ? null : (
        <>
            <input 
                type="text"
                value={fname}
                onChange={handleInput("fname")}
                className="session-input"
            />
            <input
                type="text"
                value={lname}
                onChange={handleInput("lname")}
                className="session-input"
            />
        </>
    )

    return (
        <div>
            <form className="session-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={email}
                    onChange={handleInput("email")}
                    className="session-input"
                />
                <input
                    type="password"
                    value={password}
                    onChange={handleInput("password")}
                    className="session-input"
                />
                {signupInputs}
                <input 
                    type="submit" 
                    value={formType}
                    className="button session-button"/>
            </form>
        </div>
    )
}

export default SessionForm;