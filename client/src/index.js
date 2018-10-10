import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/dashboard" component={Dashboard}/>
        </App>
    </BrowserRouter>,
    document.querySelector('#root'));
registerServiceWorker();
