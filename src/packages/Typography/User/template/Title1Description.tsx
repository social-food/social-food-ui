import { forwardRef } from "react";

import { colors } from "../../../Palettes/colors.palette";

import Typography from "../Typography";
import { ITypographyProps } from "../type";

const Title1Description = (props: ITypographyProps) => {
  const { children, className } = props;
  
  return (
    <Typography
      type={'p'}
      fontStyle={'GmarketSans'}
      color={colors.black01}
      size={'12px'}
      weight={'500'}
      className={className}
    >
      {children}
    </Typography>
  );
}

export default forwardRef(Title1Description);