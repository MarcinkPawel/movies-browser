import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/styled";
import { MovieTile } from "./components/MovieTile";
import { Person } from "./components/PersonTile";
import { Movies } from "./components/MoviesList";
import { People } from "./components/PopularPeople";


export default () => (
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <HashRouter>
          <Nav />
          <Routes>
            <Route path="/movie" element={<MovieTile />} />
            <Route path="/person" element={<Person />} />
            <Route path="/popular-movies" element={<Movies />} />
            <Route path="/popular-people" element={<People />} />
            <Route path="/" element={<Movies />} />
          </Routes>
        </HashRouter>
    </ThemeProvider>
)

