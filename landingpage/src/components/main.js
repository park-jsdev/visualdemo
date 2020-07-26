import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Sorting from './sortingVisualizer/sortingVisualizer';
import PathFindingVisualizer from './graphVisualizer/graphVisualizer';
import Contact from './contact';
import Login from './login';
import Register from './register';
import Admin from './admin';



const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/sorting" component={Sorting} />
    <Route path="/graphs" component={PathFindingVisualizer} />
    <Route path="/contact" component={Contact} />
    <Route path="/admin" component={Admin} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
  </Switch>
)

export default Main;