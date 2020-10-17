class JikanApi {
  constructor() {
    this.BASE_URL = "https://api.jikan.moe/v3";
  }

  async getAnimeBySearchTerm(searchTerm) {
    const url = `${this.BASE_URL}/search/anime?q=${searchTerm}`;
    return await this.getData(url);
  }

  async getAnimeById(animeId) {
    const url = `${this.BASE_URL}/anime/${animeId}`;
    return await this.getData(url);
  }

  async getData(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Oops! Something went wrong!");
    }
    const data = await response.json();

    if (data.results) {
      return data.results;
    } else {
      return data;
    }
  }
}

const jikanApi = new JikanApi();

module.exports = jikanApi;
