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
			<UserPhotoWrapper>
				{testimonial.image ? (
					<UserPhoto src={testimonial.image} alt={testimonial.name} />
				) : (
					<User size="32" color="#DDD" />
				)}
			</UserPhotoWrapper>
			<h2>{testimonial.name}</h2>
			<p>{testimonial.text}</p>
		</Item>
	);
}

const Item = styled.li`
	padding: 2rem;
	border-radius: 1rem;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: var(--color-white);
	line-height: 1.4;

	& h2 {
		margin-bottom: 1rem;
	}
`;

const UserPhotoWrapper = styled.div`
	background-color: #b6b6b6;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	margin-bottom: .5rem;
`;

const UserPhoto = styled.img`
	width: 100%;
	height: auto;
	place-content: center;
`;

export default TestimonialCard;
