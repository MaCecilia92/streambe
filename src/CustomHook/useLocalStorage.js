import { useState, useEffect } from 'react';

const useLocalStorage = (key) => {
  const storedValue = localStorage.getItem(key);

  const initial =
    storedValue !== null && storedValue !== undefined
      ? JSON.parse(storedValue)
      : null;

  const [value, setValue] = useState(initial);

  useEffect(() => {
    if (value !== null && value !== undefined) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
