import React from "react";

const Rating = (props) => {
	return <div className="rating">
		{
			[...Array(5).keys()].map((key) => <img key={key} src={key < props.rating ? "/rating/red_star.png" : "/rating/grey_star.png"} />)
		}
	</div>

};

export default Rating;
