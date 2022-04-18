import React from "react";
import SmallHeader from "../../components/SmallHeader";
import About from "./About";
import Offer from "./Offer";

const SalesPage = () => {
    return (
        <>
            <SmallHeader />
            <main>
                <h1>Sales page</h1>
                <Offer />
                <About />
            </main>
        </>
    );
};

export default SalesPage;
