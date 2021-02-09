import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllVillagers from '../../containers/AllVillagers';
import VillagerById from '../../containers/VillagerById';

export default function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AllVillagers} />
        <Route path="/:id" component={VillagerById} />
      </Switch>
    </BrowserRouter>
  );
}
