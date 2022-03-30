import React, { useState } from "react";
import styled from "styled-components";
import testimonialsData from "../../data/testimonials";
import { User } from "react-feather";

function Testimonials() {
	const [testimonials, setTestimonials] = useState(testimonialsData);
	const [currentCenterIndex, setCurrentCenterIndex] = useState<Number>(2);

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
				{testimonials.map((testimonial, index) => (
					<Item
						key={testimonial.id}
						className={index === currentCenterIndex ? "active" : ""}
					>
						<UserImageWrapper>
							<User size={36} color="#DDDDDD" />
						</UserImageWrapper>
						<h2>{testimonial.name}</h2>
						<p>{testimonial.text}</p>
					</Item>
				))}
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

const Item = styled.li`
	border: 1px solid pink;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	&.active {
		border: 1px solid purple;
	}
`;

const UserImageWrapper = styled.div`
	background-color: #b6b6b6;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Testimonials;
