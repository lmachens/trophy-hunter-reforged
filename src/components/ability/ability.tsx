import React from "react";
import { Ability as AbilityInterface } from "../../api/abilities/interface";
import Trophy from "../trophy";
import css from "styled-jsx/css";

interface AbilityProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  ability: AbilityInterface;
}

const trophyStyle = css.resolve`
  canvas {
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
  }
`;

const Ability: React.FC<AbilityProps> = ({ ability, ...props }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");
    context.strokeStyle = "#5d4f7d";
    context.lineWidth = 2;

    context.shadowColor = "rgba(255,255,255,1)";
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 4;

    const path2D = new Path2D(ability.svgPath);
    context.stroke(path2D);
  }, [canvasRef]);

  return (
    <div>
      <canvas ref={canvasRef} width="512" height="512" {...props} />
      {ability.trophyPositions.map(trophyPosition => (
        <Trophy
          trophy={trophyPosition.trophy}
          className={trophyStyle.className}
          style={{ left: trophyPosition.x, top: trophyPosition.y }}
        />
      ))}
      <style jsx>
        {`
          canvas {
            width: 512px;
            height: 512px;
          }

          div {
            position: relative;
          }
        `}
      </style>
      {trophyStyle.styles}
    </div>
  );
};

export default Ability;
