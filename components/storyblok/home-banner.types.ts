import { SbBlokData } from "@storyblok/react/rsc";

interface HomeBannerStoryblok extends SbBlokData {
  _uid: string;
  component: "home_banner";
  title?: string;
  description?: string;
  image?: {
    id?: number;
    alt?: string;
    name?: string;
    focus?: string;
    title?: string;
    source?: string;
    filename?: string;
    copyright?: string;
    fieldtype?: string;
    meta_data?: Record<string, any>;
    is_external_url?: boolean;
  };
  _editable?: string;
}

export type { HomeBannerStoryblok };
