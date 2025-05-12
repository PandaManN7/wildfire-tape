// src/useRandomColor.js
import { useEffect, useState } from 'react';

export default function useRandomColor(intervalMs = 1000) {
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 60%)`;
      setColor(randomColor);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  return color;
}
