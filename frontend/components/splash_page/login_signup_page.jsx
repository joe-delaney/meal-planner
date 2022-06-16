import React from "react";
import { useState } from "react";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";

const LogInSignUpPage = () => {
    const [visibleForm, changeForm] = useState("login")

    const loginClicked = e => {
        changeForm("login");
    }

    const signupClicked = e => {
        changeForm("signup");
    }

    const form = visibleForm === "login" ? <LoginFormContainer/> : <SignupFormContainer/>;

    return (
        <div>
            {form}
            <button onClick={loginClicked}>Login</button>
            <button onClick={signupClicked}>Signup</button>
        </div>
    );
}

export default LogInSignUpPage;