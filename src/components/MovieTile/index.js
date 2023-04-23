import { Poster, Tile, Title, Year } from "./styled";
import moviePoster from "../../images/poster.png";

export const MovieTile = () => {
  return (
    <Tile>
      <Poster src={moviePoster} />
      <Title>TITLE</Title>
      <Year>YEAR</Year>
    </Tile>
  );
};

