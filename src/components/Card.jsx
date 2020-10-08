import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  flex: 1 0 30%;
  margin: 20px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardBackgroundLink = styled(Link)`
  background-color: #303030;
  height: 400px;
  width: 250px;
  color: white;
  text-decoration: none;
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.2);

  &:hover img {
    filter: brightness(0.8);
  }
`;

const Title = styled.h2`
  height: 100px;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Image = styled.img`
  transition: filter 0.5s;
  height: 100%;
  width: 100%;
`;

const Card = ({ title, image }) => (
  <Wrapper>
    <CardBackgroundLink to={`/home/anime/${title}`}>
      <Title>{title}</Title>
      <Image src={image} alt={title} />
    </CardBackgroundLink>
  </Wrapper>
);

export default Card;
