import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { Person } from "./features/personTail";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Person />
    </ThemeProvider>
  );
}

export default App;
