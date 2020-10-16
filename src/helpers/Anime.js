export default class Anime {
  constructor({
    title,
    imageUrl,
    synopsis,
    episodes,
    score,
    rating,
    trailerUrl,
  }) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.synopsis = synopsis;
    this.episodes = episodes;
    this.score = score;
    this.rating = rating;
    this.trailerUrl = trailerUrl;
  }
}
