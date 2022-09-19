import { useRef } from "react";
const CanvaseAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return <canvas ref={canvasRef} />;
};
export default CanvaseAnimation;
