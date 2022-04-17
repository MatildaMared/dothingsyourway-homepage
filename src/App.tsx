import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SalesPage from "./pages/SalesPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/salespage" element={<SalesPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
