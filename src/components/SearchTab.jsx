import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  margin: 2em 0;
  border: none;
  background-color: var(--searchtab-bg-color);
  color: var(--text-color);
  font-size: var(--font-size);
  font-weight: bold;
  border-radius: 20px;
  padding: 0.5em;
  text-align: center;
  transition: background-color 0.2s;

  &:focus {
    background-color: var(--searchtab-bg-color-focus);
  }
`;

const SearchTab = ({ value, setSearchTerm }) => (
  <Input type='text' value={value} onChange={(event) => setSearchTerm(event.target.value)} />
);

SearchTab.propTypes = {
  value: PropTypes.string,
  setSearchTerm: PropTypes.func,
};

export default SearchTab;
