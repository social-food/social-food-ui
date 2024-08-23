import { forwardRef } from "react";

import { colors } from "../../../Palettes/colors.palette";

import Typography from "../Typography";
import { ITypographyProps } from "../type";

const H2 = (props: ITypographyProps) => {
  const { children, className } = props;
  
  return (
    <Typography
      type={'h2'}
      fontStyle={'GmarketSans'}
      color={colors.black01}
      size={'24px'}
      weight={'700'}
      className={className}
    >
      {children}
    </Typography>
  );
}

export default forwardRef(H2);