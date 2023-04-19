import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { MainTile } from "./Tile/index.js";
import { MovieContainer } from "./Container";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <MovieContainer>
          <MainTile />
        </MovieContainer>
    </ThemeProvider>
  );
}

export default App;