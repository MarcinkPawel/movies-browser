import React from "react";
import { Container, SearchInfo, ResultList } from "./styled";


export const SearchResult = ({ title }) => {
  return (
    <Container>
      <SearchInfo> Search results for{title}</SearchInfo>
      <ResultList></ResultList>
    </Container>
  );
};
