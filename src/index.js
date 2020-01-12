import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import Index from './pages/index';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="*">
                <h1>LO LAMENTAMOS, TU PAGINA NO HA SIDO ENCONTRADA</h1>
            </Route>
            {/* <Route path="/singin" component={<SingIn/>} />
            <Route path="/singOut" component={<SingOut/>} /> */}
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
