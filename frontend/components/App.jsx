import React from "react";
import { Route } from "react-router-dom";
import SplashPageContainer from "./splash_page/splash_page_container";


const App = () => (
  <div>
      <Route path="/" component={SplashPageContainer}></Route>
  </div>
);

export default App;