import React from "react"

function Box(props){
	
	const {title, text} = props

	// Или (2 варик)
	// let title = props.title
	// let text = props.text

	return (
		<div>
			<p>{title}</p>
			<p>{text}</p>
		</div>
	)
}

export default Box