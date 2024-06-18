import React, { ForwardedRef, HTMLAttributes, forwardRef, ReactNode } from "react";

import styled from "@emotion/styled";

import { colors, colorsPalette, ColorsType, isAllowedColorType } from "../Palettes/colors.palette";
import Typography from "../Typography/AdminTypography";
import { FontWeightsType, isAllowedWeightType } from "../Palettes/weights.palette";
import { FontSizesType, isAllowedSizeType } from "../Palettes/sizes.palette";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  readonly children: ReactNode;
  
  readonly buttonColor?: ColorsType;
  readonly textColor?: ColorsType;
  readonly textWeight?: FontWeightsType;
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
  if (!buttonColor || !isAllowedColorType(buttonColor)) {
    buttonColor = colors.coral01;
  }
  
  if (!textColor || !isAllowedColorType(textColor)) {
    textColor = colors.black05;
  }
  
  if (!textWeight || !isAllowedWeightType(textWeight)) {
    textWeight = '600';
  }
  
  if (!textSize || !isAllowedSizeType(textSize)) {
    textSize = '22px';
  }
  
  if (typeof disabled !== 'boolean') {
    disabled = false;
  }
  
  if (typeof boxShadow !== 'boolean') {
    boxShadow = true;
  }
  
  return (
    <>
      <Component
        {...htmlButtonAttributes}
        color={buttonColor}
        disabled={disabled}
        boxShadow={boxShadow}
        ref={ref}
      >
        <Typography
          type={'title01'}
          weight={textWeight}
          color={textColor}
          size={textSize}
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
