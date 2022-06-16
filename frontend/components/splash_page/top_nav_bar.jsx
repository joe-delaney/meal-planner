import React from "react";

const TopNavBar = ({currentUser, logout}) => {

    const userName = currentUser ? (
        <span>Hi {currentUser.fname}</span>
    ) : null;

    const logoutButton = currentUser ? (
        <button onClick={logout}>Logout</button>
    ) : null;

    const navJustify = !currentUser ? "logged-out-justify" : "";

    return (
        <div className={`top-nav-bar ${navJustify}`}>
            {userName}
            <h1>Meal Planner</h1>
            {logoutButton}
        </div>
    )
}

export default TopNavBar;