import React from 'react';
import {  Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../pages/Home';
import Category from '../../pages/Category';
import Book from '../../pages/Book';



export const Routes = () =>(
    <Switch>
        <Route exact path="/" component={() => (
            <Redirect to="/Home"/>
        )}/>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/Category" component={Category}/>
        <Route exact path="/Book/:type" component={Book}/>
    </Switch>
    

)


export default Routes;