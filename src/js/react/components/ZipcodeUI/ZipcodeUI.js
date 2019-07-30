import React from "react";
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
  select {
    width: 64px;
    flex-grow: 0;
    margin: 0 10px;
    height:100%;
    background-size: 1.7rem,4.2rem 100%;
    background-position: calc(100% - 11px) 50%,100% 50%;
    padding:0 10px;
    /* background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' focusable='false' width='1em' height='1em' stroke='%23890C58' style='-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);' preserveAspectRatio='xMidYMid meet' viewBox='0 0 20 20'%3E%3Cpath d='M17.418 6.109a.697.697 0 0 1 .979 0 .68.68 0 0 1 0 .969l-7.908 7.83a.697.697 0 0 1-.979 0l-7.908-7.83a.68.68 0 0 1 0-.969.697.697 0 0 1 .979 0L10 13.25l7.418-7.141z' fill='%23626262'/%3E%3C/svg%3E");

    background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABQCAYAAAC+neOMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAA5tJREFUeJzt2s9rHGUYwPHvM9lpKjYQFENBEIzSelHwPxBMeuhNJYtxAioehKyiNw8ik148CFLqtpG9WEI6G38h1EhPQgTvnjVCD4pVPBg8eKhJ5vHS3Wzipju7O+/7TuH5nmZnZncePpmEd4eAZVmWZVmWZVmWZVmWZVmWZVnWEEmRk9I0jU6fOfPYvsgD5PkfjST5RUTU9XCuaq6tPRhFk7NM5Lf3pqd/euv8+duD3nNXqDRNo5mzZxuq+o4gD3cPKD9C/m5jaemrEub2VvPatScj5ENE5nt2/6Oqn8Qn4vder9f/Pu69x0K1Wq147/6pDYQXjjtHlZU3ll66MOLcXmu22/NRrtcRua/vCarbTERzjcXFX/sd7gvVarXi3VNTnwo8P3gEvdBIkpXiI/vvyvrGOY30usDJu52ncFMieaYfVnR0R7q1Vds9NZUVQwKQ9EqWrRSc2XtFkQAEZjXX71prnz9y9NghqHRrqzbz2+/rAgvDjVNNrGGQOgnM7tX2/od1CGrm1q0PEF4cbaxqYY2C1NOjuxO7m5du3Jjs7OhCfZRlT6jy9njjVQOr2W7Pj4EEgIg8VdvZea3zOurZWBCRQuuqAZcIitVst+dF+XocpJ66f4IOfvVUHi/hg+8UBqtkJODApAslogNXp0NexCtW+Uig8G9nu/eO+qGsCxzkB8sFEoCgXZPeO+ozhZ0yL3Tnk51iuUICEGh1trtQy0myI+jLqrpf9gVdYa1m2ZwrJJSPl5Pk287LQ+uoRpJsRsLivYC1mmVzObLpBAldf+hE7c3ePX2XA6tZtpArGyIy4WCIsb8bOkeK41fr9fqhm+XYdVNVsUIgwYDnUVXDCoUEBZ5wVgUrJBIUfBQcGuvy+sazRPpNKCQoCAXhsKqABENAgX+sqiDBkFDgD6tKSDACFLjH0jz6vkpIMCIUuMVS1X1HP4SRkGAMKHB9Z5Xd6EgwJhTcK1jjIUEJUFB1rPGRoCQoqCpWOUhQIhRUDas8JCgZCqqCVS4SOICC0FjlI4EjKAiF5QYJHEKBbyx3SOAYCnxhuUUCD1Dg/LuhcyTwBAWusPwggUcoKBvLHxJ4hoKysPwiQQAoGBfLPxIEgoJRscIgQUAoGBYrHBIEhoKiWGGRoM+/T/tuOUm+EOE5Vf3r6DFV3Ud5/8/t7VdCIkEF7qhOF69enY7jyQWBp4EY+FlEv1xOkpuhZ7Msy7Isy7Isy7IsyxrcfzNeLxtxSlaeAAAAAElFTkSuQmCC"
);
background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg width='1792' height='1792' viewBox='0 0 1792 1792' fill='#890c58' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z'/%3E%3C/svg%3E%0A"); */

background-repeat: no-repeat;
    cursor: pointer;
    transition: all .1s ease-out;
    -webkit-appearance: none!important;
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
        <button className="geo" type="button" onClick={populateZipFromGeo}>
          use my current location
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
          <select onChange={e => setRadius(e.target.value)}>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
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
