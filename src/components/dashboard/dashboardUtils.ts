import { styles } from "./dashboardStyles";
import type { IconTone, StatusTone, VitalTone } from "./dashboardTypes";

export const getStatusClassName = (tone: StatusTone) => {
  switch (tone) {
    case "warning":
      return styles.statusWarning;
    case "danger":
      return styles.statusDanger;
    default:
      return styles.statusSuccess;
  }
};

export const getToneClassName = (tone: VitalTone) => {
  switch (tone) {
    case "mint":
      return styles.sparklineMint;
    case "amber":
      return styles.sparklineAmber;
    default:
      return styles.sparklineTeal;
  }
};

export const getIconToneClassName = (tone: IconTone) => {
  switch (tone) {
    case "violet":
      return styles.iconViolet;
    case "amber":
      return styles.iconAmber;
    case "rose":
      return styles.iconRose;
    default:
      return styles.iconMint;
  }
};

export const buildPolylinePoints = (points: number[]) =>
  points.map((point, index) => `${index * 58},${80 - point}`).join(" ");
