import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { AdminButton } from "../../packages";

const meta: Meta<typeof AdminButton> = {
    title: '버튼/AdminButton',
    component: AdminButton,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        text: {
            control: {
                type: 'text',
            },
            description: '버튼에 표시할 텍스트',
        },
        color: {
            options: {
                Red01: 'red01',
                Gray01: 'gray01',
                Black01: 'black01',
            },
            control: {
                type: 'select',
            },
            description: '버튼 색',
        },
        boxShadow: {
            control: {
                type: 'boolean',
            },
            description: '버튼 박스섀도우 활성화 여부',
        },
        disabled: {
            control: {
                type: 'boolean',
            },
            description: '비활성화 여부'
        }
    },
    args: {
        onClick: fn(),
    }
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Social Food UI Button',
        color: 'red01',
        boxShadow: true,
        disabled: false,
    },
};
