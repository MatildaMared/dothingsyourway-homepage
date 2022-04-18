import React from "react";
import styled from "styled-components";

interface Props {
    author?: string;
    children: React.ReactNode;
}

function Quote({ children, author }: Props) {
    return (
        <BlockQuote>
            "{children}" {author ? `– ${author}` : ""}
        </BlockQuote>
    );
}

const BlockQuote = styled.blockquote`
    margin-inline: auto;
    padding-inline: 2rem;
    max-width: 600px;
    color: var(--color-primary-dark);
    font-family: var(--font-primary);
    font-size: var(--font-md);
    font-style: italic;
    text-align: center;
    font-weight: 800;
    margin-block: var(--spacing-large);
`;

export default Quote;
