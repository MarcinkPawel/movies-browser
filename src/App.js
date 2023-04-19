import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { Person } from "./features/personTail";
import React from "react";
import MovieTile from "./components/MovieTile";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Person />
      <MovieTile />
    </ThemeProvider>
  );
}

export default App;
