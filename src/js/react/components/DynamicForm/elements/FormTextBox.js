import React, { useState, Fragment } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import NestedControl from "./NestedControl";

const TextArea = styled.textarea`
  height: 140px;
  border: 1px solid #e2e2e2;
  margin-top: 2rem;
  padding: 1.6rem;
  min-height: 60px;
  background-color: #fff;
  width: 100%;
  font-weight: 700;
  font-size: 1.6rem;
  color: #03539d;
  transition: border-color 0.2s ease-in-out;
  &:focus,
  &:hover {
    outline: none;
    border-color: ${props => props.theme.color.uiPrimary};
  }
  &.hasErrors {
    border-color: ${props => props.theme.color.error};
  }
`;

const Label = styled.label`
  display: block;
  position: absolute;
  top: 0;
  top: 1rem;
  left: 0;
  font-size: 1.6rem;
  transition: opacity 0.4s ease, top 0.4s ease;
  transition: all 0.2s ease-out;
  &.textarea {
    left: 1.6rem;
    top: 3.7rem;
  }
  &.isDirty,
  &.isFocused {
    font-size: 1.4rem !important;
    line-height: 1.46154;
    left: 0;
    top: -1.5rem;
    color: #333;
    &.textarea {
      top: -0.6rem;
      left: 0;
    }
  }
`;

const Input = styled.input`
  background-color: #fff;
  border:none;
  border-bottom: 0.0625rem solid #e2e2e2;
  padding: 1.2rem 0;
  width: 100%;
  font-weight: 700;
  font-size: 1.6rem;
  color: #03539d;
  transition: border-color 0.2s ease-in-out;
   &:hover {
     outline: none;
     border-color: ${props => props.theme.color.uiPrimary};
     background-color: #fff;
     transition: border-color .2s ease-in-out; */
  }
  &:focus {
     border-color: ${props => props.theme.color.uiPrimaryDark};
     outline: none;
   }
   &.hasErrors{
   border-color: ${props => props.theme.color.error};
  }
   `;

const FormTextBox = ({
  value,
  onChangeHandler,
  fieldCodeName,
  mode,
  errorMessage,
  hasErrors,
  explanationText,
  fieldDisplayName
}) => {
  const [focus, setFocus] = useState(false);
  const onFocusHandler = () => {
    setFocus(true);
  };
  const onBlurHandler = e => {
    setFocus(false);
    onChangeHandler(e, fieldCodeName);
  };

  return (
    <NestedControl
      hasErrors={hasErrors}
      errorMessage={errorMessage}
      explanationText={explanationText}
    >
      {() => (
        <Fragment>
          <Label
            className={`${mode === "multipleline" ? "textarea" : null} ${
              value ? "isDirty" : null
            } ${focus ? "isFocused" : null}`}
            key={`${fieldCodeName}l`}
            htmlFor={fieldCodeName}
          >
            {fieldDisplayName}
          </Label>
          {mode === "multipleline" ? (
            <TextArea
              key={`${fieldCodeName}i`}
              value={value || ""}
              onChange={e => onChangeHandler(e, fieldCodeName)}
              onBlur={e => onBlurHandler(e)}
              onFocus={onFocusHandler}
              id={fieldCodeName}
              type="text"
              className={`${hasErrors ? "hasErrors" : null}`}
            />
          ) : (
            <Input
              key={`${fieldCodeName}i`}
              value={value || ""}
              onChange={e => onChangeHandler(e, fieldCodeName)}
              onBlur={e => onBlurHandler(e)}
              onFocus={onFocusHandler}
              id={fieldCodeName}
              type="text"
              className={`${hasErrors ? "hasErrors" : null}`}
            />
          )}
        </Fragment>
      )}
    </NestedControl>
  );
};

export default FormTextBox;
