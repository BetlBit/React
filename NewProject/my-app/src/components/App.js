import React from "react"
// import Box from "./Box"

// let date = new Date()

class App extends React.Component{

	state = {
		date: new Date()
	}

	// constructor(props){
	// 	super(props)
	// 	this.state = {
	// 		date:new Date()
	// 	}
	// 	this.change = this.change.bind(this)
	// }

	// constructor(props){
	// 	super(props)
	// 	this.state = {
	// 		count: 0
	// 	}
	// }

	// state = {
	// 	count: 0
	// }

	// incremental = () => this.setState(({count}) => {return {count: count + 1}})
	// dicremental = () => this.setState(({count}) => {return {count: count - 1}})

	set(){
		setInterval(() => this.change(), 1000)
	}

	change = () => this.setState({date: new Date()})

	render(){
		return(
			<div>
				{/* <p>{this.state.count}</p>
				<button onClick={this.incremental}>Incr!</button>
				<button onClick={this.dicremental}>Decr!</button> */}
				<p>{this.state.date.toLocaleTimeString()}</p>
				<button onClick = {this.change}>Показать текущее время</button>
			</div>
		)
	}
}

// class App extends React.Component{
// 	render(){
// 		return (
// 			<div>
// 			TEST
// 			</div>
// 		)
// 	}
// }

// function App(){
	
// 	// let count = 0

// 	// function handler(){
// 	// 	count++
// 	// 	console.log(count)
// 	// }

// 	// let title = 'Красный'
// 	// let text = 'Текст'

// 	return (
// 		// <div>
// 		// 	<Box title = {title} text = {text}> </Box>
// 		// </div>

// 		<div>
// 			<p>{count}</p>
// 			<button onClick={handler}>Click!</button>
// 		</div>
// 	)
// }

export default App