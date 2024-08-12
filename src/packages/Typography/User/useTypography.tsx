import { css } from "@emotion/react";

import styled from "@emotion/styled";

import { ITypographyStyleProps } from "./type";
import { colorsPalette } from "../../Palettes/colors.palette";

const fontStyle = css`
    @font-face {
        font-family: 'GmarketSans';
        src: url('/src/asset/fonts/GmarketSansLight.woff') format('woff');
        font-weight: 300;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'GmarketSans';
        src: url('/src/asset/fonts/GmarketSansMedium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'GmarketSans';
        src: url('/src/asset/fonts/GmarketSansBold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Pretendard';
        src: url('/src/asset/fonts/Pretendard-Light.woff2') format('woff2');
        font-weight: 300;
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
        src: url('/src/asset/fonts/Pretendard-Bold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
    }
`;

const Component = styled.p<ITypographyStyleProps>`
    ${fontStyle};
    font-family: ${(props) => (props.fontStyle)}, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    
    margin: 0;
    padding: 0;
    font-weight: ${(props) => (props.weight)};
    font-size: ${(props) => (props.size)};
    color: ${(props) => (colorsPalette[props.color])};
`;

export default Component;