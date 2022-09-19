import { RefObject, useEffect, useRef } from "react";
type CanvaseAnimationProps = {
  canvasWidth: number;
  canvasHeight: number;
};
const CanvaseAnimation: React.FC<CanvaseAnimationProps> = () => {
  const canvasRef: RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas?.getContext("2d");
    }
  });
  return <canvas ref={canvasRef} />;
};
export default CanvaseAnimation;
