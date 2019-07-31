import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import {
  FormSelect,
  FormTextBox,
  FormCheckBox,
  FormErrorLinks,
  FormRadioButton
} from "./elements";

const DynamicForm = props => {
  const { title, model, showErrorBox, validateForm } = props;
  // const elementsRef = useRef(model.map(() => createRef()));
  const [formState, formSetState] = useState({});
  const [inlineValidation, setInlineValidation] = useState(false);

  const onSubmitHandler = e => {
    e.preventDefault();
    props.onSubmitHandler(formState);
    setInlineValidation(true);
  };

  // useEffect(() => {
  //   if (showErrorBox && !inlineValidation) {
  //     setInlineValidation(true);
  //   }
  // }, [showErrorBox]);

  // const valInline = () => {
  //   validateForm(formState);
  // };

  // const memoizedCallback = useCallback(() => {
  //   validateForm(formState);
  // }, [formState]);

  // useEffect(() => {}, []);

  // useEffect(() => {
  //   if (inlineValidation) {
  //     // memoizedCallback();
  //     validateForm(formState);
  //   }
  // }, [formState, inlineValidation]);

  const onChangeHandler = (e, key) => {
    const value = e.target.value;
    const type = e.target.type;
    let checked;
    if (type === "checkbox") {
      checked = e.target.checked;
    }
    formSetState(s => {
      if (type === "checkbox") {
        // const currentVal = [...s[key]];
        let currentVal = s[key] ? s[key] : new Set();

        if (typeof currentVal === "string") {
          currentVal = currentVal.includes("|")
            ? currentVal.split("|")
            : [currentVal];

          currentVal = new Set(currentVal);
        }
        if (checked) {
          // currentVal[value] = true;
          currentVal.add(value);
        } else {
          // currentVal[value] = false;
          currentVal.delete(value);
        }

        currentVal =
          currentVal.size > 1
            ? [...currentVal].join("|")
            : [...currentVal].join("");

        return { ...s, [key]: currentVal };
      }

      return { ...s, [key]: value };
    });

    // setModel(s => {
    //   return { ...s, [key]: value };
    // });
  };

  // useEffect(()=>{},[props])

  // const getFormElement = fieldModel =>
  //   ({
  //     AccessibleSelection: (
  //       <FormSelect
  //         value={formState[fieldModel.fieldCodeName]}
  //         key={fieldModel.fieldCodeName}
  //         onChangeHandler={onChangeHandler}
  //         fieldCodeName={fieldModel.fieldCodeName}
  //         options={fieldModel.options || []}
  //         hasErrors={false}
  //         errorMessage={fieldModel.errorMessage}
  //         explanationText={fieldModel.explanationText}
  //       />
  //     ),
  //     AccessibleTextBox: (
  //       <FormTextBox
  //         value={formState[fieldModel.fieldCodeName]}
  //         key={fieldModel.fieldCodeName}
  //         onChangeHandler={onChangeHandler}
  //         fieldCodeName={fieldModel.fieldCodeName}
  //         mode={fieldModel.mode}
  //         hasErrors={fieldModel.hasErrors}
  //         errorMessage={fieldModel.errorMessage}
  //         explanationText={fieldModel.explanationText}
  //       />
  //     )
  //   }[fieldModel.fieldInput]);

  const UnsupportedFormElement = () => <span>Unsupported Form Element</span>;

  const getFormElement = fieldModel =>
    ({
      AccessibleSelection: FormSelect,
      DropDownListControl: FormSelect,
      AccessibleTextBox: FormTextBox,
      TextBoxControl: FormTextBox,
      AccessibleCheckBoxList: FormCheckBox,
      AccessibleRadioList: FormRadioButton
    }[fieldModel.fieldInput]);

  const renderForm = () =>
    model.map(fieldModel => {
      let key = fieldModel.fieldCodeName;

      const Dynamic = {
        FormElement: getFormElement(fieldModel) || UnsupportedFormElement
      };

      return (
        <div
          css={css`
            display: flex;
            margin: 0 -1.7rem;
          `}
          key={`${key}d`}
        >
          <Dynamic.FormElement
            value={formState[fieldModel.fieldCodeName]}
            key={fieldModel.fieldCodeName}
            onChangeHandler={onChangeHandler}
            fieldCodeName={fieldModel.fieldCodeName}
            options={fieldModel.options || []}
            mode={fieldModel.mode}
            hasErrors={fieldModel.hasErrors}
            errorMessage={fieldModel.errorMessage}
            explanationText={fieldModel.explanationText}
            fieldDisplayName={fieldModel.fieldDisplayName}
          />
        </div>
      );
    });

  return (
    <div>
      {showErrorBox ? <FormErrorLinks model={model} /> : null}
      <div
        css={theme => ({
          padding: theme.padding.forms
        })}
      >
        <form onSubmit={e => onSubmitHandler(e)}>
          {renderForm()}

          <button className="button btn btn-primary" type="submit">
            Submits
          </button>
        </form>
      </div>
      {JSON.stringify(formState)}
    </div>
  );
};

DynamicForm.propTypes = {
  model: PropTypes.array.isRequired,
  showErrorBox: PropTypes.bool.isRequired,
  validateForm: PropTypes.func.isRequired
};

export default DynamicForm;
