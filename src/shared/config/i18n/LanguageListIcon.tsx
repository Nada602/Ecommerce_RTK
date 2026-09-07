import type { FunctionComponent } from "react";
import type { supportedLngs } from "./i18n";
import ArabicIcon from "@/shared/assets/icons/Arabic.svg?react";
import EnglishIcon from "@/shared/assets/icons/English.svg?react";

export type supportedLngsType = (typeof supportedLngs)[number];
type LanguageListIconType = Record<
  supportedLngsType,
  FunctionComponent<React.SVGProps<SVGSVGElement>>
>;

export const LanguageListIcon: LanguageListIconType = {
  en: EnglishIcon,
  ar: ArabicIcon,
};
