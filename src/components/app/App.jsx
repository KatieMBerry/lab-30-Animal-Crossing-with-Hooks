import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllVillagers from '../../containers/AllVillagers';

export default function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AllVillagers} />

      </Switch>
    </BrowserRouter>
  );
}
