import { forwardRef } from "react";

import { colors } from "../../../Palettes/colors.palette";

import Typography from "../Typography";
import { ITypographyProps } from "../type";

const Title1 = (props: ITypographyProps) => {
  const { children, className } = props;
  
  return (
    <Typography
      type={'h3'}
      fontStyle={'GmarketSans'}
      color={colors.black01}
      size={'20px'}
      weight={'700'}
      className={className}
    >
      {children}
    </Typography>
  );
}

export default forwardRef(Title1);