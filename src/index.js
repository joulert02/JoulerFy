import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import './index.css';
import Index from './pages/index';
import homeLogueado from './pages/homeLogueado'
import SingIn from './pages/singIn'
import * as serviceWorker from './serviceWorker';

const isAuthenticated = false

const PrivateRoute = ({ component: Component, redirect, ...rest }) => (
    <Route {...rest} render={(props) => (
      isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/singin" component={SingIn} />
            <PrivateRoute path="/homelogueado" component={homeLogueado}/>
            {/* <Route path="/singOut" component={<SingOut/>} /> */}
            <Route path="*">
                <h1>LO LAMENTAMOS, TU PAGINA NO HA SIDO ENCONTRADA</h1>
            </Route>
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
