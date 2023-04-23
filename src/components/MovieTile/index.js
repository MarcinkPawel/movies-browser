import { Poster, Tile, Title, Year } from "./styled";
import moviePoster from "../../images/poster.png";

const MovieTile = () => {
  return (
    <Tile>
      <Poster src={moviePoster} />
      <div>
        <Title>TITLE</Title>
        <Year>YEAR</Year>
      </div>
    </Tile>
  );
};

export default MovieTile;
