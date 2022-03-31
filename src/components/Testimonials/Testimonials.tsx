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
		<Wrapper>
			<button onClick={displayPrevious}>Previous</button>
			<List>
				<TestimonialCard testimonial={testimonials[currentCenterIndex - 1]} />
				<TestimonialCard
					testimonial={testimonials[currentCenterIndex]}
					isActive
				/>
				<TestimonialCard testimonial={testimonials[currentCenterIndex + 1]} />
			</List>
			<button onClick={displayNext}>Next</button>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr auto 1fr;
`;

const List = styled.ul`
	margin: 0 auto;
	list-style: none;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
	border: 1px solid gray;
	padding: 1rem;
	max-width: var(--max-width);
`;

export default Testimonials;
