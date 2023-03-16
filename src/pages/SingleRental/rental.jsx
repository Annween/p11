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
					<Rating rating={rental.rating}/>
				</div>
			</div>
			<div className="container-flex">
				<Collapse title="Description" content={getDescription(rental.description)}/>
				<Collapse title="Equipements" content={getEquipments(rental.equipments)}/>
			</div>
		</section>
	)
}

function getDescription(description) {
	return <p>{description}</p>
}

function getHosts(host) {
	return <div className="host">
		<p>{host && host.name}</p>
		<img src={host && host.picture} alt="host"/>
	</div>
}

function getEquipments(equipments) {
	return <ul>
		{equipments && equipments.map(equipment =>
			<li key={equipment}>{equipment}</li>
		)}</ul>
}

function getTags(tags) {
	return tags && tags.map(tag =>
		<span key={tag}>{tag}</span>
	)
}

export default Rental;
