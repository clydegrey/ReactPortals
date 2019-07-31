import React from "react";

const FormExplanation = ({ children }) => (
  <div
    css={theme => ({
      paddingTop: theme.padding.small
    })}
    dangerouslySetInnerHTML={{ __html: children }}
  ></div>
);

export default FormExplanation;
