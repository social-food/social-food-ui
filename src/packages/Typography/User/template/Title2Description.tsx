import { forwardRef } from "react";

import { colors } from "../../../Palettes/colors.palette";
import Typography from "../Typography";
import { ITypographyProps } from "../type";

const Title2Description = (props: ITypographyProps) => {
  const { children } = props;
  
  return (
    <Typography
      type={'p'}
      fontStyle={'GmarketSans'}
      color={colors.black01}
      size={'8px'}
      weight={'300'}
    >
      {children}
    </Typography>
  );
}

export default forwardRef(Title2Description);