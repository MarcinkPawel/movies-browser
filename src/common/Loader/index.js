import { Icon, IconWrapper } from "./styled";
import iconspinner from "../../images/IconSpinner.svg";
import React from "react";
import { useQueryParameters } from "../../features/search/queryParameters";
import { searchQueryParamName } from "../../features/search/queryParamNames";
import { Header, Wrapper } from "../../features/people/PeopleList/styled"

export const Loader = () => {
  const query = useQueryParameters(searchQueryParamName);

    return (
      <Wrapper>  
        <Header
          title={query ? `Search results for "${query}"` 
                : null}
        /> 
          <IconWrapper>
            <Icon src={iconspinner} />
          </IconWrapper>
      </Wrapper>
    );
};

