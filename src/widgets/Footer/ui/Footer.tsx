import React from "react";
import styles from "./footer.module.scss";
import LogoIcon from "@/shared/assets/icons/Logo.svg?react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { routePaths } from "@/shared/config";
export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <LogoIcon className={styles.logo} />

        <div className={styles.links}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("footer.helpSupport")} </h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.termsOfService")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.security")}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("footer.quickLinks")} </h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.faqs")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.recipes")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.contactUs")}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("footer.quickLinks")} </h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.faqs")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.recipes")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.contactUs")}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("footer.quickLinks")} </h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.faqs")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.recipes")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.contactUs")}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("footer.quickLinks")} </h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.faqs")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.recipes")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={routePaths.home}>
                  {t("footer.contactUs")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        {t("footer.copyright", { year: "2025", company: "nada" })}
      </div>
    </footer>
  );
}
