import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App'; //Чисто для учебной практики
// import App from './components/Practicle/App'; //Если подключить это и выключить 3 строку - будет аналог инсты
import App from './components/ControlPoint1/App'; //КТ1


// Задача 3
// Сформируйте новые элементы со следующим условием:
// 1. Если во вложенном массиве первый элемент 1 - необходимо вывести тег <b> с его содержимым
// 2. Если значение 0 - необходимо вывести <div> с классом 'main'

// const element = [
// 	['0', 'Саша'], 
// 	['1', 'Петя'], 
// 	['2', 'Толя'], 
// 	['3', 'Гриша']
// ]

// function NubOne (element, el){
// 	for (el in element){
// 		if (element[el][0] == '0'){
// 			let div = document.createElement('div');
// 			div.className = 'main';
// 			div.innerHTML = element[el];
// 			document.body.append(div);
// 		}
// 		if (element[el][0] == '1'){
// 			let b = document.createElement('b');
// 			b.innerHTML = element[el];
// 			document.body.append(b);
// 		}
// 	}
// }

// const elem = (
// 	<div>
// 		<p>{NubOne(element)}</p>
// 	</div>
// )

ReactDOM.render(
	<App/>, 
	document.getElementById('root'))

// function getInfo(user) {
// 	return `${user.name} ${user.age}`
// }

// let user = {
// 	name: 'Alex',
// 	age: 25
// }

// let now = new Date().toLocaleTimeString()

// const element = <p>TEST</p>

// ReactDOM.render(
// 	element,
// 	document.getElementById('root')
// );

// function app() {
// 	const element = (
// 		<div>
// 			<h1>{new Date().toLocaleTimeString()}</h1>
// 		</div>
// 	);
// 	ReactDOM.render(
// 		element,
// 		document.getElementById('root')
// 	)
// }
// setInterval(app, 1000)

// function newElem(user) {
// 	return (
// 		<div>
// 			<p>{user.name}</p>
// 			<p>{user.age}</p>
// 		</div>
// 	)
// }

// const element = <h1>Привет, {getInfo(user)}!</h1>

// const element = <p className='main'>Привет мир!</p>

// const element = React.createElement{
// 	type: 'p',
// 	props: {
// 		className : 'main',
// 		children: 'Привет мир!'
// 	}
// }

// const link = 'https://phonoteka.org/uploads/posts/2021-05/1621980183_28-phonoteka_org-p-glitch-art-krasivo-51.jpg'

// const element = <img src={link}/>