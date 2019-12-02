import React from "react";
import { createStars, draw, move } from "./stars";

const Background: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;

    const numberOfStars = 100;
    const context = canvas.getContext("2d");
    const stars = createStars({
      canvas,
      numberOfStars
    });

    const handle = setInterval(() => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        move({ canvas, star });
        draw({ canvas, star });
      });
    }, 20);

    return () => {
      clearInterval(handle);
    };
  }, [canvasRef]);

  return (
    <>
      {" "}
      <style jsx>{`
        canvas {
          position: fixed;
          background: #050505;
          z-index: 0;
        }
      `}</style>
      <canvas ref={canvasRef} />
    </>
  );
};

export default Background;
