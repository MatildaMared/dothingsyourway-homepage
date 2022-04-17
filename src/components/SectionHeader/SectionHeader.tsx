import React from "react";

interface Props {
    text: string;
}

const SectionHeader = ({ text }: Props) => {
    return (
        <div>
            <h2>{text}</h2>
        </div>
    );
};

export default SectionHeader;
