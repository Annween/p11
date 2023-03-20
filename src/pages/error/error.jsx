import React from "react";
import {Link} from "react-router-dom";
import "./error.css";
function error() {
	  return (
	<div className="error">
	  <h1>404</h1>
		<h4>Oups ! La page que vous demandez n'existe pas</h4>
		<Link to="/"><u>Retour sur la page d'accueil</u></Link>
	</div>
  );
}



export default error;
