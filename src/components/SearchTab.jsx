import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Input = styled.input`
  background-color: #262626;
  border: none;
  height: 30px;
  width: 250px;
  margin-top: 20px;
  transition: background-color 0.2s;
  color: white;
  font-size: 15px;

  &:focus {
    background-color: #303030;
  }
`;

const SearchTab = ({ value, setSearchTerm }) => (
  <Input
    type="text"
    value={value}
    onChange={(event) => setSearchTerm(event.target.value)}
  />
);

SearchTab.propTypes = {
  value: PropTypes.string,
  setSearchTerm: PropTypes.func,
};

export default SearchTab;
