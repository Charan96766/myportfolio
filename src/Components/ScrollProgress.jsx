import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

/** Thin gradient bar at the very top that fills as you scroll the page. */
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${progress})` }}
      ></span>
    </div>
  );
};

export default ScrollProgress;
