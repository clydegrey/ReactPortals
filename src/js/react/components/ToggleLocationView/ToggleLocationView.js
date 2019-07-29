import React from "react";

const ToggleLocationView = ({ onClickHandler }) => {
  return (
    <div>
      <button onClick={() => onClickHandler("map")} type="button">
        Map
      </button>
      <button onClick={() => onClickHandler("list")} type="button">
        List
      </button>
    </div>
  );
};

export default ToggleLocationView;
