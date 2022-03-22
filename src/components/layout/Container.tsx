import React from "react";
import styled from "styled-components";

interface Props {
	children: React.ReactNode;
}

function Container({ children }: Props) {
	return <ContentWrapper>{children}</ContentWrapper>;
}

const ContentWrapper = styled.div`
	background-color: var(--color-background);
	max-width: var(--max-width);
	margin: 0 auto;
	padding: 1rem;
`;

export default Container;
