import type { Meta, StoryObj } from '@storybook/react';

import { Body1Light as Body1LightTemplate } from "../../../index";

const meta: Meta<typeof Body1LightTemplate> = {
  title: '텍스트/Typography',
  component: Body1LightTemplate,
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

export const Body1Light: Story = {
  args: {
    children: '살어리 살어리랏다 청산에 살어리 랏다',
  },
};