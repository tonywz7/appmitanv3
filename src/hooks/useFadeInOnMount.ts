"use client";

import { useEffect, useState } from "react";

/**
 * Recreates the IntersectionObserver-driven `.fade-in-up` entrance
 * animation from the original static screens using React state instead of
 * direct DOM manipulation. Attach the returned `visible` flag to
 * `data-visible` on an element using the `.fade-in-up` class.
 */
export function useFadeInOnMount(delayMs = 0) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), delayMs);
    return () => clearTimeout(timeout);
  }, [delayMs]);

  return visible;
}
