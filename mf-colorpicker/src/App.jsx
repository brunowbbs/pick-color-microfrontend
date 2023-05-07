import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ColorPicker from "./components/color-picker";

const App = () => (
  <div className="container">
    <ColorPicker />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
