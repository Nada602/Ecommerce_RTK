import type { Preview } from "@storybook/react-vite";
// Storybook/Vite handles this stylesheet import at runtime.
// @ts-expect-error The SCSS module is provided by the Vite stylesheet loader.
import "../src/app/styles/index.scss";
import {
  ThemeDecorators,
  RouterDecorators,
  LanguageDecorators,
} from "../src/shared/config/storybook";
const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "App theme",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "theme-pink", title: "Pink" },
          { value: "theme-blue", title: "Blue" },
        ],
        dynamicTitle: true,
      },
      defaultValue: "theme-pink",
    },
    locale: {
      name: "Locale",
      description: "App locale",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", title: "English" },
          { value: "ar", title: "Arabic" },
        ],
        dynamicTitle: true,
      },
      defaultValue: "en",
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [ThemeDecorators, RouterDecorators,LanguageDecorators],
};

export default preview;
