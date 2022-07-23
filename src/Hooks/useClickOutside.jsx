import { useEffect, useRef } from "react";

const useClickOutside = (ref, callback, dependency) => {
  const saveCallback = useRef(callback);

  useEffect(() => {
    saveCallback.current = callback;
  });

  const handler = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      saveCallback.current();
    }
  };

  useEffect(() => {
    if (dependency) {
      document.addEventListener("click", handler);
      return () => document.removeEventListener("click", handler);
    }
  });
};

export default useClickOutside;
