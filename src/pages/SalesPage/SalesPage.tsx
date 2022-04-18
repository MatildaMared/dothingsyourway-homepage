import React from "react";
import SmallHeader from "../../components/SmallHeader";
import Testimonials from "../../components/Testimonials";
import About from "./About";
import Contents from "./Contents";
import Offer from "./Offer";
import Presentation from "./Presentation";
import TheProgram from "./TheProgram";

const SalesPage = () => {
    return (
        <>
            <SmallHeader />
            <main>
                <h1>Sales page</h1>
                <Presentation />
                <TheProgram />
                <Contents />
                <Testimonials />
                <Offer />
                <About />
            </main>
        </>
    );
};

export default SalesPage;
