import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { MainTileDetails } from "./Tile/index.js";
import { MovieContainer } from "./Container";
import { Person } from "./components/personTail";
import React from "react";
import MovieTile from "./components/MovieTile";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <MovieContainer>
          <MovieTile />
          <Person />
          <MainTileDetails />
        </MovieContainer>
    </ThemeProvider>
  );
}

export default App;
