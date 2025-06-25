import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
  const [counter, setcounter] = useState(initialValue);

  const increment = (value = 2) => {
    setcounter(counter + value);
  };

  const decrement = (value = 2) => {
    // if (counter === 0) return;
    setcounter(counter - value);
  };

  const reset = () => {
    setcounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
