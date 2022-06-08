import React from "react";
import { useState } from "react";

const SessionForm = ({processForm, receiveErrors, clearErrors, formType, errors}) => {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const {email, password} = userData;

    const handleInput = type => e => {
        setUserData({
            [type]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        // this.props.processForm(userData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={email}
                    onChange={handleInput("email")}
                />
                <input
                    type="text"
                    value={password}
                    onChange={handleInput("password")}
                />
                <input type="submit" value={formType}/>
            </form>
        </div>
    )
}

export default SessionForm;