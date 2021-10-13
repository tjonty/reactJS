
import ReactDOM from "react-dom";

import Clock from "./Clock";
import Timer from "./Timer";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div id="body">
    <Clock />
    <Timer />
  </div>,
  rootElement
);
