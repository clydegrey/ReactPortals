import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chevron from "../../components/Chevron";
import styled from "@emotion/styled";

const FormContainer = styled.div`
font-size:14px;
margin-bottom:5px;
background-color: ${props => props.theme.color.grey};
padding:16px 14px 19px 9px;

  .inner {
    display: flex;
    align-items:center;
    height:40px;
  }
  .select-input{
    width: 64px;
    flex-grow: 0;
    margin: 0 10px;
    height:100%;
    position:relative;
    display: flex;
    align-items: center;
    background:#fff;
    .icon{
      position:absolute;
      right:9px;
      pointer-events:none;
      color:${props => props.theme.color.uiPrimary};
      top: 50%;
    transform: translateY(-50%));
    transform: translate(0, -50%);
    }
    select {
    border:1px solid ${props => props.theme.color.grey};
    border: 1px solid #DBDBDB;
    height:100%;
    padding:0 10px;
    width:100%;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: all .1s ease-out;
    -webkit-appearance: none!important;
    box-shadow: -2px 2px 2px 0 rgba(80,109,133,0.12);}
  }
  
  .text-input {
    flex-basis: 67px;
    display: flex;
    margin: 0 10px;
    input {
      width: 100%;
      padding: 0 11px;
      height: 40px;
      border: 1px solid #DBDBDB;
      border-radius: 3px;
      background-color: #FFFFFF;

      box-shadow: -2px 2px 2px 0 rgba(80,109,133,0.12);}
    }
  }
  button[type="submit"] {
    color: #fff;
    border: none;
    font-weight: bold;
    border-radius: 3px;
    background-color: ${props => props.theme.color.uiPrimary};
    font-size: 14px;
    padding: 12px 9px;
    text-transform: uppercase;
    transition:background-color:200ms ease;
    cursor:pointer;
    &:hover,
    &:focus{
      background-color:#5e043a;
    }
  }
  .geo{
    font-weight:bold;
    color: #0076A8;
    font-family: Gotham;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: -0.12px;
    line-height: 17px;
    background:none;
    border:none;
    padding:0;
    cursor:pointer;
  }
`;

const ZipcodeUI = ({
  updateLocationOptions,
  zipcode,
  handleZipInput,
  geoEnabled,
  errorGeoLocation,
  populateZipFromGeo
}) => {
  const geoLocationButtonUI = () => {
    if (!geoEnabled) {
      return null;
    }
    return errorGeoLocation ? (
      <div>{errorGeoLocation}</div>
    ) : (
      <div>
        <div>Or</div>
        <button
          className="c-button c-button__bare geo"
          type="button"
          onClick={populateZipFromGeo}
        >
          <FontAwesomeIcon icon="map-marker-alt" />
          <span>Use my current location</span>
        </button>
      </div>
    );
  };

  return (
    <FormContainer>
      <form onSubmit={updateLocationOptions}>
        <h3>See doctors in your area:</h3>
        <div className="inner">
          <span>Within</span>
          <div className="select-input">
            <select onChange={e => setRadius(e.target.value)}>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <FontAwesomeIcon className="icon" icon={["fal", "chevron-down"]} />

            {/* <Chevron /> */}
          </div>
          <span>miles of</span>
          <div className="text-input">
            <input value={zipcode} onChange={handleZipInput} type="text" />
          </div>
          <button type="submit">go</button>
        </div>
        <div>{geoLocationButtonUI()}</div>
      </form>
    </FormContainer>
  );
};

export default ZipcodeUI;
