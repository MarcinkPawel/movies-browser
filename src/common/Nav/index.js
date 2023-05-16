import { Search } from "./SearchInput";
import {
  useQueryParameters,
  useReplaceQueryParameters,
} from "../../features/search/queryParameters";
import { useDispatch } from "react-redux";
import {
  fetchSearchMoviesList,
  fetchSearchPeopleList,
} from "../../features/search/searchSlice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovieById } from "../../features/movies/moviePage/movieSlice";
import { fetchPersonById } from "../../features/people/PersonDetails/personSlice";
import video from "../../images/Video.svg";
import {
  StyledLink,
  StyledNavLink,
  Wrapper,
  ContentWidth,
  Section,
  Title,
  Video,
  List,
} from "./styled";

export const Nav = () => {
  const dispatch = useDispatch();
  const replaceQueryParameters = useReplaceQueryParameters();
  const page = useQueryParameters("page");
  const query = useQueryParameters("search");
  const { pathname } = useLocation();
  const id = useQueryParameters("id");
  const onInputChange = ({ target }) => {
    if (target.value === "") {
      replaceQueryParameters({
        key: "search",
        value: "",
      });
    }
    replaceQueryParameters({
      key: "search",
      value: query !== "" ? target.value : null,
    });

    if (pathname.includes("/movie")) {
      dispatch(
        fetchSearchMoviesList({ query: target.value.trim(), page: page })
      );
    } else if (
      pathname.includes("id") &&
      pathname.includes("/movie") &&
      pathname.includes("search") === false
    ) {
      dispatch(fetchMovieById(id));
    } else if (
      pathname.includes("id") &&
      pathname.includes("search") === false
    ) {
      dispatch(fetchPersonById(id));
    } else
      dispatch(
        fetchSearchPeopleList({ query: target.value.trim(), page: page })
      );
  };

  useEffect(() => {
    if (pathname.includes("/movie")) {
      dispatch(fetchSearchMoviesList({ query: query, page: 1 }));
    } else dispatch(fetchSearchPeopleList({ query: query, page: 1 }));
  }, [query]);

  return (
    <Wrapper>
      <ContentWidth>
        <Section>
          <StyledLink to={"/movies"}>
            <Title>
              <Video src={video} />
              Movies Browser
            </Title>
          </StyledLink>
          <List>
            <li>
              <StyledNavLink to={"/movies"}>MOVIES</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={"/people"}>PEOPLE</StyledNavLink>
            </li>
          </List>
        </Section>
        <Search />
      </ContentWidth>
    </Wrapper>
  );
};
