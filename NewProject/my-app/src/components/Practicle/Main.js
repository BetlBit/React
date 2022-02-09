import React from "react"
import Posts from "./Posts"
import Story from "./Story"

function Main(){
	return (
		<div className="Main">
			<Story/>
			<Posts/>
			<Posts/>
			<Posts/>
			<Posts/>
		</div>
	)
}

export default Main