import { forwardRef } from "react";

import { colors, isAllowedColorType } from "../../Palettes/colors.palette";
import { isAllowedSizeType } from "../../Palettes/sizes.palette";
import { isAllowedFontWeightsType } from "../../Palettes/weights.palette";
import { isAllowedTypographyType } from "../../Palettes/textTag.palette";

import { ITypographyProps } from "./type";
import Component from "./useTypography";

const Typography = (props: ITypographyProps) => {
  const { children, type, fontStyle, color, size, weight } = props;
  
  const verifiedType = type && isAllowedTypographyType(type) ? type : 'p';
  const verifiedFontStyle = fontStyle && fontStyle === 'GmarketSans' ? fontStyle : 'Pretendard';
  const verifiedColor = color && isAllowedColorType(color) ? color : colors.black01;
  const verifiedSize = size && isAllowedSizeType(size) ? size : '14px';
  const verifiedWeight = weight && isAllowedFontWeightsType(weight) ? weight : '400';
  
  return (
    <Component
      as={verifiedType}
      fontStyle={verifiedFontStyle}
      color={verifiedColor}
      size={verifiedSize}
      weight={verifiedWeight}
    >
      {children}
    </Component>
  );
}

export default forwardRef(Typography);