import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Detail from './components/detail';
import List from './components/my/list/ShoppingList';
import Shopping from './components/my/shopping/Shopping';
// 注册登录
import Login from "./routes/login/Login";
import Register from "./routes/login/Register";
import ForgetPas from "./routes/login/ForgetPas";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/:id/detail" component={Detail} />
        <Route path="/list" component={List} />
        <Route path="/shopping" component={Shopping} />

        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/forget" exact component={ForgetPas} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
