export class Point {
  constructor(protected xPos: number, protected yPos: number) { /** */}
  public get x(): number { return this.xPos; }
  public get y(): number { return this.yPos; }
}