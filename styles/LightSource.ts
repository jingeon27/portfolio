import { PI2 } from "./../lib/math";
export interface ILightSource {
  drawLightSource: (ctx: CanvasRenderingContext2D) => void;
  drawLightLines: (
    ctx: CanvasRenderingContext2D,
    pointCenterX: number,
    pointCenterY: number
  ) => void;
}

export class LightSource implements ILightSource {
  private centerX: any;
  private centerY: number;
  private radius: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.centerX = canvasWidth / 2;
    this.centerY = canvasHeight / 1.4;
    this.radius =
      canvasWidth / 48 > 48
        ? 48
        : canvasWidth / 48 < 24
        ? 24
        : canvasWidth / 48;
  }
  drawLightSource(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(0,0,0, 0)";
    ctx.arc(this.centerX, this.centerY, this.radius, 0, PI2);
    ctx.fill();
  }
  drawLightLines(
    ctx: CanvasRenderingContext2D,
    pointCenterX: number,
    pointCenterY: number
  ) {
    ctx.strokeStyle = "rgb(176,176,212,1)";
    ctx.lineWidth = 1;
    ctx.moveTo(this.centerX, this.centerY - this.radius);
    ctx.lineTo(pointCenterX, pointCenterY);
    ctx.stroke();
  }
}
