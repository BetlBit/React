import React from "react"
import Star from './images/1Star.ico';
import Tell from './images/2Tell.ico';
import Geo from './images/3Geo.ico';
import Lapa from './images/4Lapa.ico';
import Dress from './images/5Dress.ico';
import Island from './images/6Island.ico';

function Images(){
	return (
		<div id="Images">
			<img src={Star} alt="Star" width="30"/>
			<img src={Tell} alt="Tell" width="30"/>
			<img src={Geo} alt="Geo" width="30"/>
			<img src={Lapa} alt="Lapa" width="30"/>
			<img src={Dress} alt="Dress" width="30"/>
			<img src={Island} alt="Island" width="30"/>
		</div>
	)
}

export default Images