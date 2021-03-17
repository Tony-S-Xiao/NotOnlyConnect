import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Link to='/'>root</Link>
      <Link to='/landing-page'>landingPage</Link>
      <Link to='/game'>root</Link>
      <Switch>
        <Route path='/' exact>
          <div>root</div>
        </Route>
        <Route path='/landing-page' exact>
          <div>landing</div>          
        </Route>
        <Route path='/game' exact>
          <div>game</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
