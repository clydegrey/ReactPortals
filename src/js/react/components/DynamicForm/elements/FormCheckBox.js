import React from "react";
import styled from "@emotion/styled";
import NestedControl from "./NestedControl";

const FieldSet = styled.fieldset`
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
  }
  svg {
    margin-right: 0.6rem;
    width: 25px;
    height: 25px;
    display: inline-block;
    border: 1px solid #e2e2e2;
    vertical-align: top;
    border-radius: 3px;
    transition: all 50ms;
    &.hasErrors {
      border-color: ${props => props.theme.color.error};
    }
  }
  input:checked:hover,
  input:checked {
    box-shadow: 0 0 10px green;
  }
  input:checked + svg {
    border-color: #03539d;
    background: #03539d;
    transition-delay: 0.21s;
    .check-stroke {
      stroke-width: 7;
      transition: stroke-dashoffset 0.21s ease-out, stroke 0ms 0.21s;
      stroke-dashoffset: 0;
      stroke: #fff;
    }
  }
  .check-stroke {
    stroke: #03539d;
    fill: none;
    stroke-linecap: round;
    stroke-dasharray: 100% 200%;
    stroke-dashoffset: 100%;
    transition: none;
  }
  input:focus:not(:checked) + svg {
    background: #e2e2e2;
    outline: none;
  }
`;

const FormCheckBox = ({
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
    let checkedController = false;
    if (value && typeof value === "string") {
      checkedController = new Set(value.split("|")).has(cbValue);
    }
    return (
      <label htmlFor={cbValue} key={cbValue}>
        <input
          onChange={e => onChangeHandler(e, fieldCodeName)}
          type="checkbox"
          value={cbValue}
          id={cbValue}
          checked={checkedController}
        />
        <svg
          className={`${hasErrors ? "hasErrors" : null}`}
          viewBox="-281 373 48 48"
        >
          <path
            className="check-stroke"
            d="M-273.2,398.2l10,9.9 l22.4-22.3"
          ></path>
        </svg>
        <span>{text}</span>
      </label>
    );
  });

  return (
    // <NestedControl
    //   hasErrors={hasErrors}
    //   errorMessage={errorMessage}
    //   explanationText={explanationText}
    // >
    //   {() => (
    //     <FieldSet>
    //       <legend>{fieldDisplayName}</legend>
    //       {optionTags}
    //     </FieldSet>
    //   )}
    // </NestedControl>
    <FieldSet>
      <legend>{fieldDisplayName}</legend>
      {optionTags}
    </FieldSet>
  );
};

export default FormCheckBox;
