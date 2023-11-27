import axios from 'axios';

export const per_page = 40;

export async function fetchImages(searchQuery, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '34617221-40fb3a679d52688cd42ce20c8';

  const options = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    page,
    per_page,
  });

  const { data } = await axios.get(`${BASE_URL}?${options}`);
  return data;
}
