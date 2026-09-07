import type { Meta, StoryObj } from "@storybook/react-vite";
import AppIcon from "./AppIcon";
import SearchIcon from "@/shared/assets/icons/search.svg?react";
const meta = {
  title: "shared/AppIcon",
  component: AppIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { Icon: SearchIcon },
} satisfies Meta<typeof AppIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithBackground: Story = {
  args: {
    theme: "background",
  },
};

export const Clean: Story = {
  args: {
    theme: "clean",
  },
};

export const ClassName: Story = {
  args: {
    className: "bg-red-500",
  },
};

export const Filled: Story = {
  args: {
    filled: true,
  },
};

export const Size: Story = {
  args: {
    size: 24,
  },
};
