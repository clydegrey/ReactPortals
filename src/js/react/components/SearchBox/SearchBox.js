import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  display: inline-block;
  height: 54px;
  max-width: 100%;
  input {
    height: 100%;
    width: 668px;
    max-width: 100%;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    background-color: #ffffff;
    padding: 18px 62px 18px 18px;
  }
  label {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    z-index: -1;
    font-size: 0;
  }
  button {
    position: absolute;
    top: 0;
    right: 2px;

    color: ${props => props.theme.color.uiPrimary};
    height: 50px;
    width: 50px;
    margin: 0;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1.4rem;

    /* font-size: 1.4rem; */
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
    border-radius: 0 3px 3px 0;
    &:hover,
    &:focus {
      background: ${props => props.theme.color.uiPrimary};
      color: #fff;
      outline: none;
    }
  }
`;

const id = new Date().toISOString();

const SearchBox = props => {
  return (
    <Container className="">
      <label htmlFor={id}>search</label>
      <input
        id={id}
        value={props.value}
        type="text"
        placeholder="Search for care facilities by location, type, or address"
        onChange={e => props.onChange(e)}
      />
      <button type="submit">
        <FontAwesomeIcon icon={["far", "search"]} />
      </button>
    </Container>
  );
};

export default SearchBox;
