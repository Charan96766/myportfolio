import React, { useEffect, useRef, useState } from 'react';
import './Preloader.css';
import gsap from 'gsap';

const Preloader = () => {
  const [hidden, setHidden] = useState(false);
  const rootRef = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const finish = () => {
      document.body.classList.add('loaded');
      document.body.style.overflow = '';
      setHidden(true);
    };

    if (reduced) {
      finish();
      return;
    }

    document.body.style.overflow = 'hidden';
    const counter = { val: 0 };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: finish });

      tl
        // Logo mark pops + spins in
        .from('.preloader-mark', {
          scale: 0,
          rotate: -120,
          opacity: 0,
          duration: 0.7,
          ease: 'back.out(1.7)',
        })
        // Label fades in
        .from('.preloader-label', { y: 14, opacity: 0, duration: 0.45 }, '-=0.35')
        // Name reveals up from a clip mask
        .from('.preloader-name', {
          yPercent: 115,
          duration: 0.7,
          ease: 'power3.out',
        }, '-=0.3')
        // Counter + progress bar run together
        .to(counter, {
          val: 100,
          duration: 1.4,
          ease: 'power2.inOut',
          onUpdate: () => {
            if (countRef.current) countRef.current.textContent = Math.round(counter.val);
          },
        }, '-=0.1')
        .to('.preloader-bar', { scaleX: 1, duration: 1.4, ease: 'power2.inOut' }, '<')
        // Content lifts away
        .to('.preloader-content', {
          opacity: 0,
          y: -34,
          duration: 0.45,
          ease: 'power2.in',
        }, '+=0.2')
        // Column-by-column curtain wipe reveal
        .to('.preloader-col', {
          yPercent: -100,
          duration: 0.7,
          ease: 'power4.inOut',
          stagger: 0.09,
        }, '-=0.1');
    }, rootRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, []);

  if (hidden) return null;

  return (
    <div className="preloader" ref={rootRef}>
      <div className="preloader-cols" aria-hidden="true">
        <span className="preloader-col"></span>
        <span className="preloader-col"></span>
        <span className="preloader-col"></span>
        <span className="preloader-col"></span>
        <span className="preloader-col"></span>
      </div>

      <div className="preloader-content">
        <span className="preloader-mark">SC</span>
        <span className="preloader-label">Loading Portfolio</span>
        <div className="preloader-name-wrap">
          <h2 className="preloader-name">Vajjala Sai Charan</h2>
        </div>
        <div className="preloader-progress">
          <span className="preloader-count" ref={countRef}>0</span>
          <span className="preloader-percent">%</span>
        </div>
        <div className="preloader-track">
          <span className="preloader-bar"></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
