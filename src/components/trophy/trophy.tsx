import React from "react";
import { Trophy as TrophyInterface } from "../../api/trophies/interface";

interface TrophyProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  trophy: TrophyInterface;
}

const Trophy: React.FC<TrophyProps> = ({ trophy, ...props }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [focused, setFocused] = React.useState(false);

  React.useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = focused ? "#88F" : "#8FF";

    const path2D = new Path2D(trophy.svgPath);
    context.fill(path2D);
  }, [canvasRef, focused]);

  return (
    <>
      <canvas
        ref={canvasRef}
        onMouseEnter={() => setFocused(true)}
        onMouseLeave={() => setFocused(false)}
        width="512"
        height="512"
        {...props}
      />
    </>
  );
};

export default Trophy;
