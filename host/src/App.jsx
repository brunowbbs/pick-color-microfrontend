import React from "react";
import ReactDOM from "react-dom/client";
import ColorPicker from "colorPicker/ColorPicker";
import { useColors } from "colorPicker/useColors";
import ColorList from "colorList/ColorList";

import "./index.css";

const App = () => {
  const { color, colorList, handleSubmitColor, handleChangeColor } =
    useColors();

  return (
    <>
      <h1 className="text-center bg-dark text-white p-2">Color Picker</h1>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-4">
            <ColorList colorList={colorList} />
          </div>
          <div className="col-12 col-md-8">
            <ColorPicker
              color={color}
              colorList={colorList}
              handleSubmitColor={handleSubmitColor}
              handleChangeColor={handleChangeColor}
            />
          </div>
        </div>
      </div>
    </>
  );
};
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
