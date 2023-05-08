import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { Nav } from "./common/Nav";
import { Movie } from "./features/movies/moviesPage"
import { Movies } from "./features/movies/MoviesList";
import { People } from "./features/people/peoplePage";
import { PersonDetails } from "./features/people/PersonDetails";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";
import React from 'react';

export default () => (
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <HashRouter>
          <Nav />
          <Switch>
            <Route path={toMovie()}>
              <Movie/>
            </Route>
            <Route path={toMovies()}>
              <Movies/>
            </Route>
            <Route path={toPerson()}>
              <PersonDetails />
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

