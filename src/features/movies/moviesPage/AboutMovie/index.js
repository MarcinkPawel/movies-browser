import {
  Image,
  Content,
  Title,
  Year,
  Tile,
  Description,
  Details,
  Label,
  Info,
} from "./styled";
import { Rating, Star, Rate, Votes } from "../../Rating";
import { MovieGenre, MovieType } from "../../MovieGenre";
import poster from "../../../images/poster.png";
import star from "../../../images/star.svg";

export const AboutMovie = ({ aboutMovie }) => {
  return (
    <Tile>
      <Image src={poster} alt="Plakat filmu" />
      <Content>
        <Title>Mulan</Title>
        <Year>2020</Year>
        <Details>
          <Label>Production:</Label><Info>USA</Info> 
          <Label>Release date:</Label><Info>2009</Info>
        </Details>
        <MovieGenre gap={aboutMovie}>
          <MovieType>Action</MovieType>
          <MovieType>Adventure</MovieType>
          <MovieType>Action</MovieType>
        </MovieGenre>
        <Rating>
          <Star src={star} />
          <Rate>4,4</Rate>
          <Votes>23 votes</Votes>
        </Rating>
        </Content>
        <Description>
          A young Chinese maiden disguises herself as a male warrior in order to
          save her father. Disguises herself as a male warrior in order to save
          her father. A young Chinese maiden disguises herself as a male warrior
          in order to save her father.
        </Description>
      
    </Tile>
  );
};