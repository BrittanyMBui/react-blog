import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../components/Homepage';
import About from '../components/About';
import OnionForm from '../components/OnionForm';

export default (
    <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/about' component={About} />
        <Route path='/addonion' component={OnionForm} />
    </Switch>
)