import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import player from "./core";

ReactDOM.render(<App player={player} />, document.getElementById("app"));
