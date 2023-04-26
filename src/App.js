import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { Nav } from "./components/Nav";
import { MovieTile } from "./components/MovieTile";
import { Person } from "./components/PersonTile";
import { Movies } from "./components/MoviesList";
import { People } from "./components/PopularPeople";
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

