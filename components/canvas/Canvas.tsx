import React, { useRef, useEffect, useContext } from 'react';
import { Point } from '../../interfaces/Point';
import drawGrid from '../../commands/canvas/drawGrid';
import { LineTool } from './tools/LineTool';
import NavBar from '../navbar/NavBar';

interface CanvasProps {
  width: string | number;
  height: string | number;
  className: string;
}

const Canvas = ({ width, height, className }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D>(null);
  let isDragging: boolean = false;
  let dragStartPos: Point;
  let canvasPos: Point;
  let selectedCanvasTool = new LineTool();

  const initCanvasContent = () => {
    drawGrid(canvasRef.current, 64, 1024);

    const canvasHalfPoint = new Point(canvasRef.current.width / 2, canvasRef.current.height / 2);
    const screenHalfPoint = new Point(window.innerWidth / 2, window.innerHeight / 2);

    canvasRef.current.style.left = `-${canvasHalfPoint.x - screenHalfPoint.x}px`;
    canvasRef.current.style.top = `-${canvasHalfPoint.y - screenHalfPoint.y}px`;
  }

  const addEventListeners = () => {
    window.addEventListener('mousedown', (event: MouseEvent) => {
      if (event.button === 0) {
        if (selectedCanvasTool) {
          selectedCanvasTool.onMouseDown(canvasRef.current, event);
        }
      } else if (event.button === 1) {
        event.preventDefault();
        isDragging = true;
        const canvasRect = canvasRef.current.getBoundingClientRect();
        dragStartPos = new Point(event.clientX - canvasRect.x, event.clientY - canvasRect.y);
      }
    });

    window.addEventListener('mouseup', (event: MouseEvent) => {
      if (event.button === 0) {
        if (selectedCanvasTool) {
          selectedCanvasTool.onMouseUp(canvasRef.current, event);
        }
      } else if (event.button === 1) {
        event.preventDefault();
        canvasRef.current.style.cursor = 'default';
        isDragging = false;
      }
    });

    window.addEventListener('mousemove', (event: MouseEvent) => {
      if (event.button === 0) {
        if (selectedCanvasTool) {
          selectedCanvasTool.onMouseDrag(canvasRef.current, event);
        }
      }

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

  return (
    <section className="text-black body-font h-full min-h-screen">
      <canvas ref={canvasRef} width={width} height={height} className={className} />
      <NavBar />
    </section>
  );
};

export default Canvas;