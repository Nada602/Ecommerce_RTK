import {
  LanguageListIcon,
  type supportedLngsType,
} from "@/shared/config/i18n/LanguageListIcon";
import { AppIcon, Button } from "@/shared/ui";
import React from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const language = i18n.language as supportedLngsType;
  const toggleLanguage = () => {
    i18n.changeLanguage(language === "en" ? "ar" : "en");
  };
  return (
    <Button onClick={toggleLanguage} theme="ghost">
      <AppIcon size={24} Icon={LanguageListIcon[language]} />
    </Button>
  );
};
