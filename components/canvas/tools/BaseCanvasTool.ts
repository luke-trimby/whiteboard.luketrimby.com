import { Point } from '../../../interfaces/Point';

class BaseCanvasTool {

  protected mouseDownPoint: Point;
  protected mouseUpPoint: Point;
  protected mousePoints: Point[];
  protected isDragging: boolean = false;

  public onMouseDown(canvas: HTMLCanvasElement, event: MouseEvent): void {
    this.isDragging = true;
    this.mousePoints = [];
    const canvasRect = canvas.getBoundingClientRect();
    this.mouseDownPoint = new Point(event.clientX - canvasRect.left, event.clientY - canvasRect.top);
  };

  public onMouseDrag(canvas: HTMLCanvasElement, event: MouseEvent): void {
    if (this.isDragging) {
      const canvasRect = canvas.getBoundingClientRect();
      const mousePoint = new Point(event.clientX - canvasRect.left, event.clientY - canvasRect.top);
      this.mousePoints.push(mousePoint);
    }
  };

  public onMouseUp(canvas: HTMLCanvasElement, event: MouseEvent): void {
    this.isDragging = false;
    const canvasRect = canvas.getBoundingClientRect();
    this.mouseUpPoint = new Point(event.clientX - canvasRect.left, event.clientY - canvasRect.top);
  };
};

export default BaseCanvasTool;