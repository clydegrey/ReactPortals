import React from "react";

const ShowingResultsMessage = ({ data }) => {
  const hasResults = data.Items && data.Items.length;
  return hasResults ? (
    <div>
      Showing <strong>{`${data.Items.length} of ${data.NumOfResults}`}</strong>{" "}
      Locations
    </div>
  ) : null;
};

export default ShowingResultsMessage;
