import { BgColorType, IconColorType } from "@/types";

interface CategoryBlok {
  _uid: string;
  title?: string;
  icon?: string;
  bg_color?: BgColorType;
  icon_color?: IconColorType;
}

interface BusinessBlok {
  _uid: string;
  name?: string;
  description?: string;
  image?: { filename: string } | string | any;
  tags?: string[];
  address?: string;
  is_active?: boolean;
  [key: string]: any;
}

export type { CategoryBlok, BusinessBlok };
