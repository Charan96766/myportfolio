import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Smooth momentum scrolling with Lenis, plus smooth anchor navigation
 * (nav links, "View Work", logo, etc. glide to their section instead of jumping).
 * Disabled when the user prefers reduced motion.
 */
const useLenis = () => {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Smooth in-page anchor links
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const hash = link.getAttribute('href');
      if (hash.length <= 1) return;
      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -70 });
      }
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
