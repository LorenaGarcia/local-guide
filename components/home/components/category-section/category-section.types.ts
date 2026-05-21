import { BgColorType, IconColorType } from "@/types";

interface CategoryBlok {
  _uid: string;
  component: string;
  title?: string;
  icon?: string;
  bg_color?: BgColorType;
  icon_color?: IconColorType;
  [key: string]: any;
}

interface BusinessBlok {
  _uid: string;
  component: string;
  name?: string;
  description?: string;
  image?: { filename: string } | string | any;
  tags?: string[];
  address?: string;
  is_active?: boolean;
  link?: { cached_url: string };
  link_detail?: any;
  [key: string]: any;
}

export type { CategoryBlok, BusinessBlok };
