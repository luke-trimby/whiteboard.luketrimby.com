import { Point } from '../../interfaces/Point';

const drawSmoothLine = (canvas: HTMLCanvasElement, mousePoints: Point[]) => {
  const context = canvas.getContext("2d");
  if (context) {
    context.beginPath();
    context.moveTo(mousePoints[0].x, mousePoints[0].y);
    mousePoints.forEach((point: Point) => {
      const mid = new Point((point.x + point.x) / 2, (point.y + point.y) / 2);
      const cpx = (mid.x + point.x) / 2;
      context.bezierCurveTo(cpx, point.y, cpx, point.y, point.x, point.y);
    });
    context.lineWidth = 10;
    context.lineCap = 'round';
    context.lineJoin = 'round'
    context.stroke();
  }
};

export default drawSmoothLine;