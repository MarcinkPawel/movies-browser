import React from "react";
import { useDispatch } from "react-redux";
import { Poster, Tile, Title, Year, Details } from "./styled";
import { Rating, Star, Rate, Votes } from "../../../common/Rating";
import { MovieGenre, MovieType } from "../MovieGenre";
import { fetchMovieDetailsAndCredits } from "./movieDetailsSlice";
import { getMovieID } from "../moviesSlice";
import { APIImageUrl } from "../../getData";
import star from "../../../images/star.svg";
import Video from "../../../images/Video.svg";

export const MovieTile = ({
  movieDetails,
  movie,
  id,
  posterSizes,
  title,
  release_date,
  poster_path,
  genre_ids,
  vote_average,
  vote_count,
}) => {
  const dispatch = useDispatch();

  const dispatchMvoieDetailsHandler = () => {
    dispatch(getMovieID(id));
    dispatch(fetchMovieDetailsAndCredits());
  };

  return (
    <Tile to={`/movies/${id}`} onClick={dispatchMvoieDetailsHandler}>
      <Poster
        source={
          poster_path
            ? `${APIImageUrl}/${
                posterSizes ? posterSizes[3] : ""
              }${poster_path}`
            : Video
        }
        alt=""
      />
      <Details>
        <Title movie title={title} />
        <Year release_date={release_date} />
        <MovieGenre>
          <MovieType movie={movie} genre_ids={genre_ids} />
        </MovieGenre>
        <Rating movieDetails={movieDetails}>
          <Star src={star} alt="" />
          <Rate movieDetails={movieDetails}>
            <span>
              {vote_average !== undefined ? vote_average.toFixed(1) : null}
            </span>
            <span>{movieDetails ? `/ 10` : null}</span>
          </Rate>
          <Votes movieDetails={movieDetails}>{vote_count} votes</Votes>
          {/* <Star src={star} />
          <Rate>4,4</Rate>
          <Votes>23 votes</Votes> */}
        </Rating>
      </Details>
    </Tile>
  );
};
