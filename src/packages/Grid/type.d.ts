import { gridColumnNumbers } from "./useGrid";

type GridColumnType = typeof gridColumnNumbers[number];

interface GridStyleComponentProps {
  mobileColumn: GridColumnType;
  tabletColumn: GridColumnType;
  laptopColumn: GridColumnType;
}

type GridComponentProps = Partial<GridStyleComponentProps>;

interface IGridProps extends GridComponentProps {
  children: ReactNode;
}

export type {
  GridStyleComponentProps,
  GridComponentProps,
  IGridProps,
}