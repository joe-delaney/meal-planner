import React from "react";
import { Route } from "react-router-dom";
import SplashPage from "./splash_page/splash_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";


const App = () => (
  <div>
      <Route path="/" component={SplashPage}></Route>
  </div>
);

export default App;