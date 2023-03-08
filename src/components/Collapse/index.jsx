import React, { useState } from 'react';

const Collapse = (props) => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	return <div className="collaspe" onClick= {() => setIsCollapsed(!isCollapsed)}>
		<h4>{props.title}</h4>
		<p>{props.content}</p>
	</div>

}

export default Collapse;
