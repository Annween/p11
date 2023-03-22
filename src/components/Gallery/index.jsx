import './Gallery.css';
import React, {useState} from "react";

const Gallery = (props)  => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const showNextSlide = () => {
		currentSlide + 1 < props.pictures.length ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(0)
	}
	
	const showPrevSlide = () =>  {
		currentSlide > 0 ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(props.pictures.length - 1)
	}

	const Controls = () => {
		if(props.pictures.length > 1) {
			return <div className="controls">
				<a href="#" className="prev" onClick={showPrevSlide}>&#10094;</a>
				<a href="#" className="next" onClick={showNextSlide}>&#10095;</a>
			</div>
		}
	}

	return <div className="gallery">
		<img  src={props.pictures && props.pictures[currentSlide]} alt={props.name}/>
		<Controls />
	</div>

}

export default Gallery;
