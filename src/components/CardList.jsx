import React from "react";
import styled from "styled-components";
import Card from "./Card.jsx";

const List = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`;

const CardList = ({ data }) => {
  const cards = data.map((item, index) => (
    <Card key={`card-${index + 1}`} title={item.title} image={item.image_url} />
  ));
  return <List>{cards}</List>;
};

export default CardList;