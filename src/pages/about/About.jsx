import React, {useEffect, useState} from "react";
import backgroundImg from "../../images/about.png";
import "./About.css";
import Collapse from "../../components/Collapse";


function About() {
	//get about data from api
	const [about, setAbout] = useState([])

	async function getCollapsibleFromAbout() {
		const response = await fetch('/api/rentals.json')
		return await response.json();
	}

	useEffect(() => {
		let mounted = true;
		getCollapsibleFromAbout()
			.then(items => {
				if (mounted) {
					setAbout(items.about)
				}
			})
		return () => mounted = false;
	}, [])
	return (
		<section className="about">
			<div className="background">
				<img src={backgroundImg} alt="about"/>
			</div>
			<div className="about-container">
			{about.map(about => <Collapse key={about.id} title={about.title} content={about.content}/>)}
			</div>
		</section>
	);
}


export default About;
