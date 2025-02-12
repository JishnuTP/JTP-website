import { useState } from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Scroller from '../components/Scroller';
import Experience from '../components/Experience';
import Expertise from '../components/Expertise';
import Works from '../components/Works';
import ContactMe from '../components/Contact';

import ChatBot from '../components/ChatBot';




function Home() {

 
    const handleScroll = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
     
    };
  
    return (
      <div >
        {/* <SplashCursor/> */}
        {/* <Header onScroll={handleScroll} /> */}
        <div className="pt-20"> {/* Adds space to offset the fixed header */}
      <Hero/>
      <Scroller/>
    
      <Experience />
    
     <Expertise/>
      <Works/>

     
      <ContactMe/>
 
      <ChatBot/>


    </div>
      </div>
    );
  };

export default Home
