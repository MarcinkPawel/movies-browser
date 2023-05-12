import React from "react";
import { Tile, Image, Content, Title, Details, Label, Info, Description, Wrapper} from "./styled";


export const AboutPerson = () => (
    <Wrapper>
    <Tile>
      <Image src={""} alt="" />
      <Content>
        <Title>Person</Title>
        <Details>
          <Label>Date of birth: <Info>06.04.1989</Info></Label> 
          <Label>Place of birth: <Info>Warsaw, Poland</Info></Label>
        </Details>
        </Content>
        <Description>
          A young Chinese maiden disguises herself as a male warrior in order to
          save her father. Disguises herself as a male warrior in order to save
          her father. A young Chinese maiden disguises herself as a male warrior
          in order to save her father.
        </Description>
    </Tile>
    </Wrapper>
);