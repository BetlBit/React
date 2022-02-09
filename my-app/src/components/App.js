import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from "react";
import Articles from "./Articles";
import Home from "./Home";
import About from './About';
import NotFound from './NotFound';

function App() {
	return (
		<div>
			<nav>
				<a href='/'>Home</a>
				<a href='/about'>About</a>
			</nav>
			<Router>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/about' component={About}/>
					<Route component={NotFound}/>
				</Switch>
			</Router>
			<Articles />
		</div>
	)
}

export default App;