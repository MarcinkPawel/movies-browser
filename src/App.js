import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { toMovie, toPerson, toPopularMovies, toPopularPeople } from "./routes";
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
            <Route path={toMovie} element={<MovieTile />} />
            <Route path={toPerson} element={<Person />} />
            <Route path={toPopularMovies} element={<Movies />} />
            <Route path={toPopularPeople} element={<People />} />
            <Route path="/" element={<Movies />} />
          </Routes>
        </HashRouter>
    </ThemeProvider>
)

