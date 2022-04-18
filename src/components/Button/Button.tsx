import React from "react";
import styled from "styled-components";

interface Props {
    secondary?: boolean;
    children: React.ReactNode;
}

function Button({ secondary, children }: Props) {
    return <ButtonElem secondary={secondary}>{children}</ButtonElem>;
}

interface ButtonProps {
    secondary?: boolean;
}

const ButtonElem = styled.button<ButtonProps>`
    cursor: pointer;
    color: #fff;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
    font-family: var(--font-primary-thin);
    padding: 1rem 2rem;
    border: none;
    border-radius: 1rem;
    transition: all 0.2s;
    background-color: ${(props) =>
        props.secondary
            ? "var(--color-secondary)"
            : "var(--color-primary-dark)"};

    &:hover {
        background-color: ${(props) =>
            props.secondary
                ? "var(--color-secondary-dark)"
                : "var(--color-primary)"};
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
    }
`;

export default Button;
