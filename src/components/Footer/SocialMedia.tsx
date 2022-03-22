import React from "react";
import styled from "styled-components";
import { Instagram, Facebook, AtSign } from "react-feather";

function SocialMedia() {
	return (
		<Wrapper>
			<h2>Sociala medier</h2>
			<List>
				<Item>
					<a href="mailto:markus@dothingsyourway.com">
						markus@dothingsyourway.com
						<AtSign size={18} strokeWidth={1} />
					</a>
				</Item>
				<Item>
					<a href="https://www.facebook.com/dothingsyourway/" target="_blank" rel="noreferrer">
						facebook.com/dothingsyourway
						<Facebook size={18} strokeWidth={1} />
					</a>
				</Item>
				<Item>
					<a href="https://www.instagram.com/dothingsyourway/" target="_blank" rel="noreferrer">
						dothingsyourway
						<Instagram size={18} strokeWidth={1} />
					</a>
				</Item>
			</List>
		</Wrapper>
	);
}

const Wrapper = styled.nav`
	text-align: right;

	& h2 {
		letter-spacing: 1px;
	}
`;

const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

const Item = styled.li`
	& a {
		color: var(--color-white);
		display: flex;
		align-items: center;

		& svg {
			margin-left: 0.5rem;
		}
	}
`;

export default SocialMedia;
