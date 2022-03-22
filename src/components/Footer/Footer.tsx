import React from "react";
import styled from "styled-components";
import Container from "../Layout/Container";
import Logo from "../Logo";

function Footer() {
	return (
		<Wrapper>
			<Container>
				<Copyright>
					<span>© 2022</span>
					<Logo size="small" />
				</Copyright>
				<p>Markus Mattsson</p>
				<p>Kaptensgatan 10E, 30245, Halmstad</p>
				<p>0738180343</p>
				<p>Org.nr: SE900306053101</p>
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	background-color: var(--color-primary-dark);
	color: var(--color-white);
	padding: 2rem;
`;

const Copyright = styled.p`
	font-size: 1rem;
	margin-bottom: 1rem;
	padding-bottom: 1rem;
	border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
`;

export default Footer;
