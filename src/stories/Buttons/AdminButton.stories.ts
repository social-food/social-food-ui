import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { AdminButton } from "../../packages";
import { AdminButtonVariantEnums } from "../../packages/Button/AdminButton.variant";

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
        variant: {
            options: Object.values(AdminButtonVariantEnums),
            control: {
                type: 'select',
                labels: {
                    [AdminButtonVariantEnums.DEFAULT]: 'Default',
                    [AdminButtonVariantEnums.PRIMARY]: 'Primary',
                    [AdminButtonVariantEnums.SECONDARY]: 'Secondary',
                    [AdminButtonVariantEnums.ACCENT]: 'Accent',
                    [AdminButtonVariantEnums.ERROR]: 'Error',
                },
            },
            description: '버튼 스타일',
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
        text: 'Hello Social Food UI',
    },
};

export const Primary: Story = {
    args: {
        text: 'Hello Social Food UI Primary',
        variant: AdminButtonVariantEnums.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        text: 'Hello Social Food UI Secondary',
        variant: AdminButtonVariantEnums.SECONDARY,
    },
};

export const Accent: Story = {
    args: {
        text: 'Hello Social Food UI Accent',
        variant: AdminButtonVariantEnums.ACCENT,
    },
};

export const Error: Story = {
    args: {
        text: 'Hello Social Food UI Error',
        variant: AdminButtonVariantEnums.ERROR,
    },
};

export const Disabled: Story = {
    args: {
        text: 'Disabled Button',
        disabled: true,
    },
};
