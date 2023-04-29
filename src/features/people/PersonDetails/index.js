import React from "react"; 
import { AboutPerson } from "./AboutPerson";
import { Movies } from "../../movies/moviePage/MoviesList";
import { Wrapper } from "./styled";

export const PersonDetails = () => (
    <Wrapper>
        <AboutPerson />
        <Movies />
        <Movies />
    </Wrapper>
)