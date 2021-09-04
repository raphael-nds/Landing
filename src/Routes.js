import React from'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import Home from './pages/Home'
import LP from './pages/Landingpage'

const Routes =  () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {LP} />
                <Route path="/Login"  component = {Home} />
            </Switch>
         </BrowserRouter>
    );
    
};


export default Routes;