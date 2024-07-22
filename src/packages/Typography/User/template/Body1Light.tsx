import { forwardRef } from "react";

import { colors } from "../../../Palettes/colors.palette";
import Typography from "../Typography";
import { ITypographyProps } from "../type";

const Body1Light = (props: ITypographyProps) => {
  const { children } = props;
  
  return (
    <Typography
      type={'p'}
      fontStyle={'Pretendard'}
      color={colors.black01}
      size={'14px'}
      weight={'300'}
    >
      {children}
    </Typography>
  );
}

export default forwardRef(Body1Light);