import React from "react";
import {
  Tile,
  Image,
  Content,
  Title,
  Details,
  Label,
  Info,
  Description,
  Wrapper,
} from "./styled";
import { imagesAPIw400 } from "../../../getData";
import noPersonImage from "../../../../images/noPersonImage.svg";

export const AboutPerson = ({
  poster,
  name,
  birthday,
  birthplace,
  biography,
}) => (
  <Wrapper>
    <Tile>
      <Image src={poster ? `${imagesAPIw400}${poster}` : noPersonImage} />
      <Content>
        <Title>{name}</Title>
        <Details>
          <Label>Date of birth:</Label>
          <Info>{new Date(birthday).toLocaleDateString()}</Info>
          {birthplace ? (
            <>
              <Label>Place of birth</Label>
              <Info> {birthplace} </Info>{" "}
            </>
          ) : null};
        </Details>
      </Content>
      <Description>{biography}</Description>
    </Tile>
  </Wrapper>
);
