import type { Meta, StoryObj } from '@storybook/react';

import { colors } from "@packages/Palettes/colors.palette";
import { fontSizes } from "@packages/Palettes/sizes.palette";
import { fontWeights } from "@packages/Palettes/weights.palette";

import { Typography } from "@packages/index";

const meta: Meta<typeof Typography> = {
  title: '텍스트/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: '텍스트 내용 입력',
    },
    type: {
      options: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        p: 'p',
        span: 'span'
      },
      control: {
        type: 'select',
      },
      description: '텍스트 태그 타입',
    },
    fontStyle: {
      options: {
        Pretendard: 'Pretendard',
        GmarketSans: 'GmarketSans',
      },
      control: {
        type: 'select',
      },
      description: '텍스트 폰트 타입',
    },
    color: {
      options: {
        default: null,
        ...colors,
      },
      control: {
        type: 'select',
      },
      description: '텍스트 색',
    },
    size: {
      options: [
        'default',
        ...fontSizes,
      ],
      control: {
        type: 'select',
      },
      description: '텍스트 크기',
    },
    weight: {
      options: [
        'default',
        ...fontWeights,
      ],
      control: {
        type: 'select',
      },
      description: '텍스트 굵기',
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Social Food UI Typography',
    type: 'p',
    fontStyle: 'Pretendard'
  },
};