import React from 'react';
import {Switch, Route} from 'react-router-dom';
import TaskDashboard from './Components/TaskDashboard/TaskDashboard';
import Settings from './Components/Settings/Settings';

export default (
    <Switch>
        <Route exact path='/' component={TaskDashboard}/>
        <Route path='/settings' component={Settings}/>
    </Switch>
)