import React, { ForwardedRef, forwardRef, ReactElement, ReactNode } from "react";

import { colors, ColorsType, isAllowedColorType } from "../Palettes/colors.palette";
import {
  TypographyType,
  getFontSizeByType,
  getFontWeightByType,
  HeadComponent,
  ParagraphComponent,
  isAllowedTypographyTypes,
} from "./useAdminTypography";
import { FontWeightsType, isAllowedWeightType } from "../Palettes/weights.palette";
import { FontSizesType, isAllowedSizeType } from "../Palettes/sizes.palette";

interface Props {
  readonly type: TypographyType;
  readonly children: ReactNode;
  
  readonly color?: ColorsType;
  readonly size?: FontSizesType;
  readonly weight?: FontWeightsType;
}

const Typography = (
  {
    type,
    children,
    color,
    size,
    weight,
  }: Props,
  ref: ForwardedRef<(HTMLHeadingElement | HTMLParagraphElement)>
): ReactElement => {
  
  const verifiedType = type && isAllowedTypographyTypes(type) ? type : 'body01';
  const verifiedColor = color && isAllowedColorType(color) ? color : colors.black01;
  const verifiedSize = size && isAllowedSizeType(size) ? size : getFontSizeByType(verifiedType);
  const verifiedWeight = weight && isAllowedWeightType(weight) ? weight : getFontWeightByType(verifiedType);
  
  const isTitle = !(type === 'body01' || type === 'description01');
  if (isTitle)
    return (
      <HeadComponent
        color={verifiedColor}
        size={verifiedSize}
        weight={verifiedWeight}
        ref={ref}
      >
        {children}
      </HeadComponent>
    )
  
  return (
    <ParagraphComponent
      color={verifiedColor}
      size={verifiedSize}
      weight={verifiedWeight}
      ref={ref}
    >
      {children}
    </ParagraphComponent>
  )
}

export default forwardRef(Typography);