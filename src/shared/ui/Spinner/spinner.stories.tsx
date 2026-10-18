import type { Meta, StoryObj } from "@storybook/react-vite";

import { Spinner } from "./Spinner";
const meta = {
  title: "shared/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: "primary",
  },
};

export const Secondary: Story = {
  args: {
    theme: "secondary",
  },
};

export const Lg: Story = {
  args: {
    size: "lg",
  },
};

export const Sm: Story = {
  args: {
    size: "sm",
  },
};

export const Md: Story = {
  args: {
    size: "md",
  },
};
