export const getColors = () => {
  return JSON.parse(localStorage.getItem("@colors")) || [];
};

export const saveColors = (colorList) => {
  localStorage.setItem("@colors", JSON.stringify(colorList));
};
