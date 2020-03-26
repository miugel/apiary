import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/home';
import Shop from './components/shop';
import Product from './components/product';
import { NotificationContainer } from 'react-notifications';

const App = () => {
	return (
		<>
			<Route exact path='/' component={Home}/>
			<Route path='/shop' component={Shop}/>
			<Route path='/product/:id' component={Product}/>

			<NotificationContainer/>
		</>
	);
};

export default App;