import type { Meta, StoryObj } from '@storybook/react';

import { H1 as H1Template } from "../../index";

const meta: Meta<typeof H1Template> = {
  title: '텍스트/Typography',
  component: H1Template,
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

export const H1: Story = {
  args: {
    children: '살어리 살어리랏다 청산에 살어리 랏다',
  },
};