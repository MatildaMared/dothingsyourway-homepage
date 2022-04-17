import React from "react";
import Quote from "../components/Quote";
import SectionHeader from "../components/SectionHeader";

const MyComponent = () => {
    return (
        <div>
            <h1>Sales page</h1>
            <SectionHeader text="Om mig" />
            <Quote author="Test">
                Min stora passion är att hjälpa människor att leva det liv de
                alltid har drömt om.
            </Quote>
        </div>
    );
};

export default MyComponent;
