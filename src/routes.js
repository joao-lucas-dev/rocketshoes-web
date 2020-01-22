import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cart from './pages/Cart';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
}
