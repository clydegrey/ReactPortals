import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  max-width: 300px;
  padding-left: 8px;

  .media {
    width: 200px;
    flex: 0 0 200px;
    padding: 8px;
    img {
      max-width: 100%;
    }
  }
  .text {
    padding: 0;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    margin-bottom: 20px;
  }
  .buttons {
    /* padding: 25px; */
    /* width: 235px; */
    flex-shrink: 0;
    display: flex;
    justify-content: flex-start;
    /* margin: 0 -5.5px; */
    max-width: 100%;
    overflow: hidden;
    div {
      margin-bottom: 5px;
    }
    a {
      padding: 13px 22px;
      margin-bottom: 7px;
      text-align: center;
      text-decoration: none;
      margin: 0 11px 0 0;
      display: inline-block;
      /* &:last-of-type {
        margin-right: 0;
      } */
    }
    div:last-child a {
      margin-right: 0;
    }
  }
`;

const InfoCardUI = props => {
  return (
    <Card>
      {/* <div className="media">
        {" "}
        <img src={props.Image} alt="" />
      </div> */}
      <div className="text">
        <h3>{props.Title}</h3>
        <div>
          <span>
            {props.Summary.map((text, i) => (
              <div key={i}>{text}</div>
            ))}
          </span>
        </div>
        <a href="{props.Link1Url}">Get Directions</a>
      </div>
      <div className="buttons">
        {props.PrimaryButtonText && (
          <div>
            <a
              className="c-button c-button__has-icon-l"
              href="tel:{props.PrimaryButtonUrl}"
            >
              {props.PrimaryButtonText}
            </a>
          </div>
        )}
        {props.SecondaryButtonText && (
          <div>
            <a
              className="c-button  c-button__secondary"
              href="{props.SecondaryButtonUrl}"
            >
              {props.SecondaryButtonText}
            </a>
          </div>
        )}
      </div>
    </Card>
  );

  // Address: "135b7311-d7e3-45da-966a-cef4a0174e84";
  // Fee: null;
  // Image: "https://maps.googleapis.com/maps/api/staticmap?center=26.5072630%2c-81.9131600&markers=color%3ared%7csize%3amid%7c26.5072630%2c-81.9131600&zoom=15&size=200x200&key=AIzaSyAWZQu-QpnjtZxwGOccr6B4yDTCdmc03g4";
  // Link1Text: null;
  // Link1Url: "https://www.google.com/maps/dir/9981+S.+HealthPark+Drive++Fort+Myers+FL+33908";
  // Link2Text: null;
  // Link2Url: null;
  // Link3Text: null;
  // Link3Url: null;
  // PrimaryButtonText: "239-343-2000";
  // PrimaryButtonUrl: "tell:2393432000";
  // Rating: null;
  // SecondaryButtonText: "View Details";
  // SecondaryButtonUrl: "/find-a-location/golisano-children’s-hospital-of-southwest-florida";
  // Subtitle: null;
  // Summary: "<span>9981 S. HealthPark Drive</span><span> Fort Myers, FL 33908</span>";
  // Title: "Golisano Children’s Hospital of Southwest Florida";
};

export default InfoCardUI;
