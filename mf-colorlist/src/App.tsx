import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ColorList from "./components/color-list";

const App = () => (
  <ColorList colorList={[]} handleClickClearColors={() => {}} />
);
ReactDOM.render(<App />, document.getElementById("app"));
