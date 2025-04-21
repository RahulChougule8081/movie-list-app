import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query = '', page = 1) => {
  const endpoint = query
    ? `/search/movie?query=${encodeURIComponent(query)}`
    : '/movie/popular';

  const connector = endpoint.includes('?') ? '&' : '?';
  const url = `${BASE_URL}${endpoint}${connector}api_key=${API_KEY}&page=${page}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw err;
  }
};
