import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import { NotificationContainer } from 'react-notifications';

const App = () => {
	return (
		<>
			<Route exact path='/' component={Home}/>
			<Route path='/shop' component={Shop}/>

			<NotificationContainer/>
		</>
	);
};

export default App;