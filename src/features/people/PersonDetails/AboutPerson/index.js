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
  DetailsLine
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
          <DetailsLine constant>
            <Label>Date of birth:</Label>
            <Label constant disappear>Birth:</Label>
            <Info>{new Date(birthday).toLocaleDateString()}</Info>
          </DetailsLine>
          <DetailsLine constant>
            {birthplace ? (
              <>
                <Label constant>Place of birth:</Label>
                <Info> {birthplace} </Info>{" "}
              </>
            ) : null}
          </DetailsLine>
        </Details>
      </Content>
      <Description>{biography}</Description>
    </Tile>
  </Wrapper>
);