import React, { ForwardedRef, forwardRef, ReactElement, ReactNode } from "react";

import { colorsPalette } from "../Palettes/colors.palette";
import {
  TypographyType,
  getFontSizeByType,
  getFontWeightByType,
  HeadComponent,
  ParagraphComponent,
  isAllowedTypographyTypes,
  isAllowedColorType,
  isAllowedSizeType,
  isAllowedWeightType
} from "./useAdminTypography";

interface Props {
  readonly type: TypographyType;
  readonly children: ReactNode;
  
  readonly color?: string;
  readonly size?: string;
  readonly weight?: string;
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
  if (!isAllowedTypographyTypes(type)) {
    type = 'body01';
  }
  
  if (!color || !isAllowedColorType(color)) {
    color = colorsPalette.black01;
  }
  
  if (!size || !isAllowedSizeType(size)) {
    size = getFontSizeByType(type);
  }
  
  if (!weight || !isAllowedWeightType(weight)) {
    weight = getFontWeightByType(type);
  }
  
  const isTitle = !(type === 'body01' || type === 'description01');
  if (isTitle)
    return (
      <HeadComponent
        color={color}
        size={size}
        weight={weight}
        ref={ref}
      >
        {children}
      </HeadComponent>
    )
  
  return (
    <ParagraphComponent
      color={color}
      size={size}
      weight={weight}
      ref={ref}
    >
      {children}
    </ParagraphComponent>
  )
}

export default forwardRef(Typography);