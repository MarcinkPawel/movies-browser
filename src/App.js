import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { Nav } from "./common/Nav";
import { MovieTile } from "./features/movies/moviePage";
import { Person } from "./features/people/personPage";
import { Movies } from "./features/movies/moviePage/MoviesList";
import { People } from "./features/people/peoplePage";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";


export default () => (
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <HashRouter>
          <Nav />
          <Switch>
            <Route path={toMovie()}>
              <MovieTile/>
            </Route>
            <Route path={toMovies()}>
              <Movies/>
            </Route>
            <Route path={toPerson()}>
              <Person />
            </Route>
            <Route path={toPeople()}>
              <People />
            </Route>
            <Route>
              <Redirect to={toMovies()} />
            </Route>
          </Switch>
        </HashRouter>
    </ThemeProvider>
)

