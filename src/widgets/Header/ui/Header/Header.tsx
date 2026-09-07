import React from "react";
import styles from "./header.module.scss";
import LogoIcon from "@/shared/assets/icons/Logo.svg?react";
import { AppIcon, Button, Input } from "@/shared/ui";
import MapPin from "@/shared/assets/icons/MapPin.svg?react";
import SearchIcon from "@/shared/assets/icons/Search.svg?react";
import UserIcon from "@/shared/assets/icons/Users.svg?react";

import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { routePaths } from "@/shared/config";
export default function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLoginClick = () => [navigate(routePaths.login)];

  return (
    <header className={styles.header}>
      <LogoIcon className={styles.logo} />
      <Button theme="ghost">
        <AppIcon filled Icon={MapPin} size={15} />
        <span>Helwan, Egypt</span>
      </Button>
      <div className="bg-black">
        <Input
          rounded
          placeholder={t("header.input.placeholder")}
          icon={<AppIcon Icon={SearchIcon} size={20} theme="clean" filled />}
        />
      </div>

      <div className={styles.section}>
        <Button theme="primary">{t("header.cart")}</Button>
        <Button onClick={handleLoginClick} theme="outline">
          <AppIcon size={18} theme="clean" Icon={UserIcon} />
          <span>{t("header.login")}</span>
        </Button>

        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
