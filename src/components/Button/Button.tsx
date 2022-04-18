import React from "react";
import styled from "styled-components";

interface Props {
    secondary?: boolean;
    small?: boolean;
    children: React.ReactNode;
}

function Button({ secondary, small, children }: Props) {
    return (
        <ButtonElem secondary={secondary} small={small}>
            {children}
        </ButtonElem>
    );
}

interface ButtonProps {
    secondary?: boolean;
    small?: boolean;
}

const ButtonElem = styled.button<ButtonProps>`
    cursor: pointer;
    color: #fff;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
    font-family: var(--font-primary-thin);
    padding: ${(props) => (props.small ? "0.75rem 1.25rem" : "1rem 2rem")};
    border: none;
    border-radius: 1rem;
    transition: all 0.2s;
    background-color: ${(props) =>
        props.secondary
            ? "var(--color-secondary)"
            : "var(--color-primary-dark)"};
    font-size: ${(props) =>
        props.small ? "var(--font-sm)" : "var(--font-base)"};

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
