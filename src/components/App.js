import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import routes from '../routes';
import Header from './Header';
import NavigationMenu from './Navigation';

export default ()=>(
<BrowserRouter>
<>
<Header/>
<NavigationMenu/>
<Switch>
{routes.map(route=> <Route path={route.path} component={route.component} key={route.id} exact={route.exact && true}/>)}
</Switch>
</>
</BrowserRouter>
	)