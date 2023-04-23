import { Header, ErrorPicture, Wrapper } from "./styled";
import noResult from "../../images/noResult.svg";

export const NoResults = () => {
  return (
    <Wrapper>
      <Header>Sorry, there are no results for “Muan”</Header>
      <ErrorPicture src={noResult} />
    </Wrapper>
  );
};
