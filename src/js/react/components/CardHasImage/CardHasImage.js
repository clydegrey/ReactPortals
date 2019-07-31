import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = styled.div`
  display: block;
  border: 1px solid #dbdbdb;
  margin-bottom: 20px;
  ${props => props.theme.breakpoint.tablet} {
    display: flex;
  }
  .media {
    width: 200px;
    flex: 0 0 200px;
    padding: 8px;
    img {
      max-width: 100%;
    }
  }
  .text {
    padding: 25px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    ${props => props.theme.breakpoint.mobileonly} {
      padding: 3%;
    }
    ${props => props.theme.breakpoint.tablet} {
      padding: 20px 9px;
    }
  }
  .buttons {
    ${props => props.theme.breakpoint.mobileonly} {
      padding: 3%;
    }
    padding: 25px;
    width: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    ${props => props.theme.breakpoint.tablet} {
      flex-direction: column;
      width: 235px;
    }
    div {
      margin-right: 15px;
      ${props => props.theme.breakpoint.tablet} {
        margin-right: 0;
      }
      &:last-of-type {
        margin-right: 0;
      }
    }
    a {
      ${props => props.theme.breakpoint.mobileonly} {
        padding: 12px 20px;
      }
      padding: 13px 26px;

      text-align: center;
      text-decoration: none;
      ${props => props.theme.breakpoint.tablet} {
        margin-bottom: 7px;
      }
    }
  }
`;

const CardHasImage = props => {
  return (
    <Card>
      {props.showImage ? (
        <div className="media">
          {" "}
          <img src={props.Image} alt="" />
        </div>
      ) : null}
      <div className="text">
        <h3>{props.Title}</h3>
        <div>
          <span>
            {props.Summary.map((text, i) => (
              <div key={i}>{text}</div>
            ))}
          </span>
        </div>
        <a
          className="has-icon"
          target={props.Link1Target}
          href={props.Link1Url}
        >
          {" "}
          <FontAwesomeIcon icon="map-marker-alt" />
          <span>{props.Link1Text}</span>
        </a>
      </div>
      <div className="buttons">
        {props.PrimaryButtonText && (
          <div>
            <a
              className="c-button c-button__full"
              href={props.PrimaryButtonUrl}
            >
              {" "}
              <FontAwesomeIcon icon="phone-alt" />
              <span>{props.PrimaryButtonText}</span>
            </a>
          </div>
        )}
        {props.SecondaryButtonText && (
          <div>
            <a
              className="c-button c-button__full c-button__secondary"
              href={props.SecondaryButtonUrl}
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

export default CardHasImage;
