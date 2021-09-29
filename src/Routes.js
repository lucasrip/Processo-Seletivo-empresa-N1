import React from 'react';
import {Switch} from 'react-router-dom';
import Home from './pages/Home';
import Detalhes from '../src/pages/Detalhes';
import Route from './RoutesWrapper/Route';


export default function Routes()
{
    return(
        <Switch>
         <Route exact  path="/" component={Home} />
         <Route  exact  path="/detalhes" component={Detalhes} isPrivate  />
        </Switch>
    )
}