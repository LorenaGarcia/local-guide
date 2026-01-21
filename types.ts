
export interface Business {
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
  distance?: string;
  tags?: string[];
  location?: {
    lat: number;
    lng: number;
    address: string;
  };
}

export interface LocalEvent {
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
}

export type CategoryType = 'Restaurantes' | 'Belleza' | 'Mascotas' | 'Bienestar' | 'Eventos';
