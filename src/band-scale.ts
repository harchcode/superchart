export interface BandScaleOptions {
  width?: number;
}

export interface BandScaleObjectItems {
  start: number;
  mid: number;
  end: number;
}

export interface BandScaleObject {
  [index: string]: BandScaleObjectItems;
}

export function bandScale(
  domain: string[],
  options: BandScaleOptions = {}
): BandScaleObject {
  const w = options.width || 1;
  const itemCount = domain.length;
  const itemWidth = w / itemCount;

  const r: BandScaleObject = {};

  domain.forEach((d, i) => {
    const start = i * itemWidth;
    const end = start + itemWidth;
    const mid = (start + end) * 0.5;

    r[d] = {
      start,
      mid,
      end
    };
  });

  return r;
}
