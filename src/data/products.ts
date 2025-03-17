import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Air Fresher",
    description:"'Powerful Clean, Lasting Shine.'Our Floor Cleaner is specially formulated to remove tough stains, dirt, and grime while leaving a refreshing fragrance and a streak-free shine. Safe for various surfaces, it ensures deep cleaning and long-lasting freshness, making your floors look spotless and new.",
    price: 12.99,
    image: "src/img/Airfresher.png",
    category: "all-purpose",
    featured: false,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Degreaser",
    description: "Streak-free formula that leaves windows, mirrors, and glass surfaces sparkling clean. The ammonia-free solution is gentle yet effective, removing fingerprints, smudges, and dirt with ease.",
    price: 9.99,
    image: "src/img/Degreaser.png",
    category: " kitchen",
    featured: false,
    rating: 4.6,
    reviews: 89
  },
  {
    id: 3,
    name: "De-Scaler",
    description: "Specially formulated to tackle soap scum, hard water stains, and mildew in bathrooms. The powerful foam clings to surfaces for maximum cleaning power while preventing future buildup.",
    price: 11.49,
    image: "src/img/Descaler.png  ",
    category: "fabric ",
    featured: false,
    rating: 4.7,
    reviews: 103
  },
  {
    id: 4,
    name: "Detergent Liquid",
    description: "Cut through tough kitchen grease and food residue with this powerful degreaser. Perfect for stovetops, range hoods, and backsplashes. The citrus-based formula dissolves grease on contact.",
    price: 13.99,
    image: "src/img/Detergentliquid.png",
    category: "bathroom",
    featured: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 5,
    name: "Dish Wash",
    description: "Gentle yet effective cleaner specifically designed for hardwood floors. Removes dirt and grime while enhancing the natural beauty of wood. Non-damaging formula that won't dull finishes.",
    price: 15.99,
    image: "src/img/Dishwash.png",
    category: "kitchen",
    featured: false,
    rating: 4.5,
    reviews: 78
  },
  {
    id: 6,
    name: "Fabric Softener",
    description: "Powerful stain remover that works on even the toughest carpet stains. Effective on pet accidents, wine, coffee, and more. The deep-cleaning formula reaches deep into carpet fibers.",
    price: 14.49,
    image: "src/img/Fabricsoftener.png",
    category: "fabric",
    featured: false,
    rating: 4.4,
    reviews: 92
  },
  {
    id: 7,
    name: "Floor Cleaner",
    description: "'Powerful Clean, Lasting Shine.'Our Floor Cleaner is specially formulated to remove tough stains, dirt, and grime while leaving a refreshing fragrance and a streak-free shine. Safe for various surfaces, it ensures deep cleaning and long-lasting freshness, making your floors look spotless and new.",
    price: 10.99,
    image:"src/img/Floorcleaner.png",
    category: "floor",
    featured: true,
    rating: 4.3,
    reviews: 67
  },
  {
    id: 8,
    name: "Glass Cleaner",
    description: "Eliminate odors from fabrics, upholstery, and carpets with this refreshing spray. The light, clean scent neutralizes odors rather than masking them. Safe for use on most fabrics.",
    price: 8.99,
    image: "src/img/Glasscleaner.png",
    category: "glass",
    featured: false,
    rating: 4.2,
    reviews: 54
  },
  {
    id: 9,
    name: "Hand Wash",
    description: "Restore the shine to stainless steel appliances and surfaces. Removes fingerprints, water spots, and smudges while leaving a protective coating that resists future marks.",
    price: 10.99,
    image:"src/img/Handwash.png",
    category: "specialty",
    featured: false,
    rating: 4.3,
    reviews: 67
  },
  {
    id: 10,
    name: "Multi-Purpose Cleaner",
    description: "Restore the shine to stainless steel appliances and surfaces. Removes fingerprints, water spots, and smudges while leaving a protective coating that resists future marks.",
    price: 10.99,
    image:"src/img/Multipurpose.png",
    category: "all-purpose",
    featured: true,
    rating: 4.3,
    reviews: 67
  },
  {
    id: 11,
    name: "Opan Delight",
    description: "Restore the shine to stainless steel appliances and surfaces. Removes fingerprints, water spots, and smudges while leaving a protective coating that resists future marks.",
    price: 10.99,
    image:"src/img/OpanDelight.png",
    category: "specialty",
    featured: false,
    rating: 4.3,
    reviews: 67
  },
  {
    id: 12,
    name: "Stain Remover",
    description: "Restore the shine to stainless steel appliances and surfaces. Removes fingerprints, water spots, and smudges while leaving a protective coating that resists future marks.",
    price: 10.99,
    image:"src/img/Stainremover.png",
    category: "fabric",
    featured: true,
    rating: 4.3,
    reviews: 67
  },
  {
    id: 13,
    name: "Toilet Cleaner",
    description: "Restore the shine to stainless steel appliances and surfaces. Removes fingerprints, water spots, and smudges while leaving a protective coating that resists future marks.",
    price: 10.99,
    image:"src/img/Toiletcleaner.png",
    category: "bathroom",
    featured: true,
    rating: 4.3,
    reviews: 67
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
