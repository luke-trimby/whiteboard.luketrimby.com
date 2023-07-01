import React, { useRef, useEffect } from 'react';

interface CanvasProps {
  width: string | number;
  height: string | number;
  className: string;
}

export default function Canvas(props: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D>(null);

  const drawGrid = (gridSize: number = 100) => {
    for (let x = 0; x <= canvasRef.current.width; x += gridSize) {
      for (let y = 0; y <= canvasRef.current.height; y += gridSize) {
        contextRef.current.rect(x, y, gridSize, gridSize);
      }
    }
    contextRef.current.strokeStyle = "#aaa";
    contextRef.current.lineWidth = 0.5;
    contextRef.current.stroke();
  };

  const drawDebugCenterCircle = () => {
    contextRef.current.beginPath();
    contextRef.current.fillStyle = 'red';
    contextRef.current.arc(canvasRef.current.width / 2, canvasRef.current.height / 2, 50, 0, 2 * Math.PI);
    contextRef.current.fill();
  }

  const initCanvasContent = () => {
    drawGrid();
    drawDebugCenterCircle();
  }

  useEffect(() => {
    if (canvasRef.current) {
      contextRef.current = canvasRef.current.getContext('2d');
      if (contextRef.current) {
        initCanvasContent();
      }
    }
  }, []);

  return {
    canvas: <canvas ref={canvasRef} {...props} />,
    context: contextRef
  };
};