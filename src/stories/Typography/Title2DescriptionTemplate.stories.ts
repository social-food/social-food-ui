import type { Meta, StoryObj } from '@storybook/react';

import { Title2Description as Title2DescriptionTemplate } from "../../index";

const meta: Meta<typeof Title2DescriptionTemplate> = {
  title: '텍스트/Typography',
  component: Title2DescriptionTemplate,
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

export const Title2Description: Story = {
  args: {
    children: '살어리 살어리랏다 청산에 살어리 랏다',
  },
};