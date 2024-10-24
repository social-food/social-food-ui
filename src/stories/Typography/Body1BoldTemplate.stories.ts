import type { Meta, StoryObj } from '@storybook/react';

import { Body1Bold as Body1BoldTemplate } from "@packages/index";

const meta: Meta<typeof Body1BoldTemplate> = {
  title: '텍스트/Typography',
  component: Body1BoldTemplate,
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

export const Body1Bold: Story = {
  args: {
    children: '살어리 살어리랏다 청산에 살어리 랏다',
  },
};