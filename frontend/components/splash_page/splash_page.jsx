import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import React from "react";
import { useState } from "react";

const SplashPage = ({logout, currentUser}) => {
    const [visibleForm, changeForm] = useState("login")

    const loginClicked = e => {
        changeForm("login");
    }

    const signupClicked = e => {
        changeForm("signup");
    }

    const form = visibleForm === "login" ? <LoginFormContainer/> : <SignupFormContainer/>;

    const display = currentUser ? (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div>
            {form}
            <button onClick={loginClicked}>Login</button>
            <button onClick={signupClicked}>Signup</button>
        </div>
    )

    return display;
}

export default SplashPage;