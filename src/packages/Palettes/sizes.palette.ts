const rangeFontSizes = (min: number, max: number, isPixel: boolean) => {
  const fontSize = [];
  
  for (let i = min; i <= max; i++) {
    fontSize.push(isPixel ? `${i}px` : i);
  }
  
  return fontSize;
}

const fontSizes = [
  ...rangeFontSizes(10, 40, true),
];

type FontSizesType = typeof fontSizes[number];

const isAllowedSizeType = (size: string | number): boolean => {
  return fontSizes.includes(size);
}

export type { FontSizesType }
export {
  fontSizes,
  isAllowedSizeType,
}