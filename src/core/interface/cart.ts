import { IProduct } from "./product";

interface ISku {
  color?: string;
  size?: number;
  material?: string;
}

export interface ICart {
  product: IProduct;
  sku?: ISku;
  quanity: number;
}
