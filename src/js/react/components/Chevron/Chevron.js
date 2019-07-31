import React from "react";
import styled from "@emotion/styled";

const Icon = styled.span``;

const Chevron = () => {
  return (
    <Icon className="icon">
      <svg
        width="16"
        height="16"
        version="1.1"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <g className="chevron__container">
          <line className="chevron__line1" x1="10" y1="50" x2="50" y2="50" />
          <line className="chevron__line2" x1="90" y1="50" x2="50" y2="50" />
        </g>
      </svg>
    </Icon>
  );
};

export default Chevron;
