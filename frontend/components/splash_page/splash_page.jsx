import LogInSignUpPage from "./login_signup_page";
import React from "react";
import TopNavBar from "./top_nav_bar";

const SplashPage = ({logout, currentUser}) => {

    const display = currentUser ? (
        null
    ) : <LogInSignUpPage/>

    return (
        <div>
            <TopNavBar
                currentUser={currentUser}
                logout={logout}
            />
            {display}
        </div>
    );
}

export default SplashPage;