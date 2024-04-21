import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import styled from "@emotion/styled";

import { AdminButtonVariant, AdminButtonVariantEnums } from "./AdminButton.variant";
import { colorsPalette } from "../Palettes/colors.palette";

interface Props extends HTMLAttributes<HTMLButtonElement> {
    readonly variant: AdminButtonVariant;
    readonly text: string;
    readonly disabled?: boolean;
}

/**
 *  @Component - Button
 *  @props text - 버튼 텍스트 {string}
 *  @props disabled - 버튼 비활성화 {boolean}
 */
const Button = (
    {
        text,
        variant = AdminButtonVariantEnums.DEFAULT,
        disabled = false,
        ...htmlButtonAttributes
    }: Props,
    ref: ForwardedRef<HTMLButtonElement>
) => {
    return (
        <Component
            {...htmlButtonAttributes}

            primary={variant === AdminButtonVariantEnums.PRIMARY || variant === AdminButtonVariantEnums.DEFAULT}
            secondary={variant === AdminButtonVariantEnums.SECONDARY}
            accent={variant === AdminButtonVariantEnums.ACCENT}
            error={variant === AdminButtonVariantEnums.ERROR}

            disabled={disabled}

            ref={ref}
        >
            {text}
        </Component>
    );
};

interface ComponentProps {
    readonly primary?: boolean;
    readonly secondary?: boolean;
    readonly accent?: boolean;
    readonly error?: boolean;

    readonly disabled?: boolean;
}

export const Component = styled.button((props: ComponentProps) => ({
    padding: '10px 14px',
    borderRadius: '8px',
    cursor: props.disabled ? 'not-allowed' : 'cursor',
    fontSize: '12px',
    border: props.error ? `1px solid ${colorsPalette.red}` : '1px solid transparent',
    backgroundColor: props.primary ? colorsPalette.red : (props.secondary ? colorsPalette.orange200 : (props.accent ? colorsPalette.skyBlue : (props.error ? colorsPalette.pureWhite : colorsPalette.red))),
    color: props.primary ? colorsPalette.white : (props.secondary ? colorsPalette.deepBlue : (props.accent ? colorsPalette.pureWhite : (props.error ? colorsPalette.red : colorsPalette.white))),
}));

export default forwardRef(Button);
