import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<Route path='/' component={Header}/>
			<Route exact path='/' component={Home}/>
			<Route path='/shop' component={Shop}/>
			<Route path='/' component={Footer}/>
			{/* instead of importing components into others, im letting react router do it for me, might it be bad practice? */}
		</>
	);
};

export default App;