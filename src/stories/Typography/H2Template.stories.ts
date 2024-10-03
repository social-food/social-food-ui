import type { Meta, StoryObj } from '@storybook/react';

import { H2 as H2Template } from "../../packages";

const meta: Meta<typeof H2Template> = {
  title: '텍스트/Typography',
  component: H2Template,
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

export const H2: Story = {
  args: {
    children: '살어리 살어리랏다 청산에 살어리 랏다',
  },
};