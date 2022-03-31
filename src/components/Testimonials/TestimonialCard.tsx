import React from "react";
import styled from "styled-components";
import Testimonial from "../../models/testimonial";
import { User } from "react-feather";

interface Props {
	testimonial: Testimonial;
	isActive?: boolean;
}

function TestimonialCard({ testimonial, isActive }: Props) {
	return (
		<Item className={isActive ? "active" : ""}>
			<UserImageWrapper>
				<User size="32" color="#DDD" />
			</UserImageWrapper>
			<h2>{testimonial.name}</h2>
			<p>{testimonial.text}</p>
		</Item>
	);
}

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

export default TestimonialCard;
