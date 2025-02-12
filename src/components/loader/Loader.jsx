import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Waves from './waves/wave';
import SplitText from "./SplitText";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};



const Loader = () => {
    const [firstAnimationDone, setFirstAnimationDone] = useState(false);
  return (
    <div className="flex items-center justify-center h-screen bg-black">
     <Waves
   lineColor="#007bff"
   backgroundColor="rgba(0, 0, 0, 0.2)"
   waveSpeedX={0.02}
   waveSpeedY={0.01}
   waveAmpX={40}
   waveAmpY={20}
   friction={0.9}
   tension={0.01}
   maxCursorMove={120}
   xGap={12}
   yGap={36}
/>

{!firstAnimationDone && (
        <SplitText
          text="Hello, I'm Jishnu TP!"
          className="text-6xl text-white font-eagle font-extrabold text-center"
          delay={150}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={() => setFirstAnimationDone(true)}
        />
      )}

      {/* Second SplitText - Shows after first one finishes */}
      {firstAnimationDone && (
        <SplitText
          text="Welcome To My Portfolio..!"
          className="text-6xl text-white font-eagle font-extrabold text-center"
          delay={150}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
      )}
    </div>
  );
};

export default Loader;
