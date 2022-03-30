import React, { useState } from "react";
import styled from "styled-components";
import testimonialsData from "../../data/testimonials";
import Testimonial from "../../models/testimonial";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
	const [testimonials, setTestimonials] =
		useState<Testimonial[]>(testimonialsData);
	const [currentCenterIndex, setCurrentCenterIndex] = useState<number>(2);

	function displayNext() {
		console.log("Display next image!");
	}

	function displayPrevious() {
		console.log("Display previous image!");
	}
	return (
		<section>
			<h1>Testimonials</h1>
			<List>
				<TestimonialCard testimonial={testimonials[currentCenterIndex - 2]} />
				<TestimonialCard testimonial={testimonials[currentCenterIndex - 1]} />
				<TestimonialCard
					testimonial={testimonials[currentCenterIndex]}
					isActive
				/>
				<TestimonialCard testimonial={testimonials[currentCenterIndex + 1]} />
				<TestimonialCard testimonial={testimonials[currentCenterIndex + 2]} />
			</List>
			<button onClick={displayPrevious}>Previous</button>
			<button onClick={displayNext}>Next</button>
		</section>
	);
}

const List = styled.ul`
	list-style: none;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 1rem;
	border: 1px solid gray;
	padding: 1rem;
`;

export default Testimonials;
