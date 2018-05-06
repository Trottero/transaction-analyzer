import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Transactions from '../transaction/Transactions';

const Main = () => (
  <div className="col-md-10">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/transactions" component={Transactions} />
    </Switch>
  </div>
);

export default Main;

