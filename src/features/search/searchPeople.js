import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../../common/Pagination";
import { selectSearchPeople } from "../search/searchSlice";
import { useQueryParameters } from "./queryParameters";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPersonById } from "../people/PeopleSaga/personSlice";
import {
  Header,
  PeopleContainer,
  PersonLink,
  Wrapper,
} from "../people/PeopleList/styled";
import { Person } from "../people/personPage";
import { NoResults } from "../../common/NoResults";

export const SearchPeople = () => {
  const { page, results, total_pages, total_results } =
    useSelector(selectSearchPeople);
  const searchParams = useQueryParameters("search");
  const history = useHistory();
  const id = useQueryParameters("id");
  const dispatch = useDispatch();

  const [typingTimer, setTypingTimer] = useState(null);

  useEffect(() => {
    if (id && searchParams === null) {
      dispatch(fetchPersonById(id));
    } else {
      clearTimeout(typingTimer);
      if (searchParams !== null) {
        setTypingTimer(setTimeout(() => {}, 2000));
      }
    }
  }, [searchParams, id]);

  if (total_results === 0) return <NoResults query={searchParams} />;
  else
    return (
      <Wrapper>
        <Header
          title={`Search results for "${searchParams}" (${total_results})`}
        />
        <PeopleContainer>
          {results.map((object) => (
            <PersonLink key={object.id}>
              <Person
                name={object.name}
                profile_path={object.profile_path}
                id={object.id}
                role={object.known_for_department}
              />
            </PersonLink>
          ))}
        </PeopleContainer>
        <Pagination page={page} totalPages={total_pages} />
      </Wrapper>
    );
};
