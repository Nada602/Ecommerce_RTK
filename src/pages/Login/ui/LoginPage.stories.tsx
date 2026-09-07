import type { Meta, StoryObj } from "@storybook/react-vite";

import LoginPage from "./LoginPage";

const meta = {
  title: "pages/LoginPage",
  component: LoginPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
