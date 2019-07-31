import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import NestedControl from "./NestedControl";

const scaleUpDown = keyframes`
    0%{
        transform:scale(1);
    }
    50%{
        transform:scale(.8);
    }
    80%{
        transform:scale(1.05);
    }
    100%{
        transform:scale(1);
    }
`;

const FieldSet = styled.fieldset`
  legend {
    user-select: none;
    font-size: 1.6rem;
  }
  label {
    margin-right: 2rem;
    display: inline-block;
    margin-top: 1.1rem;
    cursor: pointer;
  }
  input {
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
    &:focus + svg {
      filter: contrast(80%) brightness(70%);
      animation: ${scaleUpDown} 500ms ease;
      transform: none;
      transition: none;
    }
  }
  svg {
    margin-right: 0.6rem;
    fill: none;
    vertical-align: top;
    transition: all 0.2s ease 1s;
    transition-delay: 1s;
    max-width: 100%;
    circle {
      stroke-width: 1;
      stroke: #e2e2e2;
      &.hasErrors {
        stroke: ${props => props.theme.color.error};
      }
    }
    path.inner {
      stroke-width: 6;
      stroke-dasharray: 19;
      stroke-dashoffset: 19;
      stroke: #03539d;
    }
    path.outer {
      stroke-width: 1;
      stroke-dasharray: 57;
      stroke-dashoffset: 57;
      stroke: #03539d;
    }
  }
  input:checked:hover,
  input:checked {
  }
  input:checked + svg {
    path.inner {
      stroke-dashoffset: 38;
      transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
      transition-delay: 0.15s;
    }
    path.outer {
      stroke-dashoffset: 0;
    }
    path {
      transition: all 0.2s ease;
    }
  }
`;

const FormRadioButton = ({
  options,
  value,
  onChangeHandler,
  fieldCodeName,
  explanationText,
  errorMessage,
  hasErrors,
  fieldDisplayName
}) => {
  const optionTags = options.map(({ value: cbValue, text }) => {
    return (
      <label htmlFor={cbValue} key={cbValue}>
        <input
          onChange={e => onChangeHandler(e, fieldCodeName)}
          type="radio"
          value={cbValue}
          id={cbValue}
          name={fieldCodeName}
          checked={cbValue === value}
        />
        <svg width="25" height="25" viewBox="0 0 20 20">
          <circle
            className={`${hasErrors ? "hasErrors" : null}`}
            cx="10"
            cy="10"
            r="9"
          ></circle>
          <path
            d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
            className="inner"
          ></path>
          <path
            d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
            className="outer"
          ></path>
        </svg>
        <span>{text}</span>
      </label>
    );
  });

  return (
    <NestedControl
      hasErrors={hasErrors}
      errorMessage={errorMessage}
      explanationText={explanationText}
    >
      {() => (
        <FieldSet>
          <legend>{fieldDisplayName}</legend>
          {optionTags}
        </FieldSet>
      )}
    </NestedControl>
  );
};

export default FormRadioButton;
