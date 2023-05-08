import React from "react";
import Swal from "sweetalert2";

type ColorListProps = {
  colorList: string[];
  handleClickClearColors: () => void;
};

const ColorList = ({
  colorList = [],
  handleClickClearColors,
}: ColorListProps) => {
  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Cor " + color.toUpperCase() + " copiada",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };

  if (!colorList.length) {
    return (
      <div className="alert alert-danger" role="alert">
        <span>Nenhuma cor cadastrada</span>
      </div>
    );
  }

  return (
    <div className="list-group text-center">
      {colorList.map((color, index) => (
        <button
          onClick={() => handleCopyColor(color)}
          key={index}
          type="button"
          aria-current="true"
          className="list-group-item list-group-item-action text-white"
          title="Copiar"
          style={{
            background: color,
            fontWeight: "bolder",
          }}
        >
          {color}
        </button>
      ))}
      {colorList.length && (
        <button
          // type="button"
          className="btn btn-danger mt-4"
          onClick={handleClickClearColors}
        >
          Limpar
        </button>
      )}
    </div>
  );
};
export default ColorList;
