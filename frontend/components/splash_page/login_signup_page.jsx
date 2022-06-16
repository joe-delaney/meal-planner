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
    const loginSelected = visibleForm === "login" ? "selected-option" : "";
    const signupSelected = visibleForm === "signup" ? "selected-option" : "";
    const sessionHeader = visibleForm === "login" ? "Log into your account" : "Sign up for a new account"

    return (
        <div className="login-signup-page">
            <div className="login-signup-page-left">
                <div className="about-meal-planner">
                    <h1>What is Meal Planner?</h1>
                    <p className="app-description">Have you ever struggled to decide what to eat? Do you agonize over what groceries to get each week? Do you ever eat the same meal multiple nights in a row? If any of these sound familiar, don't worry because Meal Planner exists to make your weekly eating and cooking decisions easier!</p>
                </div>
            </div>
            <div className="login-signup-page-right">
                <div className="session-form-container">
                    <div className="form-options">
                        <span className={`form-option ${loginSelected}`} onClick={loginClicked}>Login</span>
                        <span className={`form-option ${signupSelected}`} onClick={signupClicked}>Signup</span>
                    </div>
                    <h2 className="session-header">{sessionHeader}</h2>
                    {form}
                </div>
            </div>
        </div>
    );
}

export default LogInSignUpPage;