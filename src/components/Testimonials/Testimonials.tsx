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
			<Content>
				<Button onClick={displayPrevious} disabled={testimonials.length <= 3}>
					<ChevronLeft size={24} color="#DDD" />
				</Button>
				<List>
					{testimonials.map((testimonial, index) => (
						<TestimonialCard key={index} testimonial={testimonial} />
					))}
				</List>
				<Button onClick={displayNext} disabled={testimonials.length <= 3}>
					<ChevronRight size={24} color="#DDD" />
				</Button>
			</Content>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
	margin: 0 auto;
	background-color: var(--color-primary-dark);
	margin: var(--spacing-xl) 0;
`;

const Content = styled.div`
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
	grid-gap: 3rem;
	border: 1px solid gray;
	padding: 3rem;
`;

const Button = styled.button`
	margin: 1rem;
	width: 40px;
	height: 40px;
	background-color: var(--color-primary);
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

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

export default Testimonials;
