
import { Business, LocalEvent } from './types';

const COLORS = {
  babyBlue: '#C1E1DC',
  peach: '#FFCCAC',
  butter: '#FFEB94',
  butterscotch: '#FDD475',
};

const BUSINESSES: Business[] = [
  {
    id: '1',
    name: 'Serene Pilates Studio',
    category: 'Salud',
    subCategory: 'PILATES',
    tag2: 'BOUTIQUE',
    rating: 4.9,
    reviewsCount: 128,
    description: 'Santuario boutique dedicado al arte del movimiento y alineación consciente.',
    shortDescription: 'Clases personalizadas y Reformers de alta gama para todos los niveles.',
    image: 'https://ik.imagekit.io/rezeve/business/fc33b7a3-d36e-48b3-8db8-6ae36a971ae5/image/editor/bb22199e-108b-4e3b-a2bc-abea69659d03.jpg',
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
      'https://images.squarespace-cdn.com/content/v1/67ac3737684f1d77a47bf50d/e65804c7-d531-464e-9e81-5b2b4c6e4563/Room1_004.jpg',
      'https://images.squarespace-cdn.com/content/v1/516cd467e4b06cb596b9d567/1749790073548-3X0MO4ZSSHZZZLNRD1DS/LMX06732.jpg?format=2500w',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTN0wtWCK22SCENRKYgtbJ5GuGFFQRL_w5lQ&s',
      'https://images.squarespace-cdn.com/content/v1/5f1e377d1df2720f7bec5fb8/6cc4c08f-bf03-4f76-851d-049ee5dcb0d2/IMG_4771.jpeg'
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
    workshops: [
      { id: 'w1', title: 'Taller de Restauración Luna Llena', date: 'Domingo, 24 Oct • 6:30 PM - 8:30 PM', price: '$45', badge: 'EVENTO ESPECIAL' },
      { id: 'w2', title: 'Intro a Clase de Reformer', date: 'Todos los Martes • 8:00 AM', price: 'GRATIS', badge: 'PRIMERA VISITA' },
      { id: 'w3', title: 'Intro a Clase de Reformer2', date: 'Todos los Martes • 8:00 AM', price: '$150', badge: 'EVENTO ESPECIAL' },
      { id: 'w4', title: 'Intro a Clase de Reformer3', date: 'Todos los Martes • 8:00 AM', price: '$50', badge: 'PRIMERA VISITA' }
    ]
  },
  {
    id: '2',
    name: 'Iron Haven Gym',
    category: 'Salud',
    subCategory: 'GIMNASIO',
    tag2: 'CROSSFIT',
    rating: 4.7,
    reviewsCount: 156,
    description: 'Entrenamiento funcional y pesas libres 24/7 con equipamiento profesional.',
    shortDescription: 'Entrenamiento funcional y pesas libres 24/7 con equipamiento profesional.',
    image: 'https://mrfitness.com.mx/wp-content/uploads/2025/08/GIMNASIO-2-3.jpg',
    priceLevel: '$$',
    priceRange: '$45 – $120',
    priceUnit: 'al mes',
    distance: '1.2 millas',
    tags: ['24/7'],
    location: { lat: 37.7858, lng: -122.4064, address: '567 Iron Way, San Francisco' },
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_c2_f81ibC7KScZaQfqOQsB2tSMOwl4F-RQ&s',
      'https://franquiciashoy.com/img/blog/franquicias-en-mexico-Imgs-790x440-02.jpg',
      'https://nutrifitness.mx/wp-content/uploads/2023/07/javi-gimnasio-1024x1024.jpg'
    ],
    workshops: [
      { id: 'w1', title: 'Taller de Restauración Luna Llena', date: 'Domingo, 24 Oct • 6:30 PM - 8:30 PM', price: '$45', badge: 'EVENTO ESPECIAL' },
      { id: 'w2', title: 'Intro a Clase de Reformer', date: 'Todos los Martes • 8:00 AM', price: 'GRATIS', badge: 'PRIMERA VISITA' }
    ]
  },
  {
    id: '3',
    name: 'Flow Yoga Collective',
    category: 'Salud',
    subCategory: 'YOGA',
    tag2: 'MEDITACIÓN',
    rating: 5.0,
    reviewsCount: 89,
    description: 'Vinyasa, Hatha y sesiones de meditación guiada en un entorno relajante.',
    shortDescription: 'Vinyasa, Hatha y sesiones de meditación guiada en un entorno relajante.',
    image: 'https://www.bkmag.com/wp-content/uploads/2025/06/Screenshot-2025-06-04-at-3.24.13%E2%80%AFPM.png',
    priceLevel: '$',
    priceRange: '$20 – $180',
    priceUnit: 'planes',
    distance: '2.5 millas',
    tags: ['NIVEL AVANZADO'],
    location: { lat: 37.7599, lng: -122.4376, address: '890 Zen St, San Francisco' },
    gallery: [
      'https://images.squarespace-cdn.com/content/v1/60ac0e06e76b4732906b763f/1683843268963-J95ETOBM8BC9KVG40NFU/tcn-home-page_mobile.jpg?format=2500w',
      'https://images.squarespace-cdn.com/content/v1/5f3b180bebcf7a5e8e8685a9/1b927512-184d-4759-a730-0d2b0e696d1a/Victoria+Web-29.jpg',
      'https://notion.blupp.co/v1/asset/a12566fa-090b-45d4-9154-6f9cd72efa94/c8f8141b-24a9-4f7b-a584-b34801663ff8/0a9f4f6e-e28c-4b68-b81b-64dd1c237c1b/yoga-sanctum-at-the-imperial-new-delhi-scaled-qf1qqtiwmnldrchip6h9nadakzz5ogxih6pznh4rc4.jpg?quality=80&width=1200'
    ],
  },
  {
    id: '4',
    name: 'Pure Balance Pilates',
    category: 'Salud',
    subCategory: 'PILATES',
    tag2: 'BOUTIQUE',
    rating: 4.8,
    reviewsCount: 112,
    description: 'Entrena tu core con los mejores especialistas de la zona.',
    shortDescription: 'Entrena tu core con los mejores especialistas de la zona.',
    image: 'https://assets-cdn.wellhub.com/images/?su=https://images.partners.gympass.com/image/partners/b8cd1072-0232-4f9f-8303-735f12cab4ac/lg_9528f5f4-7fad-4ba3-b570-2ae60dbba0f5_Imagen1Wellhub.jpg',
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
    category: 'Salud',
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
    category: 'Salud',
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
  },
  {
    id: '7',
    name: 'La Boquería Central',
    category: 'Gastronomía',
    subCategory: 'TAPAS',
    tag2: 'TRADICIONAL',
    rating: 4.8,
    reviewsCount: 450,
    description: 'Auténtica cocina mediterránea con los ingredientes más frescos del mercado.',
    shortDescription: 'Tapas de autor y vinos seleccionados en un ambiente vibrante.',
    image: 'https://images.unsplash.com/photo-1515467873231-15362ce09503?auto=format&fit=crop&q=80&w=800',
    priceLevel: '$$',
    priceRange: '$25 – $80',
    priceUnit: 'por persona',
    distance: '0.4 millas',
    location: { lat: 37.7749, lng: -122.4194, address: 'Arts District' }
  },
  {
    id: '8',
    name: 'Urban Tech Hub',
    category: 'Servicios',
    subCategory: 'COWORKING',
    tag2: 'EMPRENDEDORES',
    rating: 4.7,
    reviewsCount: 120,
    description: 'Espacios de trabajo colaborativo diseñados para la innovación.',
    shortDescription: 'Coworking premium con internet de alta velocidad y café ilimitado.',
    image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800',
    priceLevel: '$$',
    priceRange: '$15 – $300',
    priceUnit: 'planes',
    distance: '1.1 millas',
    location: { lat: 37.7858, lng: -122.4064, address: 'Tech Plaza' }
  },
  {
    id: '9',
    name: 'Starlight Cinema',
    category: 'Ocio',
    subCategory: 'ENTRETENIMIENTO',
    tag2: 'CLÁSICOS',
    rating: 4.9,
    reviewsCount: 850,
    description: 'Vive el cine como nunca antes en nuestra sala boutique vintage.',
    shortDescription: 'Cine de autor y clásicos restaurados con sonido Dolby Atmos.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800',
    priceLevel: '$',
    priceRange: '$12 – $20',
    priceUnit: 'ticket',
    distance: '2.2 millas',
    location: { lat: 37.7599, lng: -122.4376, address: 'Sunset Blvd' }
  },
  {
    id: '10',
    name: 'The Vintage Boutique',
    category: 'Compras',
    subCategory: 'MODA',
    tag2: 'SOSTENIBLE',
    rating: 4.6,
    reviewsCount: 95,
    description: 'Curaduría exclusiva de ropa vintage y accesorios únicos.',
    shortDescription: 'Moda sostenible y piezas de diseño con historia.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    priceLevel: '$$',
    priceRange: '$30 – $200',
    priceUnit: 'prenda',
    distance: '0.5 millas',
    location: { lat: 37.7749, lng: -122.4212, address: 'Mission St' }
  },
  {
    id: '11',
    name: 'Luna Spa & Wellness',
    category: 'Bienestar',
    subCategory: 'RELAJACIÓN',
    tag2: 'MASAJES',
    rating: 5.0,
    reviewsCount: 230,
    description: 'Un refugio de paz diseñado para armonizar tu cuerpo y mente.',
    shortDescription: 'Tratamientos faciales, masajes terapéuticos y rituales de bienestar.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
    priceLevel: '$$$',
    priceRange: '$90 – $250',
    priceUnit: 'sesión',
    distance: '1.8 millas',
    location: { lat: 37.7858, lng: -122.4164, address: 'Garden Heights' }
  },
  {
    id: '12',
    name: 'Arts Convention Center',
    category: 'Eventos',
    subCategory: 'CONFERENCIAS',
    tag2: 'CULTURAL',
    rating: 4.5,
    reviewsCount: 1500,
    description: 'El espacio ideal para ferias, conferencias y exhibiciones de arte.',
    shortDescription: 'Instalaciones modernas para eventos corporativos y culturales.',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800',
    priceLevel: '$$$',
    priceRange: '$500 – $5000',
    priceUnit: 'alquiler',
    distance: '3.5 millas',
    location: { lat: 37.7749, lng: -122.4312, address: 'Civic Center' }
  }
];

const EVENTS: LocalEvent[] = [
  {
    id: 'e1',
    title: 'Neon Night Bazaar: Arte y Ritmos',
    date: 'Sáb, 24 Marzo',
    month: 'MAR',
    day: '24',
    time: '18:00 - 23:00',
    category: 'Bazares locales',
    locationName: 'Pabellón Central',
    image: 'https://www.bkkkids.com/wp-content/uploads/2021/03/The-Neon-Night-Bazaar.jpg',
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
    date: 'Mié, 28 Marzo',
    month: 'MAR',
    day: '28',
    time: '19:30 - 21:00',
    category: 'Música en vivo',
    locationName: 'Jardin Botánico',
    image: 'https://inba.gob.mx/multimedia/prensa/galerias/22105/22105-GAL-cuarteto_de_cuerdas_de_bellas_artes.png',
    attendeesCount: 45,
    description: 'Una velada íntima de Vivaldi y clásicos contemporáneos en los jardines botánicos...'
  },
  {
    id: 'e3',
    title: 'Cerámica Consciente y Mañana de Matcha',
    date: 'Vie, 30 Marzo',
    month: 'MAR',
    day: '30',
    time: '10:00 - 13:00',
    category: 'Arte y Artesanía',
    locationName: 'Clay Studio Lab',
    image: 'https://images.adsttc.com/media/images/6656/92a0/652f/7801/9d7c/cbfa/large_jpg/taller-ceramico-liza-crea-equals-plus-x_22.jpg?1716949694',
    attendeesCount: 24,
    description: 'Relájate y aprende el arte de la cerámica manual mientras disfrutas de matcha...'
  },
  {
    id: 'e4',
    title: 'Gran Festival Gastronómico Local',
    date: 'Jue, 26 Feb',
    month: 'FEB',
    day: '26',
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
    date: 'Sáb, 28 Feb',
    month: 'FEB',
    day: '28',
    time: '09:00 - 14:00',
    category: 'Bazares locales',
    locationName: 'Centro Verde',
    image: 'https://el-pais.brightspotcdn.com/uploads/2017/09/10/59b4c28da2a7b.jpeg',
    attendeesCount: 80,
    description: 'Intercambia semillas, compra productos residuo cero y conoce a activistas...'
  },
  {
    id: 'e6',
    title: 'Taller de Acuarela al Aire Libre',
    date: 'Sáb, 28 Feb',
    month: 'FEB',
    day: '28',
    time: '11:00 - 13:30',
    category: 'Arte y artesanía',
    locationName: 'Parque Central',
    image: 'https://fundacioncb.es/wp-content/uploads/2025/03/high-angle-painter-with-painting-elements_1024x1024-1.jpg',
    attendeesCount: 15,
    description: 'Aprende técnicas básicas de acuarela rodeado de naturaleza. Incluye materiales.'
  },
  {
    id: 'e7',
    title: 'Noche de Jazz & Tapas',
    date: 'Vie, 20 Nov',
    month: 'NOV',
    day: '20',
    time: '20:00 - 23:00',
    category: 'Música en vivo',
    locationName: 'The Blue Note Cafe',
    image: 'https://offloadmedia.feverup.com/cdmxsecreta.com/wp-content/uploads/2024/04/23140307/jazz-cdmx.jpg',
    attendeesCount: 50,
    description: 'Disfruta de una selección de jazz clásico mientras degustas tapas gourmet locales.'
  },
  {
    id: 'e8',
    title: 'Feria del Libro Independiente',
    date: 'Sáb, 21 Nov',
    month: 'NOV',
    day: '21',
    time: '10:00 - 19:00',
    category: 'Arte y artesanía',
    locationName: 'Centro Cultural',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=800',
    attendeesCount: 120,
    description: 'Descubre nuevas editoriales y autores locales en esta feria dedicada a las letras.'
  },
  {
    id: 'e9',
    title: 'Yoga & Meditación al Amanecer',
    date: 'Dom, 22 Nov',
    month: 'NOV',
    day: '22',
    time: '07:30 - 09:00',
    category: 'Salud',
    locationName: 'Terraza Sol',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    attendeesCount: 30,
    description: 'Comienza el domingo con energía renovada en nuestra sesión de yoga frente al mar.'
  }
];

const CATEGORIES_EVENTS = [
    { name: 'Bazares locales', color: 'bg-[#8FB7B0]' },
    { name: 'Arte y artesanía', color: 'bg-[#FFCCAC]' },
    { name: 'Música en vivo', color: 'bg-[#8FB7B0]' },
    { name: 'Gastronomía', color: 'bg-[#FFCCAC]' }
  ];

const CATEGORIES_BUSINESS = [
    { icon: 'restaurant', name: 'Gastronomía', color: '#FFF4E5', iconColor: '#E69138' },
    { icon: 'fitness_center', name: 'Salud', color: '#E5F9F6', iconColor: '#45B3A2' },
    { icon: 'local_mall', name: 'Compras', color: '#FFF9E5', iconColor: '#D4A017' },
    { icon: 'business_center', name: 'Servicios', color: '#FFEEEB', iconColor: '#E06666' },
    { icon: 'nightlife', name: 'Ocio', color: '#F1F5F9', iconColor: '#475569' },
    { icon: 'calendar_today', name: 'Eventos', color: '#E5F6F3', iconColor: '#2D8B7A' },
    { icon: 'spa', name: 'Bienestar', color: '#FDF2F8', iconColor: '#DB2777' },
];

const NAV_LINKS = [
    { name: 'Explorar', path: '/' },
    { name: 'Eventos', path: '/events' },
    { name: 'Negocios', path: '/search' },
  ];

const MONTH_MAP: { [key: string]: number } = {
    'ENE': 0, 'FEB': 1, 'MAR': 2, 'ABR': 3, 'MAY': 4, 'JUN': 5,
    'JUL': 6, 'AGO': 7, 'SEP': 8, 'OCT': 9, 'NOV': 10, 'DIC': 11
  };

const MONTHS = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

const DAYS_OF_WEEK = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"];

const COMPANYS_SOCIAL_MEDIA = [
              { icon: 'language', label: 'Sitio Web', color: 'bg-emerald-50 text-emerald-600', iconColor: 'text-emerald-500' },
              { icon: 'photo_camera', label: 'Instagram', color: 'bg-orange-50 text-orange-600', iconColor: 'text-orange-500' },
              { icon: 'public', label: 'Facebook', color: 'bg-blue-50 text-blue-600', iconColor: 'text-blue-500' },
              { icon: 'forum', label: 'WhatsApp', color: 'bg-green-50 text-green-600', iconColor: 'text-green-500' }
            ];

export {COLORS, BUSINESSES, EVENTS, CATEGORIES_BUSINESS, CATEGORIES_EVENTS, COMPANYS_SOCIAL_MEDIA, NAV_LINKS, MONTH_MAP, MONTHS, DAYS_OF_WEEK}


