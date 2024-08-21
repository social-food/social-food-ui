import { forwardRef } from "react";

import { colors } from "../../../Palettes/colors.palette";
import Typography from "../Typography";
import { ITypographyProps } from "../type";

const Body2Light = (props: ITypographyProps) => {
  const { children, className } = props;
  
  return (
    <Typography
      type={'p'}
      fontStyle={'Pretendard'}
      color={colors.black01}
      size={'12px'}
      weight={'300'}
      className={className}
    >
      {children}
    </Typography>
  );
}

export default forwardRef(Body2Light);