import styled from "@emotion/styled";

import { colorsPalette, ColorsType } from "../Palettes/colors.palette";

interface ComponentProps {
  readonly color: ColorsType;
  readonly boxShadow: boolean;
  readonly disabled: boolean;
}

export const Component = styled.button<ComponentProps>`
  padding: 12px;
  border-radius: 10px;
  cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
  border: 1px solid transparent;
  background-color: ${(props) => colorsPalette[props.color]};
  box-shadow: ${(props) => props.boxShadow ? '0px 4px 4px 0px rgba(0,0,0,0.25)' : 'none'}
`