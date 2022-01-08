import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";



ReactDOM.render(<App />, document.getElementById("root"));

const header = document.createElement('h1')
header.innerText = "hello from the Header!"
