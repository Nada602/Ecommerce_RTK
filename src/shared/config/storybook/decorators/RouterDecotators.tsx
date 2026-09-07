import type { Decorator } from "@storybook/react-vite";
import { BrowserRouter } from "react-router";
export const RouterDecorators: Decorator = (Story, context) => {
  return (
    <BrowserRouter>
      <Story {...context} />
    </BrowserRouter>
  );
};
