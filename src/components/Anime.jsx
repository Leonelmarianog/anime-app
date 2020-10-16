import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useInstantFetch from "../hooks/instant-fetch/useInstantFetch.js";
import jikanApi from "../helpers/api.js";
import { fromJSONToAnimeEntity } from "../helpers/mappers";

const Anime = () => {
  const { animeId } = useParams();
  const { data, loading, error } = useInstantFetch(
    jikanApi,
    animeId,
    fromJSONToAnimeEntity
  );

  const page = data ? (
    <div>
      <h1>{data.title}</h1>
      <img src={data.imageUrl} alt={data.title} />
      <p>{data.synopsis}</p>
      <p>{data.episodes}</p>
      <p>{data.score}</p>
      <p>{data.rating}</p>
      <p>{data.trailerUrl}</p>
    </div>
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
