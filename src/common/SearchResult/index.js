import { Container, SearchInfo, ResultList } from "./styled";
import React from "react";

export const SearchResult = ({ title }) => {
  return (
    <Container>
      <SearchInfo> Search results for{title}</SearchInfo>
      <ResultList>

      </ResultList>
    </Container>
  );
};
