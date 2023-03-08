import React from "react";
import backgroundImg from "../../images/about.png";
import "./About.css";


function About() {
	return (
		<section className="about">
			<div className="background">
				<img src={backgroundImg} alt="about"/>
			</div>
			<div className="about-text">
				<ul className="list">
					<li>Fiabilité</li>
					<i className="fas fa-chevron-down"></i>
				</ul>
				<ul className="list">
					<li>Respect</li>
					<i className="fas fa-chevron-down"></i>
					<div className="respect">
					<ul>
						<li>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</li>
					</ul>
					</div>
				</ul>
				<ul className="list">
					<li>Service</li>
					<i className="fas fa-chevron-down"></i>
				</ul>
				<ul className="list">
					<li>Responsabilité</li>
					<i className="fas fa-chevron-down"></i>
				</ul>
			</div>
		</section>
	);
}


export default About;
