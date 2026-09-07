/**
 * @file ScrollToTop.jsx
 * @description Utility component that ensures proper scroll behavior on route navigation.
 * - On route change: scrolls window to top (prevents staying at scroll position of previous page)
 * - On hash navigation (e.g. /about#journey): smoothly scrolls to the target anchor element
 *
 * This component renders no visible UI — it only produces a side effect via useEffect.
 * It is mounted once at the top level in App.jsx, inside the Router context.
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash anchor (e.g. #programs), scroll to that element
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    // Otherwise, scroll to top of the page
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null; // This component renders nothing — it's a side-effect-only hook wrapper
}
