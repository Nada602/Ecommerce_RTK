import styles from "./appIcon.module.scss";
import { cn } from "@/shared/lib/styling/ClassNames";
type ThemeType = "clean" | "background";
interface AppIcon {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  className?: string;
  size?: number;
  theme?: ThemeType;
  filled?: boolean;
}

export default function AppIcon(props: AppIcon) {
  const { Icon, className, size = 24, theme = "clean", filled = false } = props;
  const AppIcon = (
    <Icon
      width={size}
      height={size}
      className={cn(styles.icon, className, {
        [styles.filled]: filled,
      })}
    />
  );

  if (theme === "background") {
    return <div className={styles.wrapper}>{AppIcon}</div>;
  }

  return AppIcon;
}
