import React from "react";
import {
  Poster,
  Tile,
  Title,
  Year,
  Details,
  TileLink,
  DetailsBlock,
} from "./styled";
import { Rating, Star, Rate, Votes } from "../../../common/Rating";
import { MovieGenre, MovieType } from "../MovieGenre";
import noMovieImage from "../../../images/noMovieImage.svg";
import star from "../../../images/star.svg";
import { imagesAPI300x450 } from "../../getData";
import { Genres } from "../MovieGenre/genresList";

export const MovieTile = ({
  poster,
  title,
  date,
  id,
  genres,
  rate,
  voteCount,
}) => {
  const movieGenres = Genres.filter((genre) => genres.includes(genre.id));
  return (
    <TileLink to={`/movie/?id=${id}`} key={id}>
      <Tile>
        <Poster
          src={poster == null ? noMovieImage : `${imagesAPI300x450}${poster}`}
          alt={title}
        />
        <Details>
          <DetailsBlock>
            <Title>{title}</Title>
            <Year>{date ? date.toString().slice(0, 4) : null}</Year>
            <MovieGenre>
              {genres
                ? movieGenres.map((genre) => (
                    <MovieType key={genre.id}>{genre.name}</MovieType>
                  ))
                : null}
            </MovieGenre>
          </DetailsBlock>
          <Rating>
            {rate !== 0 && voteCount !== 0 ? (
              <>
                <Star src={star} />
                <Rate>{rate ? rate : null}</Rate>
                <Votes>{voteCount ? `${voteCount} votes` : null} </Votes>
              </>
            ) : (
              <Votes>No votes yet</Votes>
            )}
          </Rating>
        </Details>
      </Tile>
    </TileLink>
  );
};
