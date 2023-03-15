import React from 'react';
import './Footer.css';
import logoFooter from "../../images/kasaFooter.png";

function Footer() {
	return (<footer>
		<div>
			<img src={logoFooter} alt="logoFooter"/>
			<p>© 2020 Kasa. All rights reserved.</p>
			<p>Terms of Use Privacy Policy</p>
		</div>
	</footer>);
}

export default Footer;
