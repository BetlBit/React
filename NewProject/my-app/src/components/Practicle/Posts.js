import React from "react"
import art from './images/Content.jpg'

function Posts(){
	return (
		<div id="post">
			<h3>BetlBit</h3>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi corporis consectetur iste necessitatibus similique ut. Molestiae ducimus eum tenetur corrupti itaque recusandae. Iusto laudantium voluptatem minima adipisci eos repudiandae. Necessitatibus.</p>
			<img src={art} width="200px"/>
		</div>
	)
}

export default Posts