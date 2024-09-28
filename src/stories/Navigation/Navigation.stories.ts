import type { Meta, StoryObj } from '@storybook/react';

import { colors } from '../../packages/Palettes/colors.palette';
import { Navigation } from '../../index';

import IconLogo from '/assets/images/logo.png';

const meta: Meta<typeof Navigation> = {
  title: '내비게이션바/Navigation',
  component: Navigation,
  argTypes: {
    hasLogo: {
      options: {
        true: true,
        false: false,
      },
      control: {
        type: 'select',
      },
      description: '마이페이지 로고 영역 사용'
    },
    logoImageUrl: {
      control: {
        type: 'text',
      },
      description: '마이페이지 이동 url 입력',
    },
    hasMyPage: {
      options: {
        true: true,
        false: false,
      },
      control: {
        type: 'select',
      },
      description: '마이페이지 버튼란 사용'
    },
    myPageLink: {
      control: {
        type: 'text',
      },
      description: '마이페이지 이동 url 입력',
    },
    backgroundColor: {
      options: {
        ...colors,
      },
      control: {
        type: 'select',
      },
      description: '내비게이션 바 배경 색 선택',
    },
    isSticky: {
      options: {
        true: true,
        false: false,
      },
      control: {
        type: 'select',
      },
      description: '내비게이션 바 sticky 여부 선택'
    },
    stickyTop: {
      control: {
        type: 'text',
      },
      description: '내비게이션 바 sticky top 값'
    }
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hasLogo: true,
    logoImageUrl: IconLogo,
    menus: [
      {
        menuName: 'Social Food?',
        menuLink: '/',
      },
      {
        menuName: '두번째 메뉴',
        menuLink: '/',
      },
      {
        menuName: '세번째 메뉴',
        menuLink: '/',
      },
    ],
    hasMyPage: true,
    myPageLink: '',
    backgroundColor: colors.coral01,
    isSticky: true,
    stickyTop: '0px',
  },
};