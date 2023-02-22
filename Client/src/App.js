import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";




function App() {
  return <>
  <div style={{width:"100%",height:"100vh"}}>
  <Nav />
    <Routes>
      <Route exact="true" path="/" element={<Home/>} />
      <Route path="/services" element={<Services/>} />
      {/* <Route path="/about" element={<About/>} /> */}
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<Home/>} />

    </Routes>
  </div>
  </>
}

export default App;
