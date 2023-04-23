import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { toMovie, toPerson, toPopularMovies, toPopularPeople } from "./routes";
import { Nav } from "./components/Nav/styled";
import MovieTile from "./components/MovieTile";
import { Person } from "./components/personTaile";
import Movies from "./components/MoviesList";
import People from "./component/PopularPeople";


export default () => (
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <HashRouter>
          <Nav />
          <Switch>
            <Route path={toMovie}>
              <MovieTile />
            </Route>
            <Route path={toPerson}>
              <Person />
            </Route>
            <Route path={toPopularMovies}>
              <Movies />
            </Route>
            <Route path={toPopularPeople}>
              <People />
            </Route>
            <Route>
              <Redirect to={toPopularMovies} />
            </Route>
          </Switch>
        </HashRouter>
    </ThemeProvider>
)

