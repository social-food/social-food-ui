import type { Meta, StoryObj } from '@storybook/react';

import { Body2Light as Body2LightTemplate } from "../../packages";

const meta: Meta<typeof Body2LightTemplate> = {
  title: '텍스트/Typography',
  component: Body2LightTemplate,
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

export const Body2Light: Story = {
  args: {
    children: '살어리 살어리랏다 청산에 살어리 랏다',
  },
};