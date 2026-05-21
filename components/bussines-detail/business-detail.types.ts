export interface StoryblokImage {
    id?: number;
    filename: string;
    alt?: string;
    name?: string;
    title?: string;
    [key: string]: any;
}

export interface AmenityBlok {
    _uid: string;
    title: string;
    description: string;
    component: string;
}

export interface ButtonUrl {
    id?: string;
    url?: string;
    linktype?: string;
    fieldtype?: string;
    cached_url?: string;
}

export interface EventButtonBlok {
    _uid: string;
    ttle: string;
    url: ButtonUrl;
    component: string;
}

export interface EventBlok {
    _uid: string;
    title: string;
    price: string;
    tag: string;
    schedule: string;
    button?: EventButtonBlok[];
    component: string;
}

export interface ScheduleBlok {
    _uid: string;
    days: string;
    schedule: string;
    component: string;
}

export interface SocialMediaLinks {
    website?: string;
    facebook?: string;
    whatsapp?: string;
    instagram?: string;
}

export interface SocialLinksBlok extends SocialMediaLinks {
    _uid: string;
    component: string;
}

export interface BusinessDetailBlok {
    _uid?: string;
    component?: string;
    title?: string;
    name?: string;
    category?: string;
    is_featured?: boolean;
    description?: string;
    full_description?: string;
    description_title?: string;
    image?: string | StoryblokImage;
    images?: string[] | StoryblokImage[];
    amenities?: AmenityBlok[];
    events?: EventBlok[];
    schedules?: ScheduleBlok[];
    address?: string;
    address_place?: string;
    price?: string;
    socila_links?: SocialLinksBlok[];
    [key: string]: any;
}

export interface BusinessDetailProps {
    blok?: BusinessDetailBlok;
    params?: any;
}


