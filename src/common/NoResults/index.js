import { Header, ErrorPicture, Wrapper } from "./styled";
import noResult from "../../images/noResult.svg";

export const NoResults = ({query}) => {
  return (
    <Wrapper>
      <Header>{`Sorry, there are no results for "${query}"`}</Header>
      <ErrorPicture src={noResult} />
    </Wrapper>
  );
};
