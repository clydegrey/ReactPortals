import React from "react";
import PropTypes from "prop-types";

const FormErrorMessage = ({ children }) => (
  <span
    css={theme => ({
      color: theme.color.error,
      fontSize: theme.fontSize.small,
      paddingTop: theme.padding.small,
      display: "block",
      width: "100%"
    })}
  >
    {children}
  </span>
);

export default FormErrorMessage;

FormErrorMessage.propTypes = {
  children: PropTypes.string
};
