import { BgColorType, IconColorType } from "@/types";

interface CategoryBlok {
  _uid: string;
  title?: string;
  icon?: string;
  bg_color?: BgColorType;
  icon_color?: IconColorType;
}

export type { CategoryBlok };
