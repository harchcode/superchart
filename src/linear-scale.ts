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

export function invertLinearScale(
  minValue: number,
  maxValue: number,
  width = 1
): LinearScaleFunc {
  return (val: number): number => 
    (((val * maxValue) - (val * minValue)) + (minValue * width)) / width
}