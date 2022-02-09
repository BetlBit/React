import React from "react"
import Logo from "./Logo"
import Search from "./Search"
import Menu from "./Menu"

function Header(){
	return (
		<div className="Header">
			<Logo/>
			<Search/>
			<Menu/>
		</div>
	)
}

export default Header