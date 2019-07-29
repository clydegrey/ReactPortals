import React from "react";
import styled from "@emotion/styled";

const FieldSet = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  label {
    margin-right: 2rem;
    display: inline-block;
    margin-bottom: 1.1rem;
    cursor: pointer;
    user-select: none;
  }
  input {
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
  }
  svg {
    margin-right: 0.6rem;
    width: 15px;
    height: 15px;
    display: inline-block;
    border: 1px solid ${props => props.theme.color.uiPrimary};
    vertical-align: top;
    border-radius: 3px;
    transition: all 50ms;
    &.hasErrors {
      border-color: ${props => props.theme.color.error};
    }
  }
  input:checked:hover,
  input:checked {
  }
  input:checked + svg {
    border-color: ${props => props.theme.color.uiPrimary};
    background: ${props => props.theme.color.uiPrimary};
    transition-delay: 0.21s;
    .check-stroke {
      stroke-width: 7;
      transition: stroke-dashoffset 0.21s ease-out, stroke 0ms 0.21s;
      stroke-dashoffset: 0;
      stroke: #fff;
    }
  }
  .check-stroke {
    stroke: ${props => props.theme.color.uiPrimary};
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
  value,
  fieldCodeName,
  onChangeHandler,
  options,
  legend,
  hasErrors
}) => {
  const optionTags = options.map(({ Value: cbValue, Name: text }) => {
    let checkedController = false;
    if (value && "has" in value) {
      checkedController = value.has(cbValue);
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
      <legend>{legend}</legend>
      {optionTags}
    </FieldSet>
  );
};

export default FormCheckBox;
