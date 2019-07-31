import React from "react";
import styled from "@emotion/styled";

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.color.grey};

  flex-wrap: wrap;
  margin-bottom: 16px;
  align-items: center;
  > * {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
  }
  .spacer {
    flex-grow: 100;
  }
`;

const FlexRow = props => {
  return <Row>{props.children}</Row>;
};

export default FlexRow;
