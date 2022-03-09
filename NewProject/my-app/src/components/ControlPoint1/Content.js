import React from "react"
import Art from "./Art"
import Text from "./Text"
import Functional from "./Functional"

function Content(){
	return (
		<div className="ContentMain">
			<Text/>
			<Functional/>
			<Art/>
		</div>
	)
}

export default Content