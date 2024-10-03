import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from "../../packages";

import FoodCardTest from "./FoodCardTest";

const meta: Meta<typeof Grid> = {
  title: '레이아웃/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    mobileColumn: {
      control: {
        type: 'select',
      },
      options: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        12: 12,
      },
    },
    tabletColumn: {
      control: {
        type: 'select',
      },
      options: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        12: 12,
      },
    },
    laptopColumn: {
      control: {
        type: 'select',
      },
      options: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        12: 12,
      },
    },
  }
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: FoodCardTest,
    mobileColumn: 12,
    tabletColumn: 4,
    laptopColumn: 3,
  },
};