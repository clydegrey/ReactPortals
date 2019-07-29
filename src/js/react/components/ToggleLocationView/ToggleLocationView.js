import React from "react";

const ToggleLocationView = ({ view, onClickHandler }) => {
  return (
    <div>
      <button
        className={`bold c-button c-button__bare ${
          view === "map" ? "c-button__disabled" : null
        }`}
        onClick={() => onClickHandler("map")}
        type="button"
      >
        Map
      </button>
      <button
        className={`bold c-button c-button__bare ${
          view === "list" ? "c-button__disabled" : null
        }`}
        onClick={() => onClickHandler("list")}
        type="button"
      >
        List
      </button>
    </div>
  );
};

export default ToggleLocationView;
