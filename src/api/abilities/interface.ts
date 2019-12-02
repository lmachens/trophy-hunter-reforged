import { Trophy } from "../trophies/interface";

export interface Ability {
  svgPath: string;
  trophyPositions: {
    x: number | string;
    y: number | string;
    trophy: Trophy;
  }[];
}
