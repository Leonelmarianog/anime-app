export default class Anime {
  constructor({
    title,
    image_url,
    synopsis,
    episodes,
    start_date,
    end_date,
    score,
    rated,
  }) {
    this.title = title;
    this.image_url = image_url;
    this.synopsis = synopsis;
    this.episodes = episodes;
    this.start_date = start_date;
    this.end_date = end_date;
    this.score = score;
    this.rated = rated;
  }
}
