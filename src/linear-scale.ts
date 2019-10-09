export interface LinearScaleFunc {
  (val: number): number;
}

export function linearScale(
  minValue: number,
  maxValue: number,
  width = 1
): LinearScaleFunc {
  return (val: number): number =>
    ((val - minValue) / (maxValue - minValue)) * width;
}
