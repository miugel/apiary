import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Shop from './components/shop';
import Product from './components/product';
import Cart from './components/cart';
import PageNotFound from './components/pageNotFound';
import {NotificationContainer} from 'react-notifications';

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route exact path='/shop' component={Shop}/>
				<Route path='/shop/:id' component={Product}/>
				<Route path='/cart' component={Cart}/>
				<Route component={PageNotFound}/>
			</Switch>
			<NotificationContainer/>
		</>
	);
};

export default App;