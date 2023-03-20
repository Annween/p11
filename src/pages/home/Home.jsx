import React, {useEffect, useState} from 'react';
import './Home.css';
import Rental  from '../../components/Rental';
import backgroundImg from "../../images/background.png";


const Background = () => {

	return 	<div className="background">
		<img src={backgroundImg} alt="home"/>
		<h2>Chez vous, partout et ailleurs</h2>
	</div>
}

function Home() {
	const [rentals, setRentals] = useState([])
	async function getRentals() {
		const response = await fetch('/api/rentals.json')
		return await response.json();
	}


	useEffect(() => {
		let mounted = true;
		getRentals()
			.then(items => {
				if(mounted) {
					setRentals(items.data)
				}
			})
		return () => mounted = false;
	}, [])

	return (

		<div className="main">
			<Background />
			<section className="location">
			{rentals.map(rental => <Rental key={rental.id} data={rental}/>)}
			</section>
		</div>
	);
}




export default Home;

