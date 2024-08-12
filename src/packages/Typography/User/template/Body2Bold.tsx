import { forwardRef } from "react";

import { colors } from "../../../Palettes/colors.palette";
import Typography from "../Typography";
import { ITypographyProps } from "../type";

const Body2Bold = (props: ITypographyProps) => {
  const { children } = props;
  
  return (
    <Typography
      type={'p'}
      fontStyle={'Pretendard'}
      color={colors.black01}
      size={'12px'}
      weight={'700'}
    >
      {children}
    </Typography>
  );
}

export default forwardRef(Body2Bold);