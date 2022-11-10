export class ProductModel {
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  rating: number;
  description: string;
  advantages: string;
  disAdvantages: string;
  catagories: string[];
  tags: string[];
  characteristics: Record<string, string>;
}
