import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Counts from 0 up to `target` (appending `suffix`) when it scrolls into view.
 * Uses an IntersectionObserver to trigger and GSAP to drive the count.
 */
const CountUp = ({ target, suffix = '', duration = 1.8, className }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      el.textContent = `${target}${suffix}`;
      return;
    }

    const counter = { val: 0 };
    let tween;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tween = gsap.to(counter, {
              val: target,
              duration,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = `${Math.round(counter.val)}${suffix}`;
              },
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (tween) tween.kill();
    };
  }, [target, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
};

export default CountUp;
