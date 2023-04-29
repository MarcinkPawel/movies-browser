import React from "react";
import { Tile, Image, Content, Title, Details, Label, Info, Description} from "./styled";


export const AboutPerson = () => (
    <Tile>
      <Image src={""} alt="Plakat filmu" />
      <Content>
        <Title>Mulan</Title>
        <Details>
          <Label>Date of birth:</Label><Info>06.04.1989</Info> 
          <Label>Place of birth</Label><Info>Warsaw, Poland</Info>
        </Details>
        </Content>
        <Description>
          A young Chinese maiden disguises herself as a male warrior in order to
          save her father. Disguises herself as a male warrior in order to save
          her father. A young Chinese maiden disguises herself as a male warrior
          in order to save her father.
        </Description>
    </Tile>
);