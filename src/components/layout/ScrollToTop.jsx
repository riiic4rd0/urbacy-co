import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrollt immer nach oben wenn sich die Route ändert
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 'smooth' für sanftes Scrollen, 'instant' für sofortiges
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;