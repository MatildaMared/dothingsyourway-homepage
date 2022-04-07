import React from "react";
import styled from "styled-components";
import Container from "../Layout/Container";
import Logo from "../Logo";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";

function Footer() {
	return (
		<Wrapper>
			<Container>
				<LogoContainer>
					<Logo size="small" />
				</LogoContainer>
				<ContactWrapper>
					<Contact />
					<SocialMedia />
				</ContactWrapper>
				<Copyright>
					<a href="">Privacy Policy</a>
					<p>© 2022 Markus Mattsson</p>
				</Copyright>
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	background-color: var(--color-primary-dark);
	color: var(--color-white);
	padding: 3rem 0;
	font-size: 1rem;
`;

const ContactWrapper = styled.section`
	display: flex;
	justify-content: space-between;

	@media (max-width: 600px) {
		flex-direction: column;

		& > *:first-child {
			margin-bottom: 2rem;
		}
	}
`;

const LogoContainer = styled.div`
	margin-bottom: 1rem;
	padding-bottom: 0.5rem;
	border-bottom: 1px solid hsla(0, 0%, 100%, 0.15);
	color: var(--color-white);
	display: flex;

	@media (max-width: 600px) {
		justify-content: center;
	}
`;

const Copyright = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-align: center;
	margin-top: 1rem;
	padding-top: 0.5rem;
	border-top: 1px solid hsla(0, 0%, 100%, 0.15);
	color: var(--color-primary);

	& a {
		color: var(--color-primary);
	}

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

export default Footer;
