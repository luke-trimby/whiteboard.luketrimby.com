import React, { useRef, useEffect } from 'react';
import { Point } from '../interfaces/Point';

interface CanvasProps {
  width: string | number;
  height: string | number;
  className: string;
}

const useCanvas = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D>(null);
  let isDragging: boolean = false;
  let dragStartPos: Point;
  let canvasPos: Point;

  const drawGrid = (smallGridSize: number, largeGridSize: number) => {
    if (smallGridSize) {
      contextRef.current.beginPath();
      for (let x = 0; x <= canvasRef.current.width; x += smallGridSize) {
        for (let y = 0; y <= canvasRef.current.height; y += smallGridSize) {
          contextRef.current.rect(x, y, smallGridSize, smallGridSize);
        }
      }
      contextRef.current.lineWidth = 0.25;
      contextRef.current.stroke();
    }

    if (largeGridSize) {
      contextRef.current.beginPath();
      for (let x = 0; x <= canvasRef.current.width; x += largeGridSize) {
        for (let y = 0; y <= canvasRef.current.height; y += largeGridSize) {
          contextRef.current.moveTo(x, y);
          contextRef.current.rect(x, y, largeGridSize, largeGridSize);
        }
      }
      contextRef.current.lineWidth = 0.5;
      contextRef.current.stroke();
    }
  };

  const initCanvasContent = () => {
    drawGrid(64, 1024);

    const canvasHalfPoint = new Point(canvasRef.current.width / 2, canvasRef.current.height / 2);
    const screenHalfPoint = new Point(window.innerWidth / 2, window.innerHeight / 2);

    canvasRef.current.style.left = `-${canvasHalfPoint.x - screenHalfPoint.x}px`;
    canvasRef.current.style.top = `-${canvasHalfPoint.y - screenHalfPoint.y}px`;
  }

  const addEventListeners = () => {
    window.addEventListener('mousedown', (event: MouseEvent) => {
      if (event.button === 1) {
        isDragging = true;
        const canvasRect = canvasRef.current.getBoundingClientRect();
        dragStartPos = new Point(event.clientX - canvasRect.x, event.clientY - canvasRect.y);
        event.preventDefault();
      }
    });
    window.addEventListener('mouseup', (event: MouseEvent) => {
      if (event.button === 1) {
        canvasRef.current.style.cursor = 'default';
        isDragging = false;
        event.preventDefault();
      }
    });
    window.addEventListener('mousemove', (event: MouseEvent) => {
      if (isDragging) {
        canvasRef.current.style.cursor = 'grabbing';
        canvasPos = new Point(event.clientX - dragStartPos.x, event.clientY - dragStartPos.y);
        canvasRef.current.style.left = `${canvasPos.x}px`;
        canvasRef.current.style.top = `${canvasPos.y}px`;
      }
    });
  };

  useEffect(() => {
    if (canvasRef.current) {
      contextRef.current = canvasRef.current.getContext('2d');
      if (contextRef.current) {
        initCanvasContent();
        addEventListeners();
      }
    }
  }, []);

  return {
    canvas: <canvas ref={canvasRef} {...props} />,
    context: contextRef
  };
};

export default useCanvas;