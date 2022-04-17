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
    font-size: 1.8rem;
    font-style: italic;
    text-align: center;
    font-weight: 800;
`;

export default Quote;
