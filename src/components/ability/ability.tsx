import React from "react";
import { Ability as AbilityInterface } from "../../api/abilities/interface";

interface AbilityProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  ability: AbilityInterface;
}

const Ability: React.FC<AbilityProps> = ({ ability, ...props }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (!canvasRef) {
      return;
    }
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");
    context.strokeStyle = "#5d4f7d";
    context.lineWidth = 1;

    context.shadowColor = "rgba(255,255,255,1)";
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 5;

    const path2D = new Path2D(ability.svgPath);
    context.stroke(path2D);
  }, [canvasRef]);

  return (
    <>
      <canvas ref={canvasRef} width="512" height="512" {...props} />
    </>
  );
};

export default Ability;
