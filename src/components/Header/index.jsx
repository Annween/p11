import {Link} from 'react-router-dom';
import logo from "../../images/logo.PNG";

import './header.css'

function Header() {
	return (
		<header className="Header">
			<nav>
				<Link to="/"><img src={logo} className="App-logo" alt="logo"/></Link>
				<ul>
					<Link to="/"><li>Accueil</li></Link>
					<Link to="/about"><li>A propos</li></Link>
				</ul>
			</nav>

		</header>

	)
}

export default Header
