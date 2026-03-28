import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * A hook that detects if an element is currently "active" based on its scroll position.
 * On touch devices, an element becomes active when it enters the viewport center.
 * On desktop devices, it relies on traditional hover states (but this provides the isTouch check).
 */
export function useScrollActive(options = { amount: 0.5, margin: "-20% 0px -20% 0px" }) {
  const ref = useRef(null);
  const [isTouch, setIsTouch] = useState(false);
  const isInView = useInView(ref, { 
    amount: options.amount, 
    margin: options.margin as any 
  });

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
  }, []);

  return {
    ref,
    isActive: isTouch ? isInView : false,
    isTouch
  };
}
