import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Sorting from './entities/sortingVisualizer/sortingVisualizer';
import PathFindingVisualizer from './entities/graphVisualizer/graphVisualizer';



const Main = () => (
  <Switch>
    <Route path="/sorting" component={Sorting} />
    <Route path="/graphs" component={PathFindingVisualizer} />
  </Switch>
)

export default Main;