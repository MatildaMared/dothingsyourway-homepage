import React from "react";
import styled from "styled-components";

interface Props {
	size?: "small" | "medium" | "large";
}

function Logo({ size = "medium" }: Props) {
	return (
		<Text size={size}>
			Do things <span>your</span> way
		</Text>
	);
}

const Text = styled.h1`
	font-size: ${({ size }: Props) => {
		switch (size) {
			case "small":
				return "1.5rem";
			case "medium":
				return "2.5rem";
			case "large":
				return "3rem";
		}
	}};
	font-weight: 500;
	font-style: normal;

	& span {
		font-style: italic;
		font-weight: 800;
	}
`;

export default Logo;
