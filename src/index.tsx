import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route, } from "react-router-dom";

import Dashboard from './template/Dashboard';
import Market from './Market';
import DividensChart from './Dividends';
import MarketDividends from './MarketDividends';
import MarketAnalysis from './MarketAnalysis';
import Stock from './Stock';
import MarketSectorAnalysis from './MarketSectorAnalysis';

render(
  <React.Fragment>
    <Dashboard>
      <Router >
        <Switch>
          <Route exact path="/market/:market/dividends/:id" component={DividensChart} />
          <Route exact path="/market/:market" component={Market} />
          <Route exact path="/market/:market/dividends" component={MarketDividends} />
          <Route exact path="/market/:market/analysis" component={MarketAnalysis} />
          <Route exact path="/market/:market/sector" component={MarketSectorAnalysis} />
          <Route exact path="/market/:market/:stock" component={Stock} />
        </Switch>
      </Router>
    </Dashboard>
  </React.Fragment>,
  document.getElementById('root'),
);