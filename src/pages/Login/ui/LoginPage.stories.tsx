import type { Meta, StoryObj } from "@storybook/react-vite";
import { RouterDecorators, ThemeDecorators, LanguageDecorators } from "@/shared/config/storybook";
import LoginPage from "./LoginPage";

const meta = {
  title: "pages/LoginPage",
  component: LoginPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [ThemeDecorators, RouterDecorators, LanguageDecorators],
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
