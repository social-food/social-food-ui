import React, { forwardRef } from "react";

import { IGridProps } from "./type";
import { Component, isAllowedGridColumnType } from "./useGrid";

const Grid = (props: IGridProps) => {
  const { children, mobileColumn, tabletColumn, laptopColumn } = props;
  
  const allowedMobile = !!mobileColumn && isAllowedGridColumnType(mobileColumn) ? mobileColumn : 12;
  const allowedTablet = !!tabletColumn && isAllowedGridColumnType(tabletColumn) ? tabletColumn : 12;
  const allowedLaptop = !!laptopColumn && isAllowedGridColumnType(laptopColumn) ? laptopColumn : 12;
  
  return (
    <Component
      mobileColumn={allowedMobile}
      tabletColumn={allowedTablet}
      laptopColumn={allowedLaptop}
    >
      {children}
    </Component>
  )
}

export default forwardRef(Grid);