import { baseURL, APIkey } from "../dataAPI";

export const getPopularMovies = async () => {
  const response = await fetch(
    `${baseURL}/movie/popular?api_key=${APIkey}&language=en-US&page=1`
  );

  const popularMovies = await response.json();
  return popularMovies;
};

export const getMovie = async (movieId) => {
    const response = await fetch(
        `${baseURL}/movie/${movieId}?api_key=${APIkey}&language=en-US`
    );

    const movie = await response.json();
    return movie;
};