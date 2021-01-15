import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card.jsx';

const List = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const CardList = ({ data }) => {
  const cards = data.map((item, index) => (
    <Card key={`card-${index + 1}`} animeId={item.id} title={item.title} image={item.imageUrl} />
  ));
  return <List>{cards}</List>;
};

CardList.propTypes = {
  data: PropTypes.array,
};

export default CardList;
