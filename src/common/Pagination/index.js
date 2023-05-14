import {
    Wrapper,
    Text,
    Number,
    Button,
    ButtonText,
  } from "./styled";
  import { BackArrow, ForArrow } from "./arrowsForBack";
  import React from "react";
  import { fetchPopularPeople } from "../../features/people/popularPeopleSlice";
  import { fetchPopularMovies } from "../../features/movies/popularMoviesSlice";
  import { useEffect } from "react";
  import {
    useQueryParameters,
    useReplaceQueryParameters,
  } from "../../features/search/queryParameters";
  import {
    fetchSearchMoviesList,
    fetchSearchPeopleList,
  } from "../../features/search/searchSlice";
  import { useLocation } from "react-router-dom";
  import { useDispatch } from "react-redux";
  
  export const Pagination = ({ page, totalPages }) => {
    const replaceQueryParameters = useReplaceQueryParameters();
    const dispatch = useDispatch();
    const query = useQueryParameters("search");
    const nextPage = page + 1;
    const lastPage = totalPages > 500 ? 500 : totalPages;
    const previousPage = page - 1;
    const firstPage = 1;
    const location = useLocation().pathname;
    useEffect(() => {
      replaceQueryParameters({
        key: "page",
        value: page,
      });
    }, []);
  
    const pageSwitch = (targetPage) => {
      if (
        location.includes("people") ||
        (location.includes("person") && query === null)
      )
        dispatch(fetchPopularPeople(targetPage));
      if (
        location.includes("people") ||
        (location.includes("person") && query != null)
      )
        dispatch(fetchSearchPeopleList({ query: query, page: targetPage }));
      if (location.includes("movie") && query === null)
        dispatch(fetchPopularMovies(targetPage));
      if (location.includes("movie") && query != null)
        dispatch(fetchSearchMoviesList({ query: query, page: targetPage }));
    };
  
    return (
      <>
        <Wrapper>
          <Button
            disabled={page === 1 ? true : false}
            onClick={() => pageSwitch(firstPage)}
          >
            <BackArrow disabled={page === 1 ? true : false} />
            <BackArrow mobile="true" disabled={page === 1 ? true : false} />
            <ButtonText>First</ButtonText>
          </Button>
          <Button
            disabled={page === 1 ? true : false}
            onClick={() => pageSwitch(previousPage)}
          >
            <BackArrow disabled={page === 1 ? true : false} />
            <ButtonText>Previous</ButtonText>
          </Button>
          <Text>Page </Text>
          <Number>{page}</Number>
          <Text>of </Text>
          <Number>{totalPages > 500 ? 500 : totalPages}</Number>
          <Button
            disabled={
              page === totalPages ? true : false || page === 500 ? true : false
            }
            onClick={() => pageSwitch(nextPage)}
          >
            <ButtonText>Next</ButtonText>
            <ForArrow
              disabled={
                page === totalPages ? true : false || page === 500 ? true : false
              }
            />
          </Button>
          <Button
            disabled={
              page === totalPages ? true : false || page === 500 ? true : false
            }
            onClick={() => pageSwitch(lastPage)}
          >
            <ButtonText>Last</ButtonText>
            <ForArrow
              disabled={
                page === totalPages ? true : false || page === 500 ? true : false
              }
            />
            <ForArrow
              disabled={
                page === totalPages ? true : false || page === 500 ? true : false
              }
            />
          </Button>
        </Wrapper>
      </>
    );
  };