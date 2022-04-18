import React from "react";
import Logo from "../Logo";
import styled from "styled-components";
import Button from "../Button";

function SmallHeader() {
    return (
        <Header>
            <Logo size="small" />
            <a href="#offer">
                <Button secondary small>
                    Jag är redo
                </Button>
            </a>
        </Header>
    );
}

const Header = styled.header`
    padding: 0.75rem 1rem;
    color: var(--color-white);
    position: fixed;
    width: 100%;
    z-index: 10;
    background-color: rgba(65, 89, 93, 0.9);
    border-bottom: 1px solid var(--color-primary-dark);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default SmallHeader;
