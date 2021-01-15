import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useInstantFetch from '../hooks/instant-fetch/useInstantFetch.js';
import jikanApi from '../js/api/api.js';
import { fromJSONToAnimeEntity } from '../js/mapper/mappers';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2em;

  & > h1 {
    @media screen and (max-width: 600px) {
      & {
        font-size: var(--font-size);
      }
    }
  }

  & > img {
    border-radius: 10px;
    width: 250px;
    height: 400px;

    @media screen and (max-width: 600px) {
      & {
        width: 150px;
        height: 200px;
      }
    }
  }

  & > *:not(h1) {
    margin-bottom: 2em;
  }
`;

const InfoContainer = styled.div`
  background: var(--primary-color);
  padding: 1.5em;
  border-radius: 10px;
  width: 80%;
  line-height: 1.5em;
  box-shadow: 0.15em 0.15em 0.5em 0.5em rgba(0, 0, 0, 0.2);

  & > p {
    margin: 0;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  & > p {
    background: #ff9d00;
    padding: 1em;
    border-radius: 10px;
    box-shadow: 0.15em 0.15em 0.5em 0.5em rgba(0, 0, 0, 0.2);
    color: #000000;
    margin: 1em;
  }
`;

const IFrameContainer = styled.div`
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
    .split('&')
    .filter((element) => !element.includes('autoplay'))
    .join('&');

const Anime = () => {
  const { animeId } = useParams();
  const { data, loading, error } = useInstantFetch(jikanApi, animeId, fromJSONToAnimeEntity);

  const page = data ? (
    <Container>
      <h1>{data.title}</h1>
      <img src={data.imageUrl} alt={data.title} />
      <InfoContainer>
        <p>{data.synopsis}</p>
      </InfoContainer>
      <IconContainer>
        <p>Episodes: {data.episodes}</p>
        <p>Score: {data.score}</p>
        <p>Rating: {data.rating}</p>
      </IconContainer>
      {data.trailerUrl ? (
        <IFrameContainer>
          <IFrame
            title={`Trailer for ${data.title}`}
            src={withoutAutoPlay(data.trailerUrl)}
            frameBorder='0'
            allowFullScreen
          />
        </IFrameContainer>
      ) : null}
    </Container>
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
