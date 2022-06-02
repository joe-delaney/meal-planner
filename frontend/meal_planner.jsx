import React from "react";
import ReactDOM from "react-dom";
import configureStroe from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to your Meal Planner!</h1>, root);
});