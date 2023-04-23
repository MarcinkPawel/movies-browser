export const toPopularMovies = () => "/popular-movies";
export const toPopularPeople = () => "/popular-people";
export const toMovie = ({ id } = {id: ":id" }) => `/movie/${id}`;
export const toPerson = ({ id } = {id: ":id" }) => `/person/${id}`;