import {
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Button } from "../Button/Button";
import styles from "./input.module.scss";

type InputPropType = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

interface InputProps extends InputPropType {
  className?: string;
  value?: string;
  icon?: ReactNode;
  rounded?: boolean;
  disabled?: boolean;
  type?: string;
  onChange?: (value: string) => void;
}
export default function Input(props: InputProps) {
  const [showPass, setShowPass] = useState<boolean>(true);
  const {
    className,
    value,
    icon,
    rounded = false,
    disabled = false,
    onChange,
    type = "text",
    ...rest
  } = props;

  const togglePassword = () => {
    setShowPass((prev) => !prev);
  };
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <div
      className={`${styles.container} ${rounded ? styles.rounded : ""} ${className ?? ""}`}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <input
        {...rest}
        disabled={disabled}
        onChange={handleOnChange}
        className={`${styles.input}  ${rounded ? styles.rounded : ""}`}
        type={showPass && type === "password" ? "text" : type}
        value={value}
      />

      {type === "password" && (
        <Button
          theme="ghost"
          type="button"
          className={styles.passwordButton}
          onClick={togglePassword}
        >
          {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
        </Button>
      )}
    </div>
  );
}
