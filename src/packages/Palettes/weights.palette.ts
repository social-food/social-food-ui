const fontWeights = ['100', '400', '600', '700'];

type FontWeightsType = typeof fontWeights[number];

const isAllowedWeightType = (weight: string | number): boolean => {
  return fontWeights.includes(weight.toString());
}

export type { FontWeightsType }
export {
  fontWeights,
  isAllowedWeightType,
}