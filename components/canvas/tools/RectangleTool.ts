import drawRect from '../../../commands/canvas/drawRect';
import BaseCanvasTool from './BaseCanvasTool';

export class RectangleTool extends BaseCanvasTool {

  public onMouseUp(canvas: HTMLCanvasElement, event: MouseEvent): void {
    super.onMouseDrag(canvas, event);
    if (this.isDragging) {
      drawRect(canvas, this.mouseDownPoint, this.mouseUpPoint);
    }
  };
};