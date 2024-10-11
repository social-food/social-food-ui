import type { Meta, StoryObj } from '@storybook/react';

import { FoodCard } from "../../../index";

const meta: Meta<typeof FoodCard> = {
  title: '음식카드/FoodCard',
  component: FoodCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    linkUrl: {
      control: {
        type: 'text',
      },
      description: '이동 링크 url 입력',
    },
    placeImage: {
      control: {
        type: 'text',
      },
      description: '이미지 url 입력',
    },
    placeName: {
      control: {
        type: 'text',
      },
      description: '가게 이름 입력',
    },
    placeRating: {
      control: {
        type: 'text',
      },
      description: '가게 별점 입력',
    },
    placeAddress: {
      control: {
        type: 'text',
      },
      description: '가게 주소 입력',
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    linkUrl: 'javascript: alert("click")',
    placeImage: 'https://picsum.photos/150/150',
    placeName: '음식점 이름',
    placeRating: '5.0',
    placeAddress: '음식점 주소',
  },
};
