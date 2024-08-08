import { ColorsType } from "../Palettes/colors.palette";

interface INavMenus {
  menuName: string;
  menuLink: string;
}

interface IDefaultProps {
  hasMyPage: boolean;
  myPageLink?: string;
  hasLogo: boolean;
  logoImageUrl?: string;
  menus: INavMenus[];
  
  backgroundColor?: ColorsType;
  isSticky?: boolean;
  stickyTop?: string;
}

interface IHasMyPageProps extends IDefaultProps {
  hasMyPage: true;
  myPageLink: string;
}

interface IHasLogoProps extends IDefaultProps {
  hasLogo: true;
  logoImageUrl: string;
}

type HasMyPageAndLogoPropsType = IHasMyPageProps & IHasLogoProps;
type NavigationPropsType = IHasMyPageProps | IHasLogoProps | HasMyPageAndLogoPropsType;

export type { NavigationPropsType }