import React from 'react';
import './Rental.css';
import {Link} from "react-router-dom";


function Rental(props) {
	return <Link key={`rental-${props.data.id}`} to={`/rental/${props.data.id}`}>
		<div className="Rental">
			<div className="Rental-image">
				<img src={props.data.cover} alt="rental"/>
			</div>
			<div className="Rental-content">
				<h4>{props.data.title}</h4>
			</div>
		</div>
	</Link>
}



export default Rental;
