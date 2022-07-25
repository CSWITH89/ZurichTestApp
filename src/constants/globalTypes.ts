export type TProductImage = {
  thumb: string;
  original: string;
};

export type TProductImages = TProductImage[];

export type TProduct = {
  id: number;
  title: string;
  description: string;
  specification: string;
  price: number;
  images: TProductImages;
};
