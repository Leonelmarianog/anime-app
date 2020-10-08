const BASE_URL = "https://api.jikan.moe/v3/search/anime?q=";

/**
 * @param {String} searchTerm
 * @param {Function} fetchMethod
 * @returns {Array<JSON>}
 */
async function getData(searchTerm, fetchMethod) {
  const response = await fetchMethod(`${BASE_URL}/${searchTerm}`);
  if (!response.ok) {
    throw new Error("Oops! Something went wrong!");
  }
  const data = await response.json();
  return data.results;
}

export default getData;
