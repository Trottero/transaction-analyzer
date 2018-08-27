import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Transactions from '../transaction/Transactions';
import Specificview from '../specificreciever/Specificview';

const Main = () => (
  <div className="page-wrapper">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/transactions" component={Transactions} />
      <Route exact path="/specificview" component={Specificview} />
    </Switch>
  </div>
);

export default Main;
