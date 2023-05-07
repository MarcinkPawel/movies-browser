import axios from "axios";

export const baseURL = "https://api.themoviedb.org/3";
export const APIkey = "api_key=79dae1642f2133ccb8691353190ab37b";
export const APIImageUrl = "https://image.tmdb.org/t/p";

const language = "&language=en-US";

export const getMovie = async (movieID) => {
    return axios
      .get(`${baseURL}/movie/${movieID}?${APIkey}${language}`)
      .then((response) => response.data);
  };
  
  export const getMovieCredits = async (movieID) => {
    return axios
      .get(`${baseURL}/movie/${movieID}/credits?${APIkey}${language}`)
      .then((response) => response.data);
  };
  
  export const getPopularMovies = async (page) => {
    return axios
      .get(`${baseURL}/movie/popular?${APIkey}${language}&page=${page}`)
      .then((response) => response.data);
  };
  
  export const getGenres = async () => {
    return axios
      .get(`${baseURL}/genre/movie/list?${APIkey}${language}`)
      .then((response) => response.data);
  };

  export const configuration = async () => {
    return axios
      .get(`${baseURL}/configuration?${APIkey}${language}`)
      .then((response) => response.data);
  };

  console.log(getMovie())