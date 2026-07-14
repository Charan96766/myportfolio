import { useEffect } from 'react';

/**
 * Tracks the cursor over any `.glow-card` element and updates CSS variables
 * (--mx / --my) so a radial "spotlight" glow can follow the pointer.
 * One document-level listener handles every card.
 */
const useSpotlight = () => {
  useEffect(() => {
    const onMove = (e) => {
      const el = e.target.closest('.glow-card');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      el.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
};

export default useSpotlight;
