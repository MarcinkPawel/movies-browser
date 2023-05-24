import React from "react";
import { Icon, Wrapper } from "./styled";
import iconspinner from "../../images/IconSpinner.svg";

export const Loader = () => {
  return (
    <Wrapper>
      <Icon src={iconspinner} />
    </Wrapper>
  );
};
