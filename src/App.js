import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { MainTileDetails } from "./Tile/index.js";
import { MovieContainer } from "./Container";
import { Person } from "./features/personTail";
import React from "react";
import MoviesList from "./features/MoviesList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MovieContainer>
        <MoviesList />
        <Person />
        <MainTileDetails />
      </MovieContainer>
    </ThemeProvider>
  );
}

export default App;
