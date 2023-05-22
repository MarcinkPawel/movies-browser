import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useQueryParameters } from "../../search/queryParameters";
import {
  fetchSearchPeopleList,
  selectSearchPeopleStatus,
} from "../../search/searchSlice";
import {
  fetchPopularPeople,
  selectPopularPeopleList,
  selectPopularPeopleStatus,
} from "../PeopleSaga/popularPeopleSlice";
import { useLocation } from "react-router-dom";
import { Person } from "../PersonTile";
import { Header, PeopleContainer, Wrapper, PersonLink } from "./styled";
import { Pagination } from "../../../common/Pagination";
import { Error } from "../../../common/Error";
import { Loader } from "../../../common/Loader";
import { SearchPeople } from "../../search/searchPeople";

export const People = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectPopularPeopleStatus);
  const peopleList = useSelector(selectPopularPeopleList);
  const statusSearchPeople = useSelector(selectSearchPeopleStatus);
  const location = useLocation().pathname;
  const searchQuery = useQueryParameters("search");
  const page = useQueryParameters("page");

  useEffect(() => {
    if (location.includes("movie") && location.includes("search"))
      dispatch(fetchSearchPeopleList({ query: searchQuery, page: page }));
    else dispatch(fetchPopularPeople(page));
  }, []);

  if (status === "error") {
    return <Error />;
  }
  if (statusSearchPeople === "error") return <Error />;
  if (status === "loading" && searchQuery === null) {
    return <Loader searchFor={"popular people"} />;
  }
  if (searchQuery !== null && statusSearchPeople === "loading")
    return <Loader searchFor={searchQuery} />;
  if (searchQuery !== null && statusSearchPeople === "success")
    return <SearchPeople />;
  if (status === "success" && searchQuery === null) {
    return (
      <>
        <Wrapper>
          <Header>Popular people</Header>
          <PeopleContainer>
            {peopleList.results.map((person) => (
              <PersonLink to={`/person/${person.id}`} key={`${person.id}`}>
                <Person
                  name={person.name}
                  profile_path={person.profile_path}
                  id={person.id}
                />
              </PersonLink>
            ))}
          </PeopleContainer>
          <Pagination
            page={peopleList.page}
            totalPages={peopleList.total_pages}
          />
        </Wrapper>
      </>
    );
  }
};