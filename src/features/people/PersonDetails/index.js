import React from "react"; 
import { AboutPerson } from "./AboutPerson";
import { Movies } from "../../movies/moviePage/MoviesList";
import { Pagination } from "../../../common/Pagination";

export const PersonDetails = () => (
    
    <>
        <AboutPerson />
        <Movies />
        <Pagination />
    </>
    
);