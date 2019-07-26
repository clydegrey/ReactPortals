import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";

const FormErrorLinks = ({ model }) => {
  useEffect(() => {
    item.current.focus();
  }, [model]);

  const item = useRef(null);
  const links = model
    .filter(el => el.hasErrors)
    .map((el, i) => {
      return (
        <li
          css={css`
            margin-bottom: 1.4rem;
          `}
          key={el.fieldCodeName}
        >
          <a
            ref={i === 0 ? item : null}
            css={theme => ({
              color: theme.color.error,
              backgroundImage: `repeating-linear-gradient(0deg, ${theme.color.error}, ${theme.color.error} 2px, transparent 2px, transparent 2em)`
            })}
            href={`#${el.fieldCodeName}`}
          >
            {el.errorMessage}
          </a>
        </li>
      );
    });
  return (
    <div
      className="eat-error-sum hide"
      id="eat-msg-global"
      role="alert"
      aria-atomic="true"
      css={theme => ({
        background: theme.color.greyLight,
        borderBottom: theme.border
      })}
    >
      <ul
        css={theme => ({
          padding: theme.padding.forms,
          margin: 0,
          listStyle: "none"
        })}
        className=""
      >
        {links}
      </ul>
    </div>
  );
};

FormErrorLinks.propTypes = {
  model: PropTypes.array.isRequired
};

export default FormErrorLinks;
