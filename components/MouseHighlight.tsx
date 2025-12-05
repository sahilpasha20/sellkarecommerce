import React, { useEffect, useState } from 'react';
import { MousePosition } from '../types';

const MouseHighlight: React.FC = () => {
  const [pos, setPos] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 mix-blend-multiply opacity-50"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(8, 145, 178, 0.15), transparent 40%)`,
      }}
    />
  );
};

export default MouseHighlight;