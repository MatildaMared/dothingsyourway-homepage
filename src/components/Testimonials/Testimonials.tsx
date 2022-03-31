import React, { useState } from "react";
import styled from "styled-components";
import testimonialsData from "../../data/testimonials";
import Testimonial from "../../models/testimonial";
import {
	shiftArrayBackward,
	shiftArrayForward,
} from "../../utils/arrayMethods";
import TestimonialCard from "./TestimonialCard";
import { ChevronRight, ChevronLeft } from "react-feather";

function Testimonials() {
	const [testimonials, setTestimonials] =
		useState<Testimonial[]>(testimonialsData);

	function displayNext() {
		console.log("Display next image!");
		setTestimonials(shiftArrayForward([...testimonials]));
	}

	function displayPrevious() {
		console.log("Display previous image!");
		setTestimonials(shiftArrayBackward([...testimonials]));
	}
	return (
		<Wrapper>
			<Button onClick={displayPrevious}>
				<ChevronLeft size={24} color="#DDD" />
			</Button>
			<List>
				{testimonials.map((testimonial, index) => (
					<TestimonialCard key={index} testimonial={testimonial} />
				))}
			</List>
			<Button onClick={displayNext}>
				<ChevronRight size={24} color="#DDD" />
			</Button>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: auto 1fr auto;
	align-items: center;
	justify-items: center;
	max-width: var(--max-width-extra);
	margin: 0 auto;
`;

const List = styled.ul`
	width: 100%;
	margin: 0 auto;
	list-style: none;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
	border: 1px solid gray;
	padding: 1rem;
`;

const Button = styled.button`
	margin: 1rem;
	width: 40px;
	height: 40px;
	background-color: #b4b4b4;
	border: none;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: background-color 0.2s ease-in-out;

	&:hover {
		background-color: #8d8d8d;
	}
`;

export default Testimonials;
