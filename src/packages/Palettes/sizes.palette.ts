const rangeFontSizes = (min: number, max: number, isPixel: boolean) => {
  const fontSize = [];
  
  for (let i = min; i <= max + 1; i++) {
    fontSize.push(isPixel ? `${i}px` : i);
  }
  
  return fontSize;
}

const fontSizes = [
  ...rangeFontSizes(10, 40, false),
  ...rangeFontSizes(10, 40, true),
] as const;

export {
  fontSizes,
}