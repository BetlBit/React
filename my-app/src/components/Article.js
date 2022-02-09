import React from "react"
import './main.css'

function Article(props) {
	const {title, text} = props
	return (
		<div>
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	)
}

export default Article;