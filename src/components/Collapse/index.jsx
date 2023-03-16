import React, { useState } from 'react';
import './Collapse.css';

const Collapse = (props) => {
	const [isCollapsed, setIsCollapsed] = useState(false);
		return <div className="collapsible" onClick= {() => setIsCollapsed(!isCollapsed)}>
			<div className="title">
				<span>{props.title}</span>
				<i className={isCollapsed ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
			</div>
			<div className={isCollapsed ? "content show" : "content"}>
			{props.content}
			</div>
		</div>

}

export default Collapse;
