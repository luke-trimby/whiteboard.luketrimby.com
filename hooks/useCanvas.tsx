import React, { useRef, useEffect } from 'react';

interface CanvasProps {
  width: string | number;
  height: string | number;
  className: string;
}

export default function Canvas(props: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context) {
        context.beginPath();
        context.fillStyle = 'red';
        context.arc(100, 100, 100, 0, 2 * Math.PI);
        context.fill();
      }
    }
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};