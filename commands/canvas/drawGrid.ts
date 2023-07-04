const drawGrid = (canvas: HTMLCanvasElement, smallGridSize: number, largeGridSize: number) => {
  const context = canvas.getContext("2d");
  if (context) {
    if (smallGridSize) {
      context.beginPath();
      for (let x = 0; x <= canvas.width; x += smallGridSize) {
        for (let y = 0; y <= canvas.height; y += smallGridSize) {
          context.rect(x, y, smallGridSize, smallGridSize);
        }
      }
      context.lineWidth = 0.1;
      context.stroke();
    }
  
    if (largeGridSize) {
      context.beginPath();
      for (let x = 0; x <= canvas.width; x += largeGridSize) {
        for (let y = 0; y <= canvas.height; y += largeGridSize) {
          context.moveTo(x, y);
          context.rect(x, y, largeGridSize, largeGridSize);
        }
      }
      context.lineWidth = 0.2;
      context.stroke();
    }
  }
};

export default drawGrid;