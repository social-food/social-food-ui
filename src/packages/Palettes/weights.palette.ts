const adminFontWeights = ['100', '400', '600', '700'];

const fontWeights = ['300', '400', '700'];

type AdminFontWeightsType = typeof adminFontWeights[number];

type FontWeightsType = typeof fontWeights[number];

const isAllowedAdminFontWeightsType = (weight: string | number): boolean => {
  return adminFontWeights.includes(weight.toString());
}

const isAllowedFontWeightsType = (weight: string | number): boolean => {
  return fontWeights.includes(weight.toString());
}

export type {
  AdminFontWeightsType,
  FontWeightsType,
}

export {
  adminFontWeights,
  fontWeights,
  isAllowedAdminFontWeightsType,
  isAllowedFontWeightsType,
}