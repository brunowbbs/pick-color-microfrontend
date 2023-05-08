import { useState } from "react";
import { getColors, saveColors } from "../helpers/colors";

export const useColors = () => {
  const [color, setColor] = useState(getColors()[0] ?? "#000");
  const [colorList, setColorList] = useState(getColors());

  function handleSubmitColor(event) {
    event.preventDefault();

    const copyColors = [color, ...colorList];
    setColorList(copyColors);
    saveColors(copyColors);
  }

  function handleChangeColor(event) {
    setColor(event.target.value);
  }

  function handleClickClearColors() {
    setColor("#000000");
    setColorList([]);
    localStorage.removeItem("@colors");
  }

  return {
    color,
    colorList,
    handleChangeColor,
    handleSubmitColor,
    handleClickClearColors,
  };
};
