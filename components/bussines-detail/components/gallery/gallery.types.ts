interface GalleryProps {
    gallery: string[];
    image: string;
    name: string;
    openGallery: (index: number) => void;
}

export type { GalleryProps };