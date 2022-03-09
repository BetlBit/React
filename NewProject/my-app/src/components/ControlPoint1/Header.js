import React from "react"
import Logo from "./Logo"
import Nav from "./Nav"
import Register from "./Register"

function Header(){
	return (
		<div id="Header">
			<Logo/>
			<Nav/>
			<Register/>
		</div>
	)
}

export default Header