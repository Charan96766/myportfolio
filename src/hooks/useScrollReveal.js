import { useEffect } from 'react';
import gsap from 'gsap';

/**
 * Scroll reveal: an IntersectionObserver detects when a `.reveal` element
 * enters the viewport, then GSAP animates it in with smooth easing.
 *
 * Why IntersectionObserver instead of GSAP ScrollTrigger:
 * ScrollTrigger caches scroll positions and, under React.StrictMode's
 * double-mount in dev, could leave lower sections stuck at opacity:0.
 * IntersectionObserver is position-independent and StrictMode-safe, and we
 * never revert elements to hidden on cleanup.
 *
 * Helper classes: reveal-left | reveal-right | reveal-scale (default fade-up),
 * delay-1 … delay-5 for stagger.
 */
const useScrollReveal = () => {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = Array.from(document.querySelectorAll('.reveal'));

    if (reduced) {
      gsap.set(elements, { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    const animateIn = (el) => {
      let delay = 0;
      for (let i = 1; i <= 5; i++) {
        if (el.classList.contains(`delay-${i}`)) delay = i * 0.12;
      }
      gsap.to(el, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.9,
        delay,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateIn(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    elements.forEach((el) => {
      // Safety net: anything already in view (or above) on load is revealed now.
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        animateIn(el);
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);
};

export default useScrollReveal;
