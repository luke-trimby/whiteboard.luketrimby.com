import drawSmoothLine from '../../../commands/canvas/drawSmoothLine';
import BaseCanvasTool from './BaseCanvasTool';

export class LineTool extends BaseCanvasTool {

  public onMouseDrag(canvas: HTMLCanvasElement, event: MouseEvent): void {
    super.onMouseDrag(canvas, event);
    if (this.isDragging) {
      drawSmoothLine(canvas, this.mousePoints);
    }
  };
};