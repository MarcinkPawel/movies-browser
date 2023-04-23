import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { toMovie, toPerson, toPopularMovies, toPopularPeople } from "./routes";
import { Nav } from "./components/Nav/styled";



export default () => (
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <HashRouter>
          <Nav />
          <Switch>
            <Route path={toMovie}>
              {/* Movie */}
            </Route>
            <Route path={toPerson}>
              {/* Person */}
            </Route>
            <Route path={toPopularMovies}>
              {/* Popoular movies */}
            </Route>
            <Route path={toPopularPeople}>
              {/* Popular people */}
            </Route>
            <Route>
              <Redirect to={toPopularMovies} />
            </Route>
          </Switch>
        </HashRouter>
    </ThemeProvider>
)

