import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { MainTileDetails } from "./Tile/index.js";
//import { Person } from "./features/personTail";
//import MovieTile from "./components/MovieTile";
import { HashRouter } from "react-router-dom";
import { Nav, Title, Video, List, Li, Search, Magnifier, InputStyled } from "./styled";
import video from "./images/video.svg";
import magnifier from "./images/search.svg";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle /> 
      <HashRouter>
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
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
