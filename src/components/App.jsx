import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { CacheProvider } from './CacheProvider.jsx';
import GlobalStyles from './GlobalStyles.jsx';
import BaseLayout from './BaseLayout.jsx';
import Home from './Home.jsx';
import Anime from './Anime.jsx';

const App = () => (
  <CacheProvider>
    <Router>
      <GlobalStyles />
      <BaseLayout>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/home/anime/:animeId'>
            <Anime />
          </Route>
        </Switch>
      </BaseLayout>
    </Router>
  </CacheProvider>
);

export default App;
