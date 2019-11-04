import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
