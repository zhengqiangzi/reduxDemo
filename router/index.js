import {Router,Route,hashHistory,IndexRedirect} from 'react-router';
import React from 'react';
import Main,{MainBody} from '../components';

const Routers=<Router history={hashHistory}>

	<Route path="/" component={MainBody}>
		<IndexRedirect to="index" />
		<Route path="index" component={Main}></Route>
	</Route>

</Router>


export default Routers;