import React from "react";
import Ability from "../ability";
import css from "styled-jsx/css";
import abilities from "../../api/abilities";
import Background from "../background";
import panAndZoom from "react-pan-and-zoom-hoc";

const abilityStyle = css.resolve`
  canvas {
    width: 512px;
    height: 512px;
  }
`;

const InteractiveDiv = panAndZoom("div");

const Abilities: React.FC<any> = () => {
  const [x, setX] = React.useState(0.5);
  const [y, setY] = React.useState(0.5);
  const [scale, setScale] = React.useState(0.5);

  const rowWidth = (abilities.length * 512) / 2;
  return (
    <InteractiveDiv
      x={x}
      y={y}
      scale={scale}
      scaleFactor={1.05}
      minScale={0.1}
      maxScale={10}
      disableZoomToMouse={true}
      ignorePanOutside
      onPanAndZoom={(x, y, scale) => {
        setScale(scale);
        setX(x);
        setY(y);
      }}
      onPanMove={(x, y) => {
        setX(x);
        setY(y);
      }}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <div
        className="abilities"
        style={{
          top: `calc(${y * 100}% - ${512}px)`,
          left: `calc(${x * 100}% - ${rowWidth / 2}px)`,
          zoom: scale
        }}
      >
        {abilities.map(ability => (
          <Ability
            className={abilityStyle.className}
            ability={ability}
            key={ability.svgPath}
          />
        ))}
      </div>
      <style jsx>{`
        .abilities {
          display: flex;
          width: ${rowWidth}px;
          flex-wrap: wrap;
          position: absolute;
        }
      `}</style>
      {abilityStyle.styles}
    </InteractiveDiv>
  );
};

const Constellation: React.FC = () => {
  return (
    <>
      <Background />
      <Abilities />
    </>
  );
};

export default Constellation;
