import { useEffect, useRef } from "react";

const useResizeObserver = (callback) => {
  const previousWidth = useRef(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const animationFrameId = useRef(null);

  const checkResize = () => {
    if (
      typeof window !== "undefined" &&
      window.innerWidth !== previousWidth.current
    ) {
      previousWidth.current = window.innerWidth;
      callback();
    }
    animationFrameId.current = requestAnimationFrame(checkResize);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      animationFrameId.current = requestAnimationFrame(checkResize);
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [callback]);
};

export default useResizeObserver;
