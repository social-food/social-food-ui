import { forwardRef } from "react";

import { colors } from "../../../Palettes/colors.palette";

import Typography from "../Typography";
import { ITypographyProps } from "../type";

const H1 = (props: ITypographyProps) => {
  const { children, className } = props;
  
  return (
    <Typography
      type={'h1'}
      fontStyle={'GmarketSans'}
      color={colors.black01}
      size={'28px'}
      weight={'700'}
      className={className}
    >
      {children}
    </Typography>
  );
}

export default forwardRef(H1);