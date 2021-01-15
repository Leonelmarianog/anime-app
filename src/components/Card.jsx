import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardLink = styled(Link)`
  text-decoration: none;
  background-color: var(--primary-color);
  height: 400px;
  width: 250px;
  margin: 1em;
  border-radius: 5px;
  color: var(--text-color);
  box-shadow: 0.15em 0.15em 0.5em 0.15em rgba(0, 0, 0, 0.5);

  &:hover img {
    transform: scale(120%);
  }

  &:hover h2 {
    color: var(--link-color-hover);
  }
`;

const TitleContainer = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;

  & > h2 {
    font-size: var(--font-size);
    transition: color 0.2s;
  }
`;

const ImageContainer = styled.div`
  height: 80%;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0, 0.55, 0.45, 1);
  }
`;

const Card = ({ animeId, title, image }) => (
  <CardLink to={`/home/anime/${animeId}`}>
    <TitleContainer>
      <h2>{title}</h2>
    </TitleContainer>
    <ImageContainer>
      <img src={image} alt={title} />
    </ImageContainer>
  </CardLink>
);

Card.propTypes = {
  animeId: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
