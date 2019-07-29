import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  display: inline-block;
  input {
    height: 54px;
    width: 668px;
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
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
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
      <button type="submit">?</button>
    </Container>
  );
};

export default SearchBox;
