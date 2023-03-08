import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import './rental.css';
import Rating from "../../components/Rating";
import Gallery from "../../components/Gallery";
import Collapse from "../../components/Collapse";

function Rental() {
	let {id} = useParams();
	const [rental, setRental] = useState([])

	async function getRentals() {
		const response = await fetch('/api/rentals.json')
		return await response.json();
	}

	useEffect(() => {
		let mounted = true;
		getRentals()
			.then(items => {
				if (mounted) {
					if (items.data.find(obj => obj.id === id)) {
						setRental(items.data.find(obj => obj.id === id))

					}
				}
			})
		return () => mounted = false;
	}, [id])
	return (
		<section>
			<Gallery pictures={rental.pictures}/>
			<div className="container">
		
				<div className="main-infos">
					<h1 className="title">{rental.title}</h1>
					<span className="place">{rental.location}</span>
					<div className="tags">
						{getTags(rental.tags)}
					</div>
				</div>
				<div className="rental-infos">
					{getHosts(rental.host)}
					<Rating rating={rental.rating} />
				</div>
			</div>

			<Collapse title={"test"} content={"ploppooodshfhdsfnsduj"} />
				<div className="details-container">
					<div className="description">
					<button type="button" className="btn">Description<i className="fas fa-chevron-down"></i></button>
			
					</div>
			
					<div className="equipement">
						<button type="button" className="btn">Equipement<i className="fas fa-chevron-down"></i></button>
					<div className="collaspe">
						{getEquipments(rental.equipments)}
					</div>
				</div>
			</div>
		</section>
	)
}





function getHosts(host) {
	return <div className="host">
		<h5>{host && host.name}</h5>
		<img src={host && host.picture} alt="host"/>
	</div>
}

function getEquipments(equipments) {
	//build list
	return equipments && equipments.map(equipment =>
		<ul>
			<li key={equipment}>{equipment}</li>
		</ul>
	)
}

function getTags(tags) {
	return tags && tags.map(tag =>
		<span>{tag}</span>
	)
}
export default Rental;
