import axios from "axios";


const API_KEY = process.env.REACT_APP_TMDB_KEY;

export const getMovies = async () => {
  const res = await axios.get(
   `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );
  return res.data.results;
};
