import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";

const Container = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  li {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
    justify-content: flex-end;
    .toggle {
      margin-left: 20px;
    }
    &:first-of-type {
      .toggle {
        margin-left: 0;
      }
    }
    .toggle {
      font-size: 14px;
      color: ${props => props.theme.color.uiPrimary};
      font-weight: bold;
    }
    ${props => props.theme.breakpoint.mobileonly} {
      .c-button__disabled {
        display: none;
      }
    }
  }
`;

const ToggleLocationView = ({ view, onClickHandler }) => {
  return (
    <Container>
      <li>
        <button
          className={`toggle bold c-button c-button__bare ${
            view === "map" ? "c-button__disabled" : null
          }`}
          onClick={() => onClickHandler("map")}
          type="button"
        >
          <FontAwesomeIcon icon={["far", "map"]} />
          <span>Map View</span>
        </button>
      </li>
      <li>
        <button
          className={`toggle bold c-button c-button__bare ${
            view === "list" ? "c-button__disabled" : null
          }`}
          onClick={() => onClickHandler("list")}
          type="button"
        >
          <FontAwesomeIcon icon="list" />
          <span>List View</span>
        </button>
      </li>
    </Container>
  );
};

export default ToggleLocationView;
