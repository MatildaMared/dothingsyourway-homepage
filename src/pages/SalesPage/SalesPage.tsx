import React from "react";
import SmallHeader from "../../components/SmallHeader";
import Testimonials from "../../components/Testimonials";
import About from "./About";
import Offer from "./Offer";

const SalesPage = () => {
    return (
        <>
            <SmallHeader />
            <main>
                <h1>Sales page</h1>
                <Testimonials />
                <Offer />
                <About />
            </main>
        </>
    );
};

export default SalesPage;
