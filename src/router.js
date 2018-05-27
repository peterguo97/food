import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Detail from './components/detail';

import List from './routes/my/list/ShoppingList';
import ListDetail from './routes/my/list/ListDetail';
import Order from './routes/my/list/Order';
import Shopping from './routes/my/shopping/Shopping';
import Aboutus from './routes/my/aboutus/Aboutus';
import Address from './routes/my/address/Address';
import Write from './routes/my/address/WriteAddress';
import Logistics from './routes/my/logistics/Logistics';
import Eval from './routes/my/eval/Eval';

// 注册登录
// import Login from "./routes/login/Login";
// import Register from "./routes/login/Register";
// import ForgetPas from "./routes/login/ForgetPas";


import SearchResult from './components/searchResult';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/:id/detail" component={Detail} />

        <Route path="/list" component={List} />
        <Route path="/listdetail/:id" component={ListDetail} />
        <Route path="/shopping" component={Shopping} />
        <Route path="/address" component={Address} />
        <Route path="/write/:id" component={Write} />
        <Route path="/aboutus" component={Aboutus} />
        <Route path="/logistics/:id" component={Logistics} />
        <Route path="/eval/:id" component={Eval} />
        <Route path="/order/:payment" component={Order} />
        {/* <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/forget" exact component={ForgetPas} /> */}

        <Route path='/search/:value' component={SearchResult} />

      </Switch>
    </Router>
  );
}

export default RouterConfig;
