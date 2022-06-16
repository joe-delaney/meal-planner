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
        <diV>
            <input 
                type="text"
                value={fname}
                onChange={handleInput("fname")}
            />
            <input
                type="text"
                value={lname}
                onChange={handleInput("lname")}
            />
        </diV>
    )

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={email}
                    onChange={handleInput("email")}
                />
                <input
                    type="password"
                    value={password}
                    onChange={handleInput("password")}
                />
                {signupInputs}
                <input type="submit" value={formType}/>
            </form>
        </div>
    )
}

export default SessionForm;