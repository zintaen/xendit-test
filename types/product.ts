export type ProductAttribute = {
  name: string;
  values: string[];
};

export type Product = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
};

export type CartProduct = Product & {
  amount: number;
};
