import type { Meta, StoryObj } from '@storybook/react';

import { AdminTypography } from "@packages/index";
import { colors } from "@packages/Palettes/colors.palette";
import { fontSizes } from "@packages/Palettes/sizes.palette";
import { adminFontWeights } from "@packages/Palettes/weights.palette";

const meta: Meta<typeof AdminTypography> = {
  title: '텍스트/AdminTypography',
  component: AdminTypography,
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
        Head01: 'head01',
        SubHead01: 'subhead01',
        Title01: 'title01',
        Title02: 'title02',
        Body01: 'body01',
        Description01: 'description01',
      },
      control: {
        type: 'select',
      },
      description: '텍스트 타입',
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
        ...adminFontWeights,
      ],
      control: {
        type: 'select',
      },
      description: '텍스트 굵기 커스텀',
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Social Food UI Typography',
    type: 'head01',
  },
};