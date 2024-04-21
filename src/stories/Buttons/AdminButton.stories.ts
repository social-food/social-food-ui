import type { Meta, StoryObj } from '@storybook/react';

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
    }
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Hello Social Food UI',
    },
};