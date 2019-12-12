import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

//import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';

//import User from './Component/User';

import Router from './Router.js';


/*const routing = (
    <Router>
      <div>
        <Switch>
            <Route exact path="/" component={Card} />
        
            <Route path="/Profile" component={UserProfile} />
        
        </Switch>
      </div>
    </Router>
)*/

 



ReactDOM.render(<Router/>, document.getElementById('root'));



