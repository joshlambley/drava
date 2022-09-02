import React  from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import {Routes, Route} from 'react-router-dom'
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Cards/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        
      </Routes>
      {/* <Hero /> */}
      {/* <Analytics /> */}
      <Newsletter />
      {/* <Contact /> */}
      {/* <Cards /> */}
      {/* <About /> */}
      <Footer />
    </div>
  );
}

export default App;
