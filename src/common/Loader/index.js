import React from "react";
import { Icon, IconWrapper } from "./styled";
import iconspinner from "../../images/IconSpinner.svg";
import { Header, Wrapper } from "../../features/people/PeopleList/styled";

export const Loader = ({ searchWord }) => {
  <Wrapper>
    <Header title={`Search results for ${searchWord}`} />
    <IconWrapper>
      <Icon src={iconspinner} />
    </IconWrapper>
  </Wrapper>;
};
