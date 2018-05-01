import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Detail from './components/detail';
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
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/forget" exact component={ForgetPas} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
