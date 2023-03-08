import React from "react";

const Rating = (props) => {
	return <div>
		{
			[... Array(5).keys()].map((key) => <img src={key < props.rating ? "/rating/red_star.png" : "/rating/grey_star.png"} />)
		}
	</div>

};

export default Rating;
