const ColorPicker = ({
  color,
  colorList,
  handleSubmitColor,
  handleChangeColor,
}) => {
  return (
    <form onSubmit={handleSubmitColor}>
      <input
        value={color}
        onChange={handleChangeColor}
        type="color"
        className="form-control"
        style={{ width: "100%", height: "300px" }}
        title="Selecione uma cor"
      />

      <div className="text-center">
        <h2 className="mt-3 fw-bolder">
          <div
            style={{
              width: "20px",
              height: "20px",
              background: color,
              display: "inline-block",
              margin: "0 1rem",
              borderRadius: "100%",
            }}
          ></div>
          {color}
        </h2>
        <button type="submit" className="btn btn-success">
          Salvar cor
        </button>
      </div>
    </form>
  );
};
export default ColorPicker;
