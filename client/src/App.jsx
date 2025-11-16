import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/HomePage.jsx";
import AboutUs from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Reviews from './components/Reviews.jsx';
import Projects from './components/Projects.jsx';
import PostForm from './components/PostForm.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
         <Route path="contact" element={<Contact />} />
         <Route path="reviews" element={<Reviews />} />
         <Route path="projects" element={<Projects />} />
         <Route path="postform" element={<PostForm />} />
      </Route>
    </Routes>
  );
};

export default App;
