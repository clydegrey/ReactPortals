import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Details = styled.details`

  margin-bottom: 20px;
  background-color:${props => props.theme.color.grey};
  padding:0;
&.has-border{
  border:2px solid ${props => props.theme.color.grey};
}
&.has-padding{
  >div{
    padding: 6px 20px 13px 41px;
  }
}
&.is-button{
  border-radius:20px;

  &[open]{
    border-radius:0px;

  }
}
.chevron__line1, .chevron__line2 {
  stroke-width: 10;
  stroke-linecap: round;
  -webkit-transition: -webkit-transform 0.4s, stroke 0.4s;
  transition: transform 0.2s, stroke 0.2s;
}

.chevron__line1 {
  -webkit-transform-origin: 50px 50px;
  transform-origin: 50px 50px;
}
.chevron__line2 {
  -webkit-transform-origin: 50px 50px;
  transform-origin: 50px 50px;
}

 .chevron__container {
  -webkit-transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  -webkit-transform: translateY(-9px);
  transform: translateY(-9px);
}
.chevron__line1 {
  stroke: ${props => props.theme.color.uiPrimary};
  -webkit-transform: rotate(-40deg);
  transform: rotate(-40deg);
}
.chevron__line2 {
  stroke: ${props => props.theme.color.uiPrimary};
  -webkit-transform: rotate(40deg);
  transform: rotate(40deg);
}
  &[open]{
    border-color: ${props => props.theme.color.green};
    &>summary{
   .chevron__container{
  -webkit-transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  -webkit-transform: translateY(17px);
  transform: translateY(17px);
}
 .chevron__line1{
  stroke: ${props => props.theme.color.uiPrimary};
  -webkit-transform: rotate(40deg);
  transform: rotate(40deg);
}
 .chevron__line2 {
  stroke: ${props => props.theme.color.uiPrimary};
  -webkit-transform: rotate(-40deg);
  transform: rotate(-40deg);
}
    }
  }
  fieldset {
    border: none;
    padding:0;
    }
    legend{
      position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px; width: 1px;
  margin: -1px; padding: 0; border: 0;
    }
    summary{
      font-weight:600;
      position:relative;
      padding:10px 20px 10px 15px;
      user-select:none;
      display:flex;
      .summary-icon-container{
        display:flex;
        flex-wrap:nowrap;
        .icon{
        margin-right:11px;
      }
      }
      &:focus{
        outline:0;
      }
      &:hover{

        cursor:pointer;
      }
      &.disabled{
        pointer-events:none;
      }
    }
    summary::-webkit-details-marker {
    display: none;
  }

  }`;

const DetailsSummary = props => {
  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const classNames = [];
  props.border && classNames.push("has-border");
  props.padding && classNames.push("has-padding");
  props.isButton && classNames.push("is-button");
  // const windowWidth = props.windowWidth || null;
  // const mediatAttributes = {
  //   open: false,
  //   disabled: { border: "3px solid red" }
  // };
  // mediatAttributes.open = "";
  useEffect(() => {
    if (props.openat && props.windowWidth) {
      setOpen(props.openat <= props.windowWidth);
      setDisabled(props.disableat <= props.windowWidth);
    }
  }, [props.windowWidth]);

  return (
    <Details open={open} className={classNames.join(" ")}>
      <summary className={disabled ? "disabled" : null}>
        <div className="summary-icon-container">
          <span className="icon">
            <svg
              width="16"
              height="16"
              version="1.1"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <g className="chevron__container">
                <line
                  className="chevron__line1"
                  x1="10"
                  y1="50"
                  x2="50"
                  y2="50"
                />
                <line
                  className="chevron__line2"
                  x1="90"
                  y1="50"
                  x2="50"
                  y2="50"
                />
              </g>
            </svg>
          </span>
          <span>{props.summary}</span>
        </div>
      </summary>
      <div>{props.children}</div>
    </Details>
  );
};

export default DetailsSummary;
