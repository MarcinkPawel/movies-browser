import { Icon, Info, Wrapper } from "./styled";
import iconspinner from "../../images/IconSpinner.svg"
import React from "react";
import { useQueryParameters } from "../../features/search/queryParameters";
import { searchQueryParamName } from "../../features/search/queryParamNames";

export const Loader = () => {
    const query = useQueryParameters(searchQueryParamName);

    return (
        <Wrapper>
            <Info>
                Search results for "{query}"
            </Info>
            <Icon src={iconspinner} />
        </Wrapper>
    );
}

