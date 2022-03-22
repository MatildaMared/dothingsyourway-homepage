import React from "react";
import styled from "styled-components";
import { Phone, MapPin, Package } from "react-feather";

function Contact() {
	return (
		<Wrapper>
			<h2>Markus Mattsson</h2>
			<Details>
				<MapPin size={18} strokeWidth={1} />
				<span>Kaptensgatan 10E, 30245, Halmstad</span>
			</Details>
			<Details>
				<Phone size={18} strokeWidth={1} />
				<span>0738 18 03 43</span>
			</Details>
			<Details>
				<Package size={18} strokeWidth={1} />
				<span>Org.nr: SE900306053101</span>
			</Details>
		</Wrapper>
	);
}

const Wrapper = styled.section``;

const Details = styled.p`
	display: flex;
	align-items: center;

	& svg {
		margin-right: 0.5rem;
	}
`;

export default Contact;
