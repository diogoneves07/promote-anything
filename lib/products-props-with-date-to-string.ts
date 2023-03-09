import { Product } from "@prisma/client";

export type ProductWithDateLikeString = Omit<Product, "createdAt"> & {
  createdAt: string;
};

function productPropsWithDateToString(product: Product) {
  const r: Record<string, any> = { ...product };

  for (const [key, value] of Object.entries(product)) {
    if (!(value instanceof Date)) continue;

    r[key] = value.toDateString();
  }

  return r as unknown as ProductWithDateLikeString;
}

export function productsPropsWithDateToString(
  products: Product[]
): ProductWithDateLikeString[];

export function productsPropsWithDateToString(
  product: Product
): ProductWithDateLikeString;

export function productsPropsWithDateToString(products: Product[] | Product) {
  if (!Array.isArray(products)) {
    return productPropsWithDateToString(products);
  }

  return (products as Product[]).map((e) => {
    return productPropsWithDateToString(e);
  });
}
