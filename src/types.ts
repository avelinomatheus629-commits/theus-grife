export type BrandInspiration = 'Armani' | 'Prada' | 'Lacoste' | 'Oakley' | 'Maison';

export type ProductCategory = 'tailoring' | 'polos' | 'outerwear' | 'eyewear' | 'footwear' | 'accessories';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  brandInspiration: BrandInspiration;
  inspirationNote: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  tag: string;
  images: string[];
  description: string;
  fabricDetails: string;
  origin: string;
  sizes: string[];
  colors: ProductColor[];
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: ProductColor;
  quantity: number;
}

export interface QuickOrderReceipt {
  orderId: string;
  product: Product;
  size: string;
  color: ProductColor;
  quantity: number;
  total: number;
  paymentMethod: 'pix' | 'credit_card' | 'apple_pay';
  customerName: string;
  phone: string;
  email: string;
  shippingAddress: string;
  date: string;
}
