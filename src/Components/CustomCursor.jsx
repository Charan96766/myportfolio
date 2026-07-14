import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

/**
 * Custom cursor: an instant dot + a smooth trailing ring that enlarges on
 * interactive elements and shrinks on click. Auto-disabled on touch devices.
 */
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add('custom-cursor-active');

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    };

    const interactive = 'a, button, input, textarea, [role="button"], .skill-card, .project-tilt, .glow-card';
    const onOver = (e) => {
      if (e.target.closest(interactive)) ring.classList.add('hovering');
    };
    const onOut = (e) => {
      if (e.target.closest(interactive)) ring.classList.remove('hovering');
    };
    const onDown = () => ring.classList.add('clicking');
    const onUp = () => ring.classList.remove('clicking');
    const onLeaveWin = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };
    const onEnterWin = () => {
      dot.style.opacity = '';
      ring.style.opacity = '';
    };

    let raf;
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeaveWin);
    document.addEventListener('mouseenter', onEnterWin);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeaveWin);
      document.removeEventListener('mouseenter', onEnterWin);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true"></div>
      <div className="cursor-ring" ref={ringRef} aria-hidden="true"></div>
    </>
  );
};

export default CustomCursor;
