import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { colors } from "../Palettes/colors.palette";
import { fontSizes } from "../Palettes/sizes.palette";
import { fontWeights } from "../Palettes/weights.palette";

const fontStyle = css`
  @font-face {
    font-family: 'Pretendard';
    src: url('/src/asset/fonts/Pretendard-ExtraLight.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
      font-family: 'Pretendard';
      src: url('/src/asset/fonts/Pretendard-Regular.woff2') format('woff2');
      font-weight: 400;
      font-style: normal;
  }

  @font-face {
      font-family: 'Pretendard';
      src: url('/src/asset/fonts/Pretendard-SemiBold.woff2') format('woff2');
      font-weight: 600;
      font-style: normal;
  }

  @font-face {
      font-family: 'Pretendard';
      src: url('/src/asset/fonts/Pretendard-Bold.woff2') format('woff2');
      font-weight: 700;
      font-style: normal;
  }

  @font-face {
      font-family: 'Alegreya';
      src: url('/src/asset/fonts/Alegreya-Bold.woff') format('woff');
      font-weight: 700;
      font-style: normal;
  }
`;

const TypographyTypes = [
  'head01',
  'subhead01',
  'title01',
  'title02',
  'body01',
  'description01'
] as const;

type TypographyType = typeof TypographyTypes[number];

const isAllowedTypographyTypes = (type: any): boolean => {
  return TypographyTypes.includes(type);
}

const isAllowedColorType = (color: string): boolean => {
  return color in colors;
}

const isAllowedSizeType = (size: string | number): boolean => {
  return fontSizes.includes(size);
}

const isAllowedWeightType = (weight: string | number): boolean => {
  return fontWeights.includes(weight.toString());
}

const getFontSizeByType = (type: TypographyType) => {
  switch (type) {
    case 'head01':
      return '40px';
    case 'subhead01':
      return '32px';
    case 'title01':
      return '22px';
    case 'title02':
      return '20px';
    case 'body01':
      return '16px';
    case 'description01':
      return '12px';
    default:
      return '16px';
  }
}

const getFontWeightByType = (type: TypographyType) => {
  switch (type) {
    case 'head01':
    case 'subhead01':
    case 'title01':
    case 'title02':
      return '700';
    case 'description01':
      return '100';
    case 'body01':
    default:
      return '400';
  }
}

interface ComponentProps {
  readonly color: string;
  readonly size: string;
  readonly weight: string;
}

const HeadComponent = styled.h2<ComponentProps>`
    ${fontStyle};
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    
    margin: 0;
    font-weight: ${(props) => (props.weight)};
    font-size: ${(props) => (props.size)};
    color: ${(props) => (props.color)};
`;

const ParagraphComponent = styled.p<ComponentProps>`
    ${fontStyle};
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    
    margin: 0;
    font-weight: ${(props) => (props.weight)};
    font-size: ${(props) => (props.size)};
    color: ${(props) => (props.color)};
`;

export type { TypographyType }
export {
  isAllowedTypographyTypes,
  isAllowedColorType,
  isAllowedSizeType,
  isAllowedWeightType,
  getFontSizeByType,
  getFontWeightByType,
  HeadComponent,
  ParagraphComponent,
}