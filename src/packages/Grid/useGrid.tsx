import styled from "@emotion/styled";

import { mediaSizes } from "../../style/media";
import { GridStyleComponentProps } from "./type";

const gridColumnNumbers = [ 1, 2, 3, 4, 6, 12];

const isAllowedGridColumnType = (column: any): boolean => {
  return gridColumnNumbers.includes(column);
}

const getRepeatValue = (column: number) => {
  return Math.floor(12 / column);
}

const Component = styled.div<GridStyleComponentProps>`
  display: grid;
  grid-template-columns: ${(props: GridStyleComponentProps) => (props.mobileColumn) ? `repeat(${getRepeatValue(props.mobileColumn)}, 1fr)` : 'auto'};
  gap: 16px;
  
  @media (min-width: ${mediaSizes.tablet}) {
    grid-template-columns: ${(props: GridStyleComponentProps) => (props.tabletColumn) ? `repeat(${getRepeatValue(props.tabletColumn)}, 1fr)` : 'inherit'};
  }

  @media (min-width: ${mediaSizes.laptop}) {
    grid-template-columns: ${(props: GridStyleComponentProps) => (props.laptopColumn) ? `repeat(${getRepeatValue(props.laptopColumn)}, 1fr)` : 'inherit'};
    gap: 24px;
  }
`;

export {
  gridColumnNumbers,
  isAllowedGridColumnType,
  Component,
}