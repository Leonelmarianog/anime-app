import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useInstantFetch from "../hooks/instant-fetch/useInstantFetch.js";
import jikanApi from "../js/api/api.js";
import { fromJSONToAnimeEntity } from "../js/mapper/mappers";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    display: block;
    margin-top: 30px;
  }

  & > *:last-child {
    margin-bottom: 30px;
  }
`;

const Title = styled.h1`
  @media screen and (max-width: 600px) {
    & {
      font-size: 20px;
    }
  }
`;

const Image = styled.img`
  border-radius: 10px;
`;

const TextContent = styled.div`
  background: #303030;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  line-height: 25px;
  letter-spacing: 1px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  background: #ff9d00;
  padding: 10px;
  border-radius: 10px;
  box-shadow: -5px -5px 0px 0px #ff8400 inset,
    5px 5px 0px 0px rgba(0, 0, 0, 0.2);
  color: #000000;
  margin: 20px;
`;

const IFrameWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 80%;
  padding-top: 40%;
`;

const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const withoutAutoPlay = (url) =>
  url
    .split("&")
    .filter((element) => !element.includes("autoplay"))
    .join("&");

const Anime = () => {
  const { animeId } = useParams();
  const { data, loading, error } = useInstantFetch(
    jikanApi,
    animeId,
    fromJSONToAnimeEntity
  );

  const page = data ? (
    <Wrapper>
      <Title>{data.title}</Title>
      <Image src={data.imageUrl} alt={data.title} />
      <TextContent>{data.synopsis}</TextContent>
      <IconContainer>
        <Icon>Episodes: {data.episodes}</Icon>
        <Icon>Score: {data.score}</Icon>
        <Icon>Rating: {data.rating}</Icon>
      </IconContainer>
      {data.trailerUrl ? (
        <IFrameWrapper>
          <IFrame
            title={`Trailer for ${data.title}`}
            src={withoutAutoPlay(data.trailerUrl)}
            frameBorder="0"
            allowFullScreen
          />
        </IFrameWrapper>
      ) : null}
    </Wrapper>
  ) : null;

  return (
    <React.Fragment>
      {page}
      {loading && <h1>Loading</h1>}
      {error && <h1>{error.message}</h1>}
    </React.Fragment>
  );
};

export default Anime;
