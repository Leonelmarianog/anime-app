import Anime from "./Anime.js";

/**
 * @param {Object}
 * @returns {import('./Anime.js')} - Anime Entity
 */
function fromJSONToEntity({
  title,
  image_url,
  synopsis,
  episodes,
  start_date,
  end_date,
  score,
  rated,
}) {
  return new Anime({
    title,
    image_url,
    synopsis,
    episodes,
    start_date,
    end_date,
    score,
    rated,
  });
}

export default fromJSONToEntity;
