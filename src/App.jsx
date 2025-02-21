import Navbar from './components/Navbar';
import Intro from './components/Intro/intro';
import Skills from './components/skills/Skills';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import React from 'react';
const App = () => {
  return (
    <div className="App">
      <Navbar/>
  
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
      
      
    </div>
  );
};

export default App;
