import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import News from "./News"
import Contact from "./Contact"
import About from "./About"
import NotFound from "./NotFound"

function Nav() {
	return (
		<div>
			<nav>
				<li><a href="/">Home</a></li>
				<li><a href="/News">News</a></li>
				<li><a href="/Contact">Contact</a></li>
				<li><a href="/About">About</a></li>
			</nav>
			<Router>
				<Routes>
					<Route path="/"/>
					<Route path="/News" exact element={<News/>}/>
					<Route path="/Contact" exact element={<Contact/>}/>
					<Route path="/About" exact element={<About/>}/>
					<Route path="*" exact element={<NotFound/>}/>
				</Routes>
			</Router>
		</div>
	)
}

export default Nav