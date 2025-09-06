import type { IProductImage } from "./image";

export interface IProduct {
  name: string;
  price: number;
  image: IProductImage;
}
