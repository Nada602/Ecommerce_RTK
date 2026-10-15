import type { Meta, StoryObj } from "@storybook/react-vite";
import { RouterDecorators, ThemeDecorators, LanguageDecorators } from "@/shared/config/storybook";
import HomePage from "./HomePage";

const meta = {
  title: "pages/HomePage",
  component: HomePage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [ThemeDecorators, RouterDecorators, LanguageDecorators],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
