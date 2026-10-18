import React from "react";
import PageNotFoundIcon from "@/shared/assets/icons/NotFound.svg?react";
import styles from "./notFoundPage.module.scss";
import { Button } from "@/shared/ui";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { routePaths } from "@/shared/config";
export default function NotFoundPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClickBack = () => {
    if (window.history.length < 1) {
      navigate(routePaths.home);
      return;
    }
    navigate(-1);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <PageNotFoundIcon className-={styles.icon} />
        <h3 className={styles.title}>{t("notFound.title")}</h3>
        <p className={styles.description}>{t("notFound.description")}</p>

        <Button
          onClick={handleClickBack}
          theme="primary"
          className={styles.button}
        >
          {t("notFound.goBack")}
        </Button>
      </div>
    </div>
  );
}
