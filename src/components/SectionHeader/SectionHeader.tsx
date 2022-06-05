import React from "react";
import styled from "styled-components";
import backgroundPrimary from "../../assets/images/background-primary.svg";

interface Props {
    text: string;
    secondary?: boolean;
}

const SectionHeader = ({ text, secondary }: Props) => {
    return (
        <Wrapper secondary={secondary} background={backgroundPrimary}>
            {text}
        </Wrapper>
    );
};

export default SectionHeader;

interface StyledProps {
    secondary?: boolean;
    background: string;
}

const Wrapper = styled.h1<StyledProps>`
    position: relative;
    background-blend-mode: soft-light;
    font-size: var(--font-xl);
    line-height: 1.8;
    padding-block: var(--spacing-large);
    background-color: ${(props) =>
        props.secondary ? "hsla(15, 30%, 20%, 1)" : "hsla(189, 18%, 31%, 1)"};
    margin-block-end: var(--spacing-large);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    background: url(${(props) => props.background});

    &::after,
    &::before {
        content: "";
        display: block;
        width: 4rem;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.4);
    }
`;
