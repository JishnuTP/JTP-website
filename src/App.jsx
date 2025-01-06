import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import SwipeableCardDeck from './components/SwipeCard';
import Works from './components/Works';
import Skills from './components/Skills';
import Scroller from './components/Scroller';


function App() {

 
    const handleScroll = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
     
    };
  
    return (
      <div>
        
        <Header onScroll={handleScroll} />
        <div className="pt-20"> {/* Adds space to offset the fixed header */}
      <Hero />
      <Scroller/>
      {/* <Skills/> */}
      <Experience />
      {/* <SwipeableCardDeck/> */}
     
      <Works/>
    </div>
      </div>
    );
  };

export default App
