import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  ${props => props.theme.breakpoint.mobileonly} {
    .hide-for-mobile {
      display: none;
    }
  }
`;

const ShowingResultsMessage = ({ data }) => {
  const hasResults = data.Items && data.Items.length;
  return hasResults ? (
    <Container>
      <span className="hide-for-mobile">Showing </span>
      <strong>{`${data.Items.length} of ${data.NumOfResults}`}</strong>{" "}
      Locations
    </Container>
  ) : null;
};

export default ShowingResultsMessage;
