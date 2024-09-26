import React from 'react';
import {
    BrowserRouter as Router, Routes,
    Route
} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Contact from './pages/Contact';
import Features from './pages/Features';


export default function Main() {
    return (
        <div><div className="app">

            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="Home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="About">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="Features">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="Contact">Contact Us</a>
                </li>
            </ul>
            <Router>
                <Routes>
                    <Route path="/home" 
                        element={<Home />} />
                    <Route path="/features"
                        element={<Features />} />
                    <Route path="/about"
                        element={<About />} />
                    <Route path="/contact"
                        element={<Contact />} />
                </Routes>
            </Router>
        </div></div>
    )
}
