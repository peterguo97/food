import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Detail from './components/detail';
import SearchResult from './components/searchResult';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/:id/detail" component={Detail} />
        <Route path='/search/:value' component={SearchResult} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
