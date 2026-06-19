export interface StoryblokImage {
    filename: string;
    [key: string]: any;
}

export interface StoryblokActivity {
    icon?: string | StoryblokImage;
    title?: string;
    description?: string;
}

export interface StoryblokOrganizer {
    name?: string;
    image?: string | StoryblokImage;
    social_links?: Array<{
        web?: string | { url?: string };
        email?: string;
        [key: string]: any;
    }>;
}

export interface EventBlok {
    title?: string;
    date?: string;
    schedule?: string;
    time?: string;
    address?: string;
    locationAddress?: string;
    category?: string;
    banner?: string | StoryblokImage;
    image?: string | StoryblokImage;
    is_trending?: boolean;
    isTrending?: boolean;
    is_featured?: boolean;
    isFeatured?: boolean;
    description?: string;
    fullDescription?: string;
    price?: string;
    organizer?: StoryblokOrganizer[];
    activities?: StoryblokActivity[];
    useful_Info?: string[];
    usefulInfo?: string[];
    [key: string]: any;
}

export interface EventStory {
    name: string;
    content: {
        body?: any[];
        [key: string]: any;
    };
    [key: string]: any;
}

export interface MappedEventData {
    title: string;
    date: string;
    time: string;
    locationName: string;
    locationAddress: string;
    category: string;
    image: string;
    isTrending: boolean;
    isFeatured: boolean;
    description: string;
    fullDescription: string;
    price: string;
    organizer: {
        name: string;
        image: string;
        webUrl: string | null;
        email: string | null;
    } | null;
    activities: Array<{
        icon: string;
        title: string;
        description: string;
    }>;
    usefulInfo: string[];
}