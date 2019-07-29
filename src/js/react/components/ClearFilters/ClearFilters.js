import React from "react";
import styled from "@emotion/styled";

const Container = styled.ul`
  list-style-type: non;
  margin: 0;
  padding: 0;
  display: flex;
  margin: 0 -20px;
  button {
    flex: 0 0 auto;
    margin: 0 20px;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;

const ClearFilters = ({ clearHandler, activeFilters }) => {
  const cb = i => (
    <button value={i} key={i} onClick={e => clearHandler(e)} type="button">
      <i>x </i> {i}
    </button>
  );
  const keys = Object.keys(activeFilters);
  const ui = keys.map(cb);
  return <Container>{ui}</Container>;
};

export default ClearFilters;
