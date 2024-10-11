import type { Meta, StoryObj } from '@storybook/react';

import { Title1 as Title1Template } from "../../../index";

const meta: Meta<typeof Title1Template> = {
  title: '텍스트/Typography',
  component: Title1Template,
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

export const Title1: Story = {
  args: {
    children: '살어리 살어리랏다 청산에 살어리 랏다',
  },
};