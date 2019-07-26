import React, { Fragment } from "react";
import styled from "@emotion/styled";
import NestedControl from "./NestedControl";

const Label = styled.label`
  width: 100%;
  margin: ${props => props.theme.margin.label};
  pointer-events: none;
`;
const Select = styled.select`
  border: ${props => props.theme.border};
  font-weight: ${props => props.theme.select.fontWeight};
  font-size: ${props => props.theme.select.fontSize};
  color: ${props => props.theme.color.uiPrimary};
  background-image: ${props => props.theme.select.backgroundImage};
  appearance: none;
  height: 4.5rem;
  padding: 0 5.4rem 0 1.6rem;
  border-radius: 3px;
  font-family: ${props => props.theme.fontFamily};
  background-size: 1rem, 4.2rem 100%;
  background-position: calc(100% - 11px) 50%, 100% 50%;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 100ms ease-out;
  &:hover {
    background-image: ${props => props.theme.select.hover.backgroundImage};
    border-color: ${props => props.theme.color.uiPrimary};
  }
  &:focus {
    background-image: ${props => props.theme.select.focus.backgroundImage};
    border-color: ${props => props.theme.color.uiPrimaryDark};
    outline: none;
  }
  &.hasErrors {
    border-color: ${props => props.theme.color.error};
  }
`;

const FormSelect = ({
  options,
  value,
  onChangeHandler,
  fieldCodeName,
  explanationText,
  errorMessage,
  hasErrors,
  fieldDisplayName
}) => {
  const optionTags = options.map(({ value, text }) => (
    <option key={value} value={value}>
      {text}
    </option>
  ));

  return (
    <NestedControl
      hasErrors={hasErrors}
      errorMessage={errorMessage}
      explanationText={explanationText}
    >
      {() => (
        <Fragment>
          <Label htmlFor={fieldCodeName}>{fieldDisplayName}</Label>
          <Select
            id={fieldCodeName}
            onBlur={e => onChangeHandler(e, fieldCodeName)}
            onChange={e => onChangeHandler(e, fieldCodeName)}
            value={value || ""}
            className={`${hasErrors ? "hasErrors" : null}`}
          >
            {!value && <option value>select an option</option>}
            {optionTags}
          </Select>
        </Fragment>
      )}
    </NestedControl>
  );
};

export default FormSelect;
