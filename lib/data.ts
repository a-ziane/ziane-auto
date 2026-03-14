export type CarSpecs = {
  fuel: string
  horsepower: string
  torque: string
  transmission: string
  drivetrain: string
  engine: string
  mileage: string
  seats: string
}

export type Car = {
  id: string
  brand: string
  model: string
  year: number
  price: string
  description: string
  media: { url: string; type: 'image' | 'video' }[]
  videoUrl?: string
  specs: CarSpecs
  available: boolean
  rating: number
}

export const cars: Car[] = [
  {
    id: '1',
    brand: 'Geely',
    model: 'Coolray Manuel (Gris + Blanc)',
    year: 2026,
    price: '285M DZD',
    description: 'Stylish crossover with manual transmission and two-tone finish.',
    media: [
      { url: '/cars/coolray-manuel-1.jpg', type: 'image' },
      { url: '/cars/coolray-manuel-2.jpg', type: 'image' }
    ],
    videoUrl: '/cars/coolray-manuel.mp4',
    specs: {
      fuel: 'Gasoline',
      horsepower: '172 hp',
      torque: '255 Nm',
      transmission: '6-speed manual',
      drivetrain: 'FWD',
      engine: '1.5L turbo',
      mileage: '6.7 L/100km (approx)',
      seats: '5'
    },
    available: true,
    rating: 4.7
  },
  {
    id: '2',
    brand: 'Geely',
    model: 'Coolray Full',
    year: 2026,
    price: '390M DZD',
    description: 'Full option Coolray with premium tech and comfort.',
    media: [
      { url: '/cars/coolray-full-1.jpg', type: 'image' },
      { url: '/cars/coolray-full-2.jpg', type: 'image' }
    ],
    videoUrl: '/cars/coolray-full.mp4',
    specs: {
      fuel: 'Gasoline',
      horsepower: '177 hp',
      torque: '255 Nm',
      transmission: '7-speed DCT',
      drivetrain: 'FWD',
      engine: '1.5L turbo',
      mileage: '6.5 L/100km (approx)',
      seats: '5'
    },
    available: true,
    rating: 4.6
  },
  {
    id: '3',
    brand: 'Geely',
    model: 'Coolray Full Toit Gris',
    year: 2026,
    price: '380M DZD',
    description: 'Full option Coolray with gray roof styling.',
    media: [
      { url: '/cars/coolray-toit-gris-1.jpg', type: 'image' },
      { url: '/cars/coolray-toit-gris-2.jpg', type: 'image' }
    ],
    videoUrl: '/cars/coolray-toit-gris.mp4',
    specs: {
      fuel: 'Gasoline',
      horsepower: '177 hp',
      torque: '255 Nm',
      transmission: '7-speed DCT',
      drivetrain: 'FWD',
      engine: '1.5L turbo',
      mileage: '6.6 L/100km (approx)',
      seats: '5'
    },
    available: true,
    rating: 4.6
  },
  {
    id: '4',
    brand: 'Geely',
    model: 'Coolray 1.5 Turbo Sans Package',
    year: 2026,
    price: '360M DZD',
    description: '1.5 Turbo performance without extra package.',
    media: [
      { url: '/cars/coolray-turbo-1.jpg', type: 'image' },
      { url: '/cars/coolray-turbo-2.jpg', type: 'image' }
    ],
    videoUrl: '/cars/coolray-turbo.mp4',
    specs: {
      fuel: 'Gasoline',
      horsepower: '172 hp',
      torque: '255 Nm',
      transmission: '6-speed automatic',
      drivetrain: 'FWD',
      engine: '1.5L turbo',
      mileage: '6.8 L/100km (approx)',
      seats: '5'
    },
    available: true,
    rating: 4.5
  },
  {
    id: '5',
    brand: 'Kia',
    model: 'KX1',
    year: 2026,
    price: '320M DZD',
    description: 'Compact SUV with modern design and smart tech.',
    media: [
      { url: '/cars/kx1-1.jpg', type: 'image' },
      { url: '/cars/kx1-2.jpg', type: 'image' }
    ],
    videoUrl: '/cars/kx1.mp4',
    specs: {
      fuel: 'Gasoline',
      horsepower: '112 hp',
      torque: '146 Nm',
      transmission: 'CVT',
      drivetrain: 'FWD',
      engine: '1.4L',
      mileage: '6.2 L/100km (approx)',
      seats: '5'
    },
    available: true,
    rating: 4.4
  },
  {
    id: '6',
    brand: 'Kia',
    model: 'Seltos Luxury',
    year: 2026,
    price: '430M DZD',
    description: 'Luxury trim with premium interior and safety tech.',
    media: [
      { url: '/cars/seltos-luxury-1.jpg', type: 'image' },
      { url: '/cars/seltos-luxury-2.jpg', type: 'image' }
    ],
    videoUrl: '/cars/seltos-luxury.mp4',
    specs: {
      fuel: 'Gasoline',
      horsepower: '149 hp',
      torque: '180 Nm',
      transmission: 'IVT',
      drivetrain: 'FWD',
      engine: '2.0L',
      mileage: '6.9 L/100km (approx)',
      seats: '5'
    },
    available: true,
    rating: 4.7
  },
  {
    id: '7',
    brand: 'Volkswagen',
    model: 'Tharu XR Full',
    year: 2026,
    price: '445M DZD',
    description: 'Full option Tharu XR with advanced driver assist.',
    media: [
      { url: '/cars/tharu-xr-1.jpg', type: 'image' },
      { url: '/cars/tharu-xr-2.jpg', type: 'image' }
    ],
    videoUrl: '/cars/tharu-xr.mp4',
    specs: {
      fuel: 'Gasoline',
      horsepower: '150 hp',
      torque: '250 Nm',
      transmission: '7-speed DSG',
      drivetrain: 'FWD',
      engine: '1.4L turbo',
      mileage: '7.1 L/100km (approx)',
      seats: '5'
    },
    available: true,
    rating: 4.6
  },
  {
    id: '8',
    brand: 'MG',
    model: 'MG5 Manuel',
    year: 2026,
    price: '255M DZD',
    description: 'Reliable sedan with manual transmission and great value.',
    media: [
      { url: '/cars/mg5-manuel-1.jpg', type: 'image' },
      { url: '/cars/mg5-manuel-2.jpg', type: 'image' }
    ],
    videoUrl: '/cars/mg5-manuel.mp4',
    specs: {
      fuel: 'Gasoline',
      horsepower: '118 hp',
      torque: '150 Nm',
      transmission: '5-speed manual',
      drivetrain: 'FWD',
      engine: '1.5L',
      mileage: '6.4 L/100km (approx)',
      seats: '5'
    },
    available: true,
    rating: 4.3
  },
  {
    id: '9',
    brand: 'Volkswagen',
    model: 'T-Roc Black Black',
    year: 2026,
    price: '575M DZD',
    description: 'Bold T-Roc edition with black exterior styling.',
    media: [
      { url: '/cars/t-roc-black-1.jpg', type: 'image' },
      { url: '/cars/t-roc-black-2.jpg', type: 'image' }
    ],
    videoUrl: '/cars/t-roc-black.mp4',
    specs: {
      fuel: 'Gasoline',
      horsepower: '150 hp',
      torque: '250 Nm',
      transmission: '7-speed DSG',
      drivetrain: 'FWD',
      engine: '1.5L turbo',
      mileage: '7.2 L/100km (approx)',
      seats: '5'
    },
    available: true,
    rating: 4.8
  },
  {
    id: '10',
    brand: 'Geely',
    model: 'Atlas Full',
    year: 2026,
    price: '450M DZD',
    description: 'Full option Atlas SUV with spacious interior.',
    media: [
      { url: '/cars/atlas-full-1.jpg', type: 'image' },
      { url: '/cars/atlas-full-2.jpg', type: 'image' }
    ],
    videoUrl: '/cars/atlas-full.mp4',
    specs: {
      fuel: 'Gasoline',
      horsepower: '181 hp',
      torque: '285 Nm',
      transmission: '7-speed DCT',
      drivetrain: 'FWD',
      engine: '1.5L turbo',
      mileage: '7.5 L/100km (approx)',
      seats: '5'
    },
    available: true,
    rating: 4.6
  }
]

export const highlights = [
  {
    title: 'Curated Imports',
    description:
      'Every vehicle is hand-selected for performance, comfort, and prestige.'
  },
  {
    title: 'Verified History',
    description:
      'We verify ownership, service history, and inspection details for every car.'
  },
  {
    title: 'Direct Owner Delivery',
    description:
      'Place your order and the Ziane Auto team will contact you within hours.'
  }
]
