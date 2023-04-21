import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { MainTileDetails } from "./Tile/index.js";
import { MovieContainer } from "./Container";
import { Person } from "./features/personTail";
import React from "react";
import MovieTile from "./components/MovieTile";
import { HashRouter } from "react-router-dom";
import { Nav } from "./styled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Nav>
          <GlobalStyle />
            <MovieContainer>
              <MovieTile />
              <Person />
              <MainTileDetails />
            </MovieContainer>
        </Nav>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
