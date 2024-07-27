import axios from 'axios';

const API_KEY = 'd2ed0f858a3d94b70656ae92a2c7b7a0';
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getNowPlaying = () => tmdbApi.get('/movie/now_playing');
export const getPopular = () => tmdbApi.get('/movie/popular');
export const getTopRated = () => tmdbApi.get('/movie/top_rated');
export const getUpcoming = () => tmdbApi.get('/movie/upcoming');
export const getMovieDetails = (id) => tmdbApi.get(`/movie/${id}`);
