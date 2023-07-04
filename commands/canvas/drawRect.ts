import { Point } from '../../interfaces/Point';

const drawRect = (canvas: HTMLCanvasElement, startPos: Point, endPos: Point) => {
  const context = canvas.getContext("2d");
  if (context) {
    context.beginPath();
    context.rect(startPos[0].x, startPos[0].y, endPos[0].x, endPos[0].y);
    context.lineWidth = 10;
    context.stroke();
  }
};

export default drawRect;