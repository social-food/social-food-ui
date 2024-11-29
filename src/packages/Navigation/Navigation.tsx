import React, { ForwardedRef, forwardRef } from 'react';

import { colors, isAllowedColorType } from '../Palettes/colors.palette';
import { Typography } from "../index";

import { NavigationPropsType } from './type';
import { Link, LogoComponent, MenusComponent, MyPageComponent, NavigationComponent } from "./useNavigation";

const Navigation = (
  {
    hasLogo = false,
    logoImageUrl,
    menus = [],
    hasMyPage = false,
    myPageLink,
    myPageIconUrl = '',
    backgroundColor,
    isSticky = true,
    stickyTop,
  }: NavigationPropsType,
  ref: ForwardedRef<HTMLDivElement>) => {
  
  const verifiedBackgroundColor = !!backgroundColor && isAllowedColorType(backgroundColor) ? backgroundColor : colors.coral01;
  const verifiedStickyTop = isSticky && stickyTop ? stickyTop : (isSticky ? '0px' : 'auto');
  
  return (
    <NavigationComponent
      backgroundColor={verifiedBackgroundColor}
      isSticky={isSticky}
      stickyTop={verifiedStickyTop}
      ref={ref}
    >
      {hasLogo && (
        <LogoComponent>
          {!!logoImageUrl && (
            <Link href={'/'}>
              <img src={logoImageUrl} alt={'로고 이미지'}/>
            </Link>
          )}
        </LogoComponent>
      )}
      
      <MenusComponent>
        <ul>
          {menus.map((menu) => (
            <li>
              <Link href={menu.menuLink}>
                <Typography
                  fontStyle={'GmarketSans'}
                  type={'p'}
                  color={colors.bone03}
                  size={'16px'}
                  weight={'700'}
                >
                  {menu.menuName}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </MenusComponent>
      
      {hasMyPage && (
        <MyPageComponent>
          <Link href={myPageLink}>
            <img src={myPageIconUrl} alt={'마이페이지 아이콘'} style={{ display: 'block' }} />
          </Link>
        </MyPageComponent>
      )}
    </NavigationComponent>
  );
};
export default forwardRef(Navigation);