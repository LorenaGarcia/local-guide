
interface Business {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  rating: number;
  reviewsCount: number;
  description: string;
  image: string;
  isFeatured?: boolean;
  priceLevel: string;
  priceRange?: string;
  priceUnit?: string;
  shortDescription?: string;
  distance?: string;
  tags?: string[];
  tag2?: string;
  location?: {
    lat: number;
    lng: number;
    address: string;
  };
  gallery?: string[];
  socialLinks?: {
    website?: string;
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
  };
  fullDescription?: string;
  amenities?: {
    title: string;
    description: string;
  }[];
  hours?: {
    weekdays: string;
    weekends: string;
  };
  featuredReview?: {
    text: string;
    author: string;
    authorImage: string;
    memberSince: string;
  };
  workshops?: {
    id: string;
    title: string;
    date: string;
    price: string;
    badge?: string;
  }[];
}

interface LocalEvent {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  time: string;
  category: string;
  locationName: string;
  image: string;
  attendeesCount?: number;
  isTrending?: boolean;
  isFeatured?: boolean;
  description?: string;
  fullDescription?: string;
  price?: string;
  locationAddress?: string;
  organizer?: {
    name: string;
    image: string;
  };
  activities?: {
    icon: string;
    title: string;
    description: string;
  }[];
  usefulInfo?: string[];
}
interface BusinessProps {
  businesses: Business[];
  title?: string;
  subtitle?: string;
  itemsPerPage?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  showPagination?: boolean;
}

interface BusinessCardProps {
  business: Business;
}

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyRange: (start: Date | null, end: Date | null) => void;
}

interface CategoryFilterProps {
  categories: { name: string }[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  allLabel?: string;
  className?: string;
}

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  businessName: string;
  initialIndex?: number;
}

interface CategoryCardProps {
  icon: string;
  name: string;
  color: string;
  iconColor: string;
  isActive?: boolean;
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

 type CategoryType = 'Restaurantes' | 'Belleza' | 'Mascotas' | 'Bienestar' | 'Eventos';

export type { Business, LocalEvent, CategoryType, BusinessProps, BusinessCardProps, CalendarModalProps, CategoryFilterProps, GalleryModalProps, CategoryCardProps, PaginationProps}
