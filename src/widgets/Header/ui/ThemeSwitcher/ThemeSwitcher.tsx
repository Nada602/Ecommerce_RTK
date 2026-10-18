import { useTheme } from "@/shared/config/theme/useTheme";
import { AppIcon, Button } from "@/shared/ui";
import CircleIcon from "@/shared/assets/icons/Circle.svg?react";

import React from "react";
export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} theme="ghost">
      <AppIcon theme="clean" Icon={CircleIcon} filled />
    </Button>
  );
};
