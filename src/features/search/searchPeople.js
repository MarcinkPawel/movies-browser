import { useDispatch, useSelector } from "react-redux"
import Pagination from "../../../common/Pagination"
import { selectSearchPeople } from "../searchSlice"
import { useQueryParameters } from "../queryParameters"
import { useHistory } from "react-router-dom"
import { useEffect } from "react"
import { fetchPersonById } from "../../peoplePage/personPage/personSlice"
import { Header, PeopleContainer, PersonLink, Wrapper } from "../people/peoplePage/styled"
import { Person } from "../people/personPage"
import { NoResults } from "../../common/NoResults"

export const SearchPeoplePage = () => {
  const { page, results, total_pages, total_results } = useSelector(selectSearchPeople);
  const searchParams = useQueryParameters("search");
  const history = useHistory();
  const id = useQueryParameters("id");
  const dispatch = useDispatch();
  
   useEffect(() => {
    const reload = () => {
      window.location.reload();
    };

    const unlisten = history.listen(() => {
      reload();
    });
    return () => {
      unlisten();
    };
  }, []);
  
  useEffect(() => {
    if (id && searchParams === null) {
      dispatch(fetchPersonById(id))
    }
  }, [searchParams, id]); 

  if (total_results === 0) return <NoResults query={searchParams} />
  else
    return (
      <Wrapper>
        <Header title={`Search results for "${searchParams}" (${total_results})`} />
        <PeopleContainer>
          {results.map(object => (
            <PersonLink key={object.id}>
              <Person
                name={object.name}
                profile_path={object.profile_path}
                id={object.id}
                role={object.known_for_department}
              />
            </PersonLink>
          )
          )}
        </PeopleContainer>
        <Pagination
          page={page}
          totalPages={total_pages}
        />
      </Wrapper>
    )
}