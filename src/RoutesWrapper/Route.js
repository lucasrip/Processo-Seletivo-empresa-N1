import {Route,Redirect} from 'react-router-dom';
import React,{useContext} from 'react';
import { Context } from '../Context/Auth';

export default function RouteWrapper({
    component:Component,
    isPrivate,
    ...rest
})
{

    const {itemsDetalhes,} = useContext(Context);

    
if(itemsDetalhes === null && isPrivate === true)
{
 return <Redirect to="/"/>
}

  return(
      <Route {...rest}
      render={props=>(
          <Component {...props} />
      )}
      />
  )
}