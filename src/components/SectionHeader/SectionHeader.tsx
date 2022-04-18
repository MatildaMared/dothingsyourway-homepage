import React from "react";
import styled from "styled-components";

interface Props {
    text: string;
    secondary?: boolean;
}

const SectionHeader = ({ text, secondary }: Props) => {
    return <Wrapper secondary={secondary}>{text}</Wrapper>;
};

export default SectionHeader;

interface StyledProps {
    secondary?: boolean;
}

const Wrapper = styled.h1<StyledProps>`
    font-size: var(--font-xl);
    line-height: 1.8;
    padding-block: var(--spacing-large);
    background-color: ${(props) =>
        props.secondary
            ? "var(--color-secondary-darkest)"
            : "var(--color-primary-dark)"};
    margin-block-end: var(--spacing-xl);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;

    &::after,
    &::before {
        content: "";
        display: block;
        width: 4rem;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.4);
    }
`;
