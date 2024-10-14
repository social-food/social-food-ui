import type { Meta, StoryObj } from '@storybook/react';

import { Body2Bold as Body2BoldTemplate } from "@packages/index";

const meta: Meta<typeof Body2BoldTemplate> = {
  title: '텍스트/Typography',
  component: Body2BoldTemplate,
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
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Body2Bold: Story = {
  args: {
    children: '살어리 살어리랏다 청산에 살어리 랏다',
  },
};