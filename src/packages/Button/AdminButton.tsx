import React, { ForwardedRef, HTMLAttributes, forwardRef, ReactNode } from "react";

import styled from "@emotion/styled";

import { colors, colorsPalette, ColorsType, isAllowedColorType } from "../Palettes/colors.palette";
import { AdminFontWeightsType, isAllowedAdminFontWeightsType } from "../Palettes/weights.palette";
import { FontSizesType, isAllowedSizeType } from "../Palettes/sizes.palette";
import Typography from "../Typography/Admin/AdminTypography";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  readonly children: ReactNode;
  
  readonly buttonColor?: ColorsType;
  readonly textColor?: ColorsType;
  readonly textWeight?: AdminFontWeightsType;
  readonly textSize?: FontSizesType;
  readonly boxShadow?: boolean;
  readonly disabled?: boolean;
}

/**
 *  @Component - Button
 *  @props children - 버튼 텍스트 {ReactNode}
 *  @props buttonColor - 버튼 배경 컬러 {ColorsType}
 *  @props textColor - 버튼 텍스트 컬러 {ColorsType}
 *  @props textWeight - 버튼 텍스트 굵기 {FontWeightsType}
 *  @props textSize - 버튼 텍스트 크기 {FontSizesType}
 *  @props boxShadow - 버튼 박스섀도우 {boolean}
 *  @props disabled - 버튼 비활성화 {boolean}
 */

const Button = (
  {
    children,
    buttonColor,
    textColor,
    textWeight,
    textSize,
    disabled,
    boxShadow,
    ...htmlButtonAttributes
  }: Props,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const verifiedButtonColor = buttonColor && isAllowedColorType(buttonColor) ? buttonColor : colors.coral01;
  const verifiedTextColor = textColor && isAllowedColorType(textColor) ? textColor : colors.black05;
  const verifiedTextWeight = textWeight && isAllowedAdminFontWeightsType(textWeight) ? textWeight : '600';
  const verifiedTextSize = textSize && isAllowedSizeType(textSize) ? textSize : '22px';
  const verifiedDisabled = typeof disabled === 'boolean' ? disabled : false;
  const verifiedBoxShadow = typeof boxShadow === 'boolean' ? boxShadow : true;
  
  return (
    <>
      <Component
        {...htmlButtonAttributes}
        color={verifiedButtonColor}
        disabled={verifiedDisabled}
        boxShadow={verifiedBoxShadow}
        ref={ref}
      >
        <Typography
          type={'title01'}
          weight={verifiedTextWeight}
          color={verifiedTextColor}
          size={verifiedTextSize}
        >
          {children}
        </Typography>
      </Component>
    </>
  );
};

interface ComponentProps {
  readonly color: ColorsType;
  readonly boxShadow: boolean;
  readonly disabled: boolean;
}

export const Component = styled.button((props: ComponentProps) => ({
  padding: '12px',
  borderRadius: '10px',
  cursor: props.disabled ? 'not-allowed' : 'pointer',
  border: '1px solid transparent',
  backgroundColor: colorsPalette[props.color],
  boxShadow: props.boxShadow
    ? '0px 4px 4px 0px rgba(0,0,0,0.25)'
    : 'none',
}));

export default forwardRef(Button);
