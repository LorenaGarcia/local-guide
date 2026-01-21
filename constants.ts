
import { Business, LocalEvent } from './types';

export const COLORS = {
  babyBlue: '#C1E1DC',
  peach: '#FFCCAC',
  butter: '#FFEB94',
  butterscotch: '#FDD475',
};

export const BUSINESSES: Business[] = [
  {
    id: '1',
    name: 'The Roastary & Co.',
    category: 'Restaurantes',
    subCategory: 'Cafetería',
    rating: 4.9,
    reviewsCount: 240,
    description: 'Café artesanal y repostería casera en un ambiente de trabajo minimalista.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    priceLevel: '$$',
    tags: ['Especialidad', 'Brunch'],
    location: { lat: 40.4168, lng: -3.7038, address: 'Centro, Madrid' }
  },
  {
    id: '2',
    name: 'Paz Interior Yoga',
    category: 'Bienestar',
    subCategory: 'Pilates',
    rating: 4.8,
    reviewsCount: 156,
    description: 'Conecta con tu cuerpo y mente a través de sesiones personalizadas.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    priceLevel: '$$',
    distance: '0.8 millas',
    tags: ['Hatha', 'Vinyasa', 'Meditación'],
    location: { lat: 40.4180, lng: -3.7000, address: 'Distrito Financiero' }
  },
  {
    id: '3',
    name: 'Patas y Bigotes',
    category: 'Mascotas',
    subCategory: 'Cuidado',
    rating: 5.0,
    reviewsCount: 89,
    description: 'Premios orgánicos premium y servicios de peluquería profesional.',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800',
    priceLevel: '$',
    tags: ['Grooming', 'Organico']
  },
  {
    id: '4',
    name: 'Barbería Cortes Clásicos',
    category: 'Belleza',
    subCategory: 'Estilo',
    rating: 4.7,
    reviewsCount: 112,
    description: 'Afeitados tradicionales y peinados modernos para caballeros.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
    priceLevel: '$$'
  },
  {
    id: '5',
    name: 'Pizza Horno Fresco',
    category: 'Restaurantes',
    subCategory: 'Italiana',
    rating: 4.9,
    reviewsCount: 310,
    description: 'Auténticas pizzas al horno de piedra con ingredientes locales.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    priceLevel: '$$'
  }
];

export const EVENTS: LocalEvent[] = [
  {
    id: 'e1',
    title: 'Neon Night Bazaar: Arte y Ritmos',
    date: '24 Oct',
    month: 'OCT',
    day: '24',
    time: '18:00 - 23:00',
    category: 'Bazares locales',
    locationName: 'Plaza de la Comunidad',
    image: 'https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?auto=format&fit=crop&q=80&w=1200',
    isTrending: true,
    attendeesCount: 156
  },
  {
    id: 'e2',
    title: 'Cuarteto de Cuerdas: Atardecer en el Jardín',
    date: '28 Oct',
    month: 'OCT',
    day: '28',
    time: '19:30 - 21:00',
    category: 'Música en vivo',
    locationName: 'Botánico',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    attendeesCount: 45
  },
  {
    id: 'e3',
    title: 'Cerámica Consciente y Mañana de Matcha',
    date: '02 Nov',
    month: 'NOV',
    day: '02',
    time: '10:00 - 13:00',
    category: 'Arte y artesanía',
    locationName: 'Clay Studio Lab',
    image: 'https://images.unsplash.com/photo-1493106641515-6b563ad35f1f?auto=format&fit=crop&q=80&w=800',
    attendeesCount: 24
  }
];
