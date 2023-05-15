import React from 'react';
import { SearchStyled, InputStyled, Magnifier } from "./styled";
import magnifier from "../../../images/search.svg";
import { useLocation } from "react-router-dom";
import {
  useQueryParameters,
  useReplaceQueryParameters,
} from "../../../features/search/queryParameters";
import {
  pageQueryParamName,
  searchQueryParamName,
} from "../../../features/search/queryParamNames";
import { Results } from "../Results";
import { selectOpen } from "../../../features/search/searchSlice";
import { useSelector } from "react-redux";

export const Search = () => {
  const location = useLocation();
  const query = useQueryParameters(searchQueryParamName);
  const isOpen = useSelector(selectOpen);
  const replaceQueryParameters = useReplaceQueryParameters();
  const onInputChange = ({ target }) => {
    replaceQueryParameters([
      {
        key: searchQueryParamName,
        value: target.value.trim() !== "" ? target.value : undefined,
      },
      { key: pageQueryParamName },
    ]);
  };

  return (
    <SearchStyled>
      <Magnifier src={magnifier} />
      <InputStyled
        placeholder={`Search for ${
          location.pathname.includes("movies") ? "movies..." : "people..."
        }`}
        value={query ? query : ""}
        onChange={onInputChange}
      />
      {query && isOpen && <Results query={query} />}
    </SearchStyled>
  );
};

//Results Component jest jako test czy to w ogóle się odpali
