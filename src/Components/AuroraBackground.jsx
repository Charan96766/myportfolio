import React from 'react';
import './AuroraBackground.css';

/**
 * Full-page animated aurora: soft, blurred gradient orbs that slowly drift
 * and morph behind all content. Pure CSS (GPU-accelerated), theme-aware,
 * and disabled under prefers-reduced-motion.
 */
const AuroraBackground = () => (
  <div className="aurora-bg" aria-hidden="true">
    <span className="aurora aurora-1"></span>
    <span className="aurora aurora-2"></span>
    <span className="aurora aurora-3"></span>
    <span className="aurora aurora-4"></span>
    <span className="aurora aurora-5"></span>
    <div className="aurora-grain"></div>
  </div>
);

export default AuroraBackground;
