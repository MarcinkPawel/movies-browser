import { Nav, Title, Video, List, Li, Search, Magnifier, InputStyled } from "./styled";
import video from "./images/video.svg";
import magnifier from "./images/search.svg";

export const Nav = () => (
    <Nav>
          <Title>
            <Video src={video}/>
            Movies Browser
          </Title>
          <List>
            <Li>MOVIES</Li>
            <Li>PEOPLE</Li>
          </List>
          <Search>
            <Magnifier src={magnifier}/>
            <InputStyled
              placeholder={`Search for movies..`}
            />
          </Search>
        </Nav>
)