import { forwardRef } from "react";

import { colors } from "../../../Palettes/colors.palette";

import Typography from "../Typography";
import { ITypographyProps } from "../type";

const Title2 = (props: ITypographyProps) => {
  const { children, className } = props;
  
  return (
    <Typography
      type={'h4'}
      fontStyle={'GmarketSans'}
      color={colors.black01}
      size={'16px'}
      weight={'700'}
      className={className}
    >
      {children}
    </Typography>
  );
}

export default forwardRef(Title2);