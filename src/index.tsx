import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { itemsMap, player } from "./core";

ReactDOM.render(
    <App player={player} itemsMap={itemsMap} />,
    document.getElementById("app"),
);
