import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { AdminButton } from "@packages/index";
import { colors } from "@packages/Palettes/colors.palette";
import { adminFontWeights } from "@packages/Palettes/weights.palette";
import { fontSizes } from "@packages/Palettes/sizes.palette";

const meta: Meta<typeof AdminButton> = {
  title: '버튼/AdminButton',
  component: AdminButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: '버튼에 표시할 텍스트',
    },
    buttonColor: {
      options: {
        ...colors,
      },
      control: {
        type: 'select',
      },
      description: '버튼 배경 색',
    },
    textColor: {
      options: {
        ...colors,
      },
      control: {
        type: 'select',
      },
      description: '버튼 텍스트 색',
    },
    textWeight: {
      options: [
        ...adminFontWeights,
      ],
      control: {
        type: 'select',
      },
      description: '버튼 텍스트 굵기',
    },
    textSize: {
      options: [
        ...fontSizes,
      ],
      control: {
        type: 'select',
      },
      description: '텍스트 크기',
    },
    boxShadow: {
      control: {
        type: 'boolean',
      },
      description: '버튼 박스섀도우 활성화 여부',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: '비활성화 여부'
    }
  },
  args: {
    onClick: fn(),
  }
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Social Food UI Button',
    buttonColor: colors.coral01,
    textColor: colors.black05,
    textWeight: '600',
    boxShadow: true,
    disabled: false,
  },
};
