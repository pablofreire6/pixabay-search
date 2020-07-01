import { imagesPerPage, apiUrl, key } from "../config/config";

export async function getImages(term, currentPage) {
  const url = `${apiUrl}?key=${key}&q=${term}&per_page=${imagesPerPage}&page=${currentPage}`;

  const response = await fetch(url);
  const results = await response.json();

  return results;
}
