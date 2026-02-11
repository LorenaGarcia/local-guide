
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
    name: 'Serene Pilates Studio',
    category: 'Fitness y Bienestar',
    subCategory: 'PILATES',
    tag2: 'BOUTIQUE',
    rating: 4.9,
    reviewsCount: 128,
    description: 'Santuario boutique dedicado al arte del movimiento y alineación consciente.',
    shortDescription: 'Clases personalizadas y Reformers de alta gama para todos los niveles.',
    image: 'https://images.unsplash.com/photo-1518611012118-29615b63eeac?auto=format&fit=crop&q=80&w=1200',
    isFeatured: true,
    priceLevel: '$35/clase',
    priceRange: '$35 – $60',
    priceUnit: 'por sesión',
    distance: '0.8 millas',
    tags: ['MEJOR VALORADO'],
    location: { 
      lat: 37.7749, 
      lng: -122.4194, 
      address: '124 Boutique Row, Arts District, San Francisco' 
    },
    gallery: [
      'https://images.unsplash.com/photo-1518611012118-29615b63eeac?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1599447421416-3414502de1f3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80&w=800'
    ],
    fullDescription: 'Serene Pilates Studio es un santuario boutique dedicado al arte del movimiento. Fundado en 2018, nos especializamos en Pilates contemporáneo, combinando métodos tradicionales con ciencia atlética moderna. Nuestro espacio está diseñado para ser tu escape urbano: inundado de luz natural, con reformers de alta gama y liderado por un equipo de instructores certificados apasionados por la alineación consciente.',
    socialLinks: {
      website: 'www.serenepilates.com',
      instagram: '@serenepilates',
      facebook: 'Serene Pilates Studio',
      whatsapp: '+1 234 567 890'
    },
    amenities: [
      { title: 'Instructores expertos', description: 'Todo el personal está certificado con más de 500 horas de formación.' },
      { title: 'Clases pequeñas', description: 'Máximo 6 alumnos por sesión para atención personalizada.' },
      { title: 'Amenidades incluidas', description: 'Mats, toallas y agua de cortesía para todos los clientes.' },
      { title: 'Ecológico', description: 'Equipos sostenibles y limpieza libre de químicos.' }
    ],
    hours: {
      weekdays: '6:00 AM - 9:00 PM',
      weekends: '8:00 AM - 4:00 PM'
    },
    featuredReview: {
      text: '"Los instructores aquí transformaron mi enfoque del fitness. No es solo un entrenamiento; es un reinicio para mi mente y cuerpo cada mañana."',
      author: 'Sarah Jenkins',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
      memberSince: 'Miembro desde 2021'
    },
    workshops: [
      { id: 'w1', title: 'Taller de Restauración Luna Llena', date: 'Domingo, 24 Oct • 6:30 PM - 8:30 PM', price: '$45', badge: 'EVENTO ESPECIAL' },
      { id: 'w2', title: 'Intro a Clase de Reformer', date: 'Todos los Martes • 8:00 AM', price: 'GRATIS', badge: 'PRIMERA VISITA' }
    ]
  },
  {
    id: '2',
    name: 'Iron Haven Gym',
    category: 'Fitness y Bienestar',
    subCategory: 'GIMNASIO',
    tag2: 'CROSSFIT',
    rating: 4.7,
    reviewsCount: 156,
    description: 'Entrenamiento funcional y pesas libres 24/7 con equipamiento profesional.',
    shortDescription: 'Entrenamiento funcional y pesas libres 24/7 con equipamiento profesional.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    priceLevel: '$$',
    priceRange: '$45 – $120',
    priceUnit: 'al mes',
    distance: '1.2 millas',
    tags: ['24/7'],
    location: { lat: 37.7858, lng: -122.4064, address: '567 Iron Way, San Francisco' }
  },
  {
    id: '3',
    name: 'Flow Yoga Collective',
    category: 'Fitness y Bienestar',
    subCategory: 'YOGA',
    tag2: 'MEDITACIÓN',
    rating: 5.0,
    reviewsCount: 89,
    description: 'Vinyasa, Hatha y sesiones de meditación guiada en un entorno relajante.',
    shortDescription: 'Vinyasa, Hatha y sesiones de meditación guiada en un entorno relajante.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    priceLevel: '$',
    priceRange: '$20 – $180',
    priceUnit: 'planes',
    distance: '2.5 millas',
    tags: ['NIVEL AVANZADO'],
    location: { lat: 37.7599, lng: -122.4376, address: '890 Zen St, San Francisco' }
  },
  {
    id: '4',
    name: 'Pure Balance Pilates',
    category: 'Fitness y Bienestar',
    subCategory: 'PILATES',
    tag2: 'BOUTIQUE',
    rating: 4.8,
    reviewsCount: 112,
    description: 'Entrena tu core con los mejores especialistas de la zona.',
    shortDescription: 'Entrena tu core con los mejores especialistas de la zona.',
    image: 'https://images.unsplash.com/photo-1518611012118-29615b63eeac?auto=format&fit=crop&q=80&w=800',
    priceLevel: '$$',
    priceRange: '$40 – $70',
    priceUnit: 'por sesión',
    distance: '3.0 millas',
    tags: ['ATENCIÓN PERSONAL'],
    location: { lat: 37.7749, lng: -122.4312, address: 'Centro, Madrid' }
  },
  {
    id: '5',
    name: 'Elite Crossfit Hub',
    category: 'Fitness y Bienestar',
    subCategory: 'CROSSFIT',
    tag2: 'GIMNASIO',
    rating: 4.9,
    reviewsCount: 310,
    description: 'WODs desafiantes y comunidad activa para amantes del alto rendimiento.',
    shortDescription: 'WODs desafiantes y comunidad activa para amantes del alto rendimiento.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    priceLevel: '$$',
    priceRange: '$80 – $150',
    priceUnit: 'al mes',
    distance: '1.5 millas',
    location: { lat: 37.7858, lng: -122.4164, address: 'District CrossFit' }
  },
  {
    id: '6',
    name: 'Zen Space Yoga',
    category: 'Fitness y Bienestar',
    subCategory: 'YOGA',
    tag2: 'MEDITACIÓN',
    rating: 4.6,
    reviewsCount: 142,
    description: 'Encuentra tu paz interior en pleno centro de la ciudad.',
    shortDescription: 'Encuentra tu paz interior en pleno centro de la ciudad.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    priceLevel: '$',
    priceRange: '$15 – $120',
    priceUnit: 'planes',
    distance: '2.0 millas',
    location: { lat: 37.7599, lng: -122.4276, address: 'Downtown Sanctuary' }
  }
];

export const EVENTS: LocalEvent[] = [
  {
    id: 'e1',
    title: 'Neon Night Bazaar: Arte y Ritmos',
    date: 'Sáb, 24 Oct',
    month: 'OCT',
    day: '24',
    time: '18:00 - 23:00',
    category: 'Bazares locales',
    locationName: 'Pabellón Central',
    image: 'https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?auto=format&fit=crop&q=80&w=1200',
    isTrending: true,
    isFeatured: true,
    attendeesCount: 156,
    description: 'Vive la magia de la artesanía local bajo luces de neón. Más de 50 vendedores, sets de DJ...',
    fullDescription: 'Prepárate para una noche inolvidable donde la creatividad local cobra vida bajo una atmósfera eléctrica. El Neon Night Bazaar no es solo un mercado; es una experiencia inmersiva que celebra el talento de nuestra comunidad en un entorno de luces neón y arte urbano. En esta edición, hemos seleccionado a más de 50 expositores que presentan desde joyería contemporánea hasta piezas de arte reciclado. Disfruta de la mejor gastronomía local en nuestra zona de food trucks y déjate llevar por los ritmos de los mejores DJs de la escena independiente.',
    price: 'Gratis',
    locationAddress: 'Av. Creatividad 450, Nave 12, Distrito de Diseño, Ciudad Capital.',
    organizer: {
      name: 'Colectivo Arte Urbano',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
    },
    activities: [
      { icon: 'palette', title: 'Live Painting', description: 'Artistas locales interviniendo murales en tiempo real.' },
      { icon: 'equalizer', title: 'DJ Sets', description: 'Ritmos electrónicos y funk toda la noche.' },
      { icon: 'restaurant', title: 'Gastro-Zona', description: 'Fusión de sabores locales y comida internacional.' },
      { icon: 'flare', title: 'Show de Luces', description: 'Instalaciones de luz y proyecciones dinámicas.' }
    ],
    usefulInfo: ['Pet friendly', 'Estacionamiento gratuito', 'Acceso para sillas de ruedas']
  },
  {
    id: 'e2',
    title: 'Cuarteto de Cuerdas: Atardecer en el Jardín',
    date: 'Mié, 28 Oct',
    month: 'OCT',
    day: '28',
    time: '19:30 - 21:00',
    category: 'Música en vivo',
    locationName: 'Jardin Botánico',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    attendeesCount: 45,
    description: 'Una velada íntima de Vivaldi y clásicos contemporáneos en los jardines botánicos...'
  },
  {
    id: 'e3',
    title: 'Cerámica Consciente y Mañana de Matcha',
    date: 'Vie, 30 Oct',
    month: 'OCT',
    day: '30',
    time: '10:00 - 13:00',
    category: 'Arte y Artesanía',
    locationName: 'Clay Studio Lab',
    image: 'https://images.unsplash.com/photo-1493106641515-6b563ad35f1f?auto=format&fit=crop&q=80&w=800',
    attendeesCount: 24,
    description: 'Relájate y aprende el arte de la cerámica manual mientras disfrutas de matcha...'
  },
  {
    id: 'e4',
    title: 'Gran Festival Gastronómico Local',
    date: 'Jue, 05 Nov',
    month: 'NOV',
    day: '05',
    time: '12:00 - 20:00',
    category: 'Gastronomía',
    locationName: 'Plaza Mayor',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
    attendeesCount: 300,
    description: 'Una celebración de sabores regionales con más de 20 chefs locales y puestos de...'
  },
  {
    id: 'e5',
    title: 'Mañana de Vida Sostenible',
    date: 'Sáb, 07 Nov',
    month: 'NOV',
    day: '07',
    time: '09:00 - 14:00',
    category: 'Bazares locales',
    locationName: 'Centro Verde',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    attendeesCount: 80,
    description: 'Intercambia semillas, compra productos residuo cero y conoce a activistas...'
  }
];
