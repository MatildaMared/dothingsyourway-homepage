import React, { useState } from "react";
import styled from "styled-components";
import testimonialsData from "../../data/testimonials";
import { User } from "react-feather";

function Testimonials() {
	const [testimonials, setTestimonials] = useState(testimonialsData);
	const [currentCenterIndex, setCurrentCenterIndex] = useState<Number>(2);
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
			<button>Previous</button>
			<button>Next</button>
		</section>
	);
}

const List = styled.ul`
	list-style: none;
	display: flex;
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
`

export default Testimonials;
