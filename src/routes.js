import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Form from './pages/Form/Form';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/form" component={Form} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
