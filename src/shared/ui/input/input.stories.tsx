import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "./Input";
import SearchIcon from "@shared/assets/icons/Search.svg?react";
import { AppIcon } from "../index";
const meta = {
  title: "shared/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { value: "Input value", placeholder: "Input placeholder" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Withvalue: Story = {
  args: {
    value: "any value",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    value: "123",
  },
};

export const Icon: Story = {
  args: {
    icon: <AppIcon Icon={SearchIcon} size={20} />,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Type: Story = {
  args: {
    type: "text",
  },
};

export const ONChange: Story = {
  args: {
    onChange: (value: string) => {
      console.log(value);
    },
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};
