import React from "react";

const SearchBox = props => {
  return (
    <div className="">
      <input
        value={props.value}
        type="text"
        onChange={e => props.onChange(e)}
      />
    </div>
  );
};

export default SearchBox;
