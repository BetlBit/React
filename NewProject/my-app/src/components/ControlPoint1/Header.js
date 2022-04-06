import React, { useEffect, useState } from "react"
import Logo from "./Logo"
import Nav from "./Nav"
import Register from "./Register"

function clc(){
	window.location = "/Login"}

function Header(){
	const [che, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);
	useEffect(() => {
		document.getElementsByTagName("Body")[0].setAttribute("data-theme", localStorage.getItem("theme"));
	}, [che]);

	function Change() {
		if (che === false) {
			localStorage.setItem("theme", "dark");
			
			setChecked(true);
		} else {
			localStorage.setItem("theme", "light");

			setChecked(false);
		}
	}

	return (
		<div id="Header">
			<Logo/>
			<Nav/>
			<Register/>
			<div className='5ff'>
				<label><span>Сменить тему</span>
					<input type="checkbox"	defaultChecked={che}	onChange={() => Change()}/>
				</label>
				</div>
		</div>
	)
}

export default Header