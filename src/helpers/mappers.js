import Card from "./Card";
import Anime from "./Anime";

/**
 * @param {Object}
 * @returns {import('./Anime.js')} - Anime Entity
 */
export function fromJSONToCardEntity({
  mal_id: id,
  title,
  image_url: imageUrl,
}) {
  return new Card({
    id,
    title,
    imageUrl,
  });
}

export function fromJSONToAnimeEntity({
  title,
  image_url: imageUrl,
  synopsis,
  episodes,
  score,
  rating,
  trailer_url: trailerUrl,
}) {
  return new Anime({
    title,
    imageUrl,
    synopsis,
    episodes,
    score,
    rating,
    trailerUrl,
  });
}
