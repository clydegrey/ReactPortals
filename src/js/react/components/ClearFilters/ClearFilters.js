import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";

const Container = styled.ul`
  list-style-type: non;
  margin: 0;
  padding: 0;
  display: flex;
  margin: 0 -20px;
  button {
    flex: 0 0 auto;
    font-size: 14px;
    margin: 0 20px;
    border: none;
    background: transparent;
    margin-bottom: 16px;
    cursor: pointer;
    svg {
      color: ${props => props.theme.color.uiPrimary};
    }
    &:focus,
    &:hover {
      color: ${props => props.theme.color.uiPrimary};
    }
  }
`;

const ClearFilters = ({ clearHandler, activeFilters }) => {
  const cb = i => (
    <button value={i} key={i} onClick={e => clearHandler(e)} type="button">
      <FontAwesomeIcon icon={["fal", "times-circle"]} /> {i}
    </button>
  );
  const keys = Object.keys(activeFilters);
  const ui = keys.map(cb);
  return <Container>{ui}</Container>;
};

export default ClearFilters;
