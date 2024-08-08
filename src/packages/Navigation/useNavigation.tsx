import styled from "@emotion/styled";

import { colors, colorsPalette, ColorsType } from "../Palettes/colors.palette";

const NavigationComponent = styled.div<INavigationComponentProps>`
    width: 100%;
    height: 100px;
    padding: 10px 20px;
    overflow: hidden;
    box-sizing: border-box;
    background-color: ${(props) => (colorsPalette[props.backgroundColor])};
    
    display: flex;
    align-items: center;

    position: ${(props) => (props.isSticky ? 'sticky' : 'static')};
    top: ${(props) => (props.stickyTop)};
    z-index: 50;
`;

const Link = styled.a`
    display: block;
    cursor: pointer;
    text-decoration: none;

    &:hover,
    &:visited {
        color: inherit;
        text-decoration: none;
    }
`;

interface INavigationComponentProps {
  backgroundColor: ColorsType;
  isSticky: boolean;
  stickyTop: string;
}

const LogoComponent = styled.div`
    width: 110px;
    margin-right: 30px;

    display: flex;
    flex: 0 0;
    align-content: center;
    justify-content: flex-start;

    & a {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
    }

    & img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
`;

const MenusComponent = styled.nav`
    flex: 1 1;
    
    & ul {
        margin: 0;
        padding: 0;
        
        display: flex;
        column-gap: 30px;
    }
    
    & li {
        list-style: none;
    }
    
    & a {
        transition: 0.1s all;
        
        position: relative;
        
        &::after {
            content: '';
            width: 0;
            height: 1px;
            display: block;
            position: absolute;
            z-index: 1;
            bottom: -2px;
            left: 0;
            background-color: ${colorsPalette[colors.white01]};
        }
    }
    
    & a:hover {
        transform: scale(1.125);
        text-shadow: 0 4px 4px rgba(0,0,0,0.25);
        
        &::after {
            width: 100%;
        }
    }
`;

const MyPageComponent = styled.div`
    flex: 0 0;
    
    & img {
        width: 50px;
        height: 50px;
    }
`;

export {
  Link,
  NavigationComponent,
  LogoComponent,
  MenusComponent,
  MyPageComponent,
}