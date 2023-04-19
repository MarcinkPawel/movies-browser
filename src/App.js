import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { MainTile } from "./Tile/index.js";
import { MovieContainer } from "./Container";
import { Person } from "./features/personTail";
import React from "react";
import MovieTileDetails from "./components/MovieTile";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <MovieContainer>
          <MainTile />
          <Person />
          <MovieTileDetails />
        </MovieContainer>
    </ThemeProvider>
  );
}

export default App;
