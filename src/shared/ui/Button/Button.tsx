import React, { type ButtonHTMLAttributes, type ReactNode } from "react";
import styles from "./button.module.scss";
type ButtonSize = "xs" | "sm" | "md" | "lg";
type ButtonForm = "rounded" | "pill" | "circle";
type ButtonTheme = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  size?: ButtonSize;
  form?: ButtonForm;
  theme?: ButtonTheme;
  disabled?: boolean;
}

export const Button = (props: ButtonProp) => {
  const {
    children,
    className,
    size = "md",
    form = "pill",
    theme = "primary",
    disabled = false,

    ...rest
  } = props;

  const classNameButton = [
    styles.button,
    styles[size],
    styles[form],
    styles[theme],
    className,
    disabled ? styles.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button {...rest} disabled={disabled} className={classNameButton}>
      {children}
    </button>
  );
};
