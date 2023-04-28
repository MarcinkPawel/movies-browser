import { Header, ErrorPicture, Wrapper } from "./styled";
import noResult from "../../images/noResult.svg";

export const NoResults = () => {
  return (
    <Wrapper>
      <Header>Sorry, there are no results for “Mulan”</Header>
      <ErrorPicture src={noResult} />
    </Wrapper>
  );
};
