import { ReactNode } from "react";

import { ColorsType } from "../../Palettes/colors.palette";
import { FontSizesType } from "../../Palettes/sizes.palette";
import { FontWeightsType } from "../../Palettes/weights.palette";

interface ITypographyProps {
  readonly children: ReactNode;
  
  readonly fontStyle?: 'GmarketSans' | 'Pretendard';
  readonly type?: ElementType;
  readonly color?: ColorsType;
  readonly size?: FontSizesType;
  readonly weight?: FontWeightsType;
}

interface ITypographyStyleProps {
  readonly fontStyle: string;
  readonly color: ColorsType;
  readonly size: FontSizesType;
  readonly weight: FontWeightsType;
}

export type {
  ITypographyProps,
  ITypographyStyleProps,
}