import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SearchInput } from '@packages/index';

import IconSearch from '/assets/images/defaultSearchIcon.svg';

const meta: Meta<typeof SearchInput> = {
  title: '검색박스/SearchInput',
  component: SearchInput,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      description: 'label 영역 텍스트 입력'
    },
    description: {
      control: {
        type: 'text',
      },
      description: 'description 영역 텍스트 입력'
    },
    inputWidth: {
      control: {
        type: 'text',
      },
      description: 'inputWidth 크기 입력(px)'
    },
    placeholder: {
      control: {
        type: 'text',
      },
      description: 'placeholder 영역 텍스트 입력'
    },
    searchIconUrl: {
      control: {
        type: 'text',
      },
      description: '검색 아이콘 url 입력',
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    searchIconUrl: IconSearch,
    searchButtonOnClick: fn(() => window.alert('button click')),
  },
};