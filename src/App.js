import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import React from "react";
import MovieTile from "./components/MovieTile";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <p>Movies Browser</p>
      <MovieTile />
    </ThemeProvider>
  );
}

export default App;