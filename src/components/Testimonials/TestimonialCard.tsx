import React from "react";
import styled from "styled-components";
import Testimonial from "../../models/testimonial";
import { User } from "react-feather";
import { userInfo } from "os";

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
	border: 1px solid pink;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	display: none;

	&:nth-child(1),
	&:nth-child(2),
	&:nth-child(3) {
		display: flex;
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
`;

const UserPhoto = styled.img`
	width: 100%;
	height: auto;
	place-content: center;
`;

export default TestimonialCard;
