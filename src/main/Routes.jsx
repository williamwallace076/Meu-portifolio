import React from "react";
import { Routes, Route } from 'react-router-dom';

import Main from '../components/templates/Main'
import MainProjects from '../components/projects/MainProjects'
import About from '../components/projects/about'
import Contact from "../components/projects/contact";

export default props => {
    return (

        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/projects" element={<MainProjects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Main />} />
        </Routes>
    );

}