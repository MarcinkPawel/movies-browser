import React from "react";
import { PersonTile, PersonImage, FullName, FunctionName, StyledLink, PersonDetails } from "./styled";
import { imagesAPIw200 } from "../../getData";
import noPersonImage from "../../../images/noPersonImage.svg"

export const Person = ({ name, profile_path, role, id }) => {
  return (

    <StyledLink to={`/person/?id=${id}`} key={`${id}${role}`}>
    <PersonTile>
      <PersonImage src={profile_path ? `${imagesAPIw200}${profile_path}` : noPersonImage} alt={name} />
      <PersonDetails>
        <FullName>{name ? name : null}</FullName>
        <FunctionName>{role ? role : null}</FunctionName>
      </PersonDetails>
    </PersonTile>
    </StyledLink>
  );
};
