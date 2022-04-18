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
import useWidth from "../../hooks/useWidth";

function Testimonials() {
	const [testimonials, setTestimonials] =
		useState<Testimonial[]>(testimonialsData);
	const windowWidth = useWidth();

	function displayNext() {
		setTestimonials(shiftArrayForward([...testimonials]));
	}

	function displayPrevious() {
		setTestimonials(shiftArrayBackward([...testimonials]));
	}
	return (
		<Wrapper>
			<Heading>Detta säger mina kunder</Heading>
			<Content>
				<Button
					onClick={displayPrevious}
					disabled={testimonials.length <= 3 && windowWidth! > 1400}
				>
					<ChevronLeft size={24} color="#DDD" />
				</Button>
				<List width={windowWidth}>
					{testimonials.map((testimonial, index) => (
						<TestimonialCard key={index} testimonial={testimonial} />
					))}
				</List>
				<Button
					onClick={displayNext}
					disabled={testimonials.length <= 3 && windowWidth! > 1400}
				>
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
	padding: var(--spacing-xl) 0;
`;

const Heading = styled.h2`
	color: var(--color-white);
	text-align: center;
	margin-bottom: var(--spacing-large);
	font-size: var(--font-xl);
	line-height: 1.8;

	&::before, &::after {
		content: "";
		margin-inline: auto;
		display: block;
		width: 4rem;
		height: 1px;
		background-color: rgba(255, 255, 255, .3);
	}
`;

const Content = styled.div`
	display: grid;
	grid-template-columns: auto 1fr auto;
	align-items: center;
	justify-items: center;
	max-width: var(--max-width-extra);
	margin: 0 auto;
`;

interface ListProps {
	readonly width: number;
}

const List = styled.ul<ListProps>`
	width: 100%;
	margin: 0 auto;
	list-style: none;
	display: grid;
	grid-template-columns: ${(props) => {
		if (props.width > 1400) {
			return "repeat(3, 1fr)";
		} else if (props.width > 1000) {
			return "repeat(2, 1fr)";
		} else {
			return "minmax(300px, 500px)";
		}
	}};
	grid-gap: 4rem;
	padding: 0 1rem;
	justify-content: center;

	& > * {
		&:nth-child(3) {
			display: ${(props) => (props.width > 1400 ? "flex" : "none")};
		}
		&:nth-child(2) {
			display: ${(props) => (props.width > 1000 ? "flex" : "none")};
		}
	}
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
