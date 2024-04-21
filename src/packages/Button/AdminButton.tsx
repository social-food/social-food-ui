import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import styled from "@emotion/styled";

interface Props extends HTMLAttributes<HTMLButtonElement> {
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
        disabled = false,
        ...htmlButtonAttributes
    }: Props,
    ref: ForwardedRef<HTMLButtonElement>
) => {
    return (
        <Component
            {...htmlButtonAttributes}
            ref={ref}
        >
            {text}
        </Component>
    );
};

export const Component = styled.button`
  padding: 10px 12px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
`;

export default forwardRef(Button);
