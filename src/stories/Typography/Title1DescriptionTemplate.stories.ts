import type { Meta, StoryObj } from '@storybook/react';

import { Title1Description as Title1DescriptionTemplate } from "../../packages";

const meta: Meta<typeof Title1DescriptionTemplate> = {
  title: '텍스트/Typography',
  component: Title1DescriptionTemplate,
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

export const Title1Description: Story = {
  args: {
    children: '살어리 살어리랏다 청산에 살어리 랏다',
  },
};