import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import styled from "@emotion/styled";

import { colors, colorsPalette, ColorsType } from "../Palettes/colors.palette";

interface Props extends HTMLAttributes<HTMLButtonElement> {
    readonly text: string;

    readonly color?: ColorsType;
    readonly boxShadow?: boolean;
    readonly disabled?: boolean;
}

/**
 *  @Component - Button
 *  @props text - 버튼 텍스트 {string}
 *  @props color - 버튼 컬러 {ColorsType}
 *  @props disabled - 버튼 비활성화 {boolean}
 *  @props boxShadow - 버튼 박스섀도우 {boolean}
 */
const Button = (
    {
        text,
        color = colors.red01,
        disabled = false,
        boxShadow = true,
        ...htmlButtonAttributes
    }: Props,
    ref: ForwardedRef<HTMLButtonElement>
) => {
    return (
        <Component
            {...htmlButtonAttributes}
            color={color}
            disabled={disabled}
            boxShadow={boxShadow}
            ref={ref}
        >
            {text}
        </Component>
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
    fontSize: '22px',
    fontWeight: '600',
    minWidth: '140px',
    border: '1px solid transparent',
    backgroundColor: colorsPalette[props.color],
    color: props.color === 'red01'
        ? colorsPalette.gray01
        : (props.color === 'gray01'
            ? colorsPalette.red01
            : colorsPalette.white),
    boxShadow: props.boxShadow
        ? '0px 4px 4px 0px rgba(0,0,0,0.25)'
        : 'none',
}));

export default forwardRef(Button);
