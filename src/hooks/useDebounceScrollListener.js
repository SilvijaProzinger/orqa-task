import { useCallback, useRef } from "react";

const useDebounceScrollListener = (callback, delay) => {
  const timerRef = useRef(null);

  return useCallback(
    (...args) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};

export default useDebounceScrollListener;
