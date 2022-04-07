import React from "react";
import MarkusPhoto from "../../assets/images/Markus.jpg";
import styled from "styled-components";

function Header() {
	return (
		<Wrapper>
			<Text>
				<span>Markus</span>
				<span>Mattsson</span>
			</Text>
			<Subtext>Stress- och produktivitetscoach</Subtext>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	min-height: 90vh;
	background-image: url(${MarkusPhoto});
	background-size: cover;
	background-position: center;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const Text = styled.h1`
	font-size: var(--font-xxl);
	color: rgba(255, 255, 255, 0.8);
	font-weight: 900;
	font-style: italic;
	line-height: 0.7;
	text-align: center;
	text-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
	margin-top: 60vh;

	& span {
		display: block;
	}
`;

const Subtext = styled.p`
	margin-top: 0.5rem;
	text-align: center;
	font-size: var(--font-sm);
	letter-spacing: 1px;
	color: var(--color-white);
	text-transform: uppercase;
`;

export default Header;
