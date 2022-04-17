import React from "react";
import styled from "styled-components";

interface Props {
    text: string;
}

const SectionHeader = ({ text }: Props) => {
    return <Wrapper>{text}</Wrapper>;
};

export default SectionHeader;

const Wrapper = styled.h2`
    font-size: var(--font-xl);
    line-height: 1.8;
    padding-block: 8rem;
    background-color: var(--color-primary-dark);
    margin-block-end: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;

    &::after,
    &::before {
        content: "";
        display: block;
        width: 50px;
        height: 1px;
        background-color: rgba(255, 255, 255, .4);
    }
`;
