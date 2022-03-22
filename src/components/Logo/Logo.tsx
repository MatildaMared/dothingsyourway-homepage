import React from "react";
import styled from "styled-components";

function Logo() {
	return <Text>Do things <span>your</span> way</Text>;
}

const Text = styled.h1`
	font-size: 3rem;
	font-weight: 500;
	font-style: normal;

    & span {
        margin-left: -2px;
        font-style: italic;
        font-weight: 800;
        letter-spacing: -1px;
    }
`;

export default Logo;
