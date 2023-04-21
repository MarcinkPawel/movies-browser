import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { MainTileDetails } from "./Tile/index.js";
//import { Person } from "./features/personTail";
//import MovieTile from "./components/MovieTile";
import { HashRouter } from "react-router-dom";
import { Nav, Title, Video, List,  } from "./styled";
import video from "./images/video.svg";

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

          </List>
 
        </Nav>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
