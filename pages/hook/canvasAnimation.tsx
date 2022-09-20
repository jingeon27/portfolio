import { RefObject } from "react";
import { ILightSource, LightSource } from "../../styles/LightSource";
import { useCanvas } from "../../styles/useCanvas";
import { Point, Ipoint } from "../../styles/Point";
type canvasAnimationProps = {
  canvasWidth: number;
  canvasHeight: number;
};
const canvasAnimation: React.FC<canvasAnimationProps> = ({
  canvasWidth,
  canvasHeight,
}) => {
  const fillBackground = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = `rgb(0,0,0,0)`;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  };
  const lightSource: ILightSource = new LightSource(canvasWidth, canvasHeight);
  let points: Ipoint[] = [];
  const initPoints = () => {
    const POINT_NUMBER = 72;
    const POINT_GAP = canvasWidth / POINT_NUMBER;

    for (let i = 0; i <= POINT_NUMBER; i++) {
      const point: Ipoint = new Point(POINT_GAP, i, canvasWidth, canvasHeight);
      points.push(point);
    }
  };
  if (canvasWidth !== 0 && canvasHeight !== 0) {
    initPoints();
  }
  const animate = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    fillBackground(ctx);
    lightSource.drawRadialGradientBehindLightSource(ctx);
    lightSource.drawLightSource(ctx);
    for (let i = 0; i < points.length; i++) {
      lightSource.drawLightLines(
        ctx,
        points[i].pointCenterX,
        points[i].pointCenterY
      );
      points[i].animate(ctx);
    }
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const canvasRef: RefObject<HTMLCanvasElement> = useCanvas(
    canvasWidth,
    canvasHeight,
    animate
  );
  return <canvas ref={canvasRef}></canvas>;
};

export default canvasAnimation;
