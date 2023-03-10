import { Prisma } from '@prisma/client';

export type ProductWithDateLikeString = Omit<
  Prisma.ProductCreateInput,
  'createdAt'
> & {
  createdAt: string;
};

function productPropsWithDateToString(product: Prisma.ProductCreateInput) {
  const r: Record<string, any> = { ...product };

  for (const [key, value] of Object.entries(product)) {
    if (!(value instanceof Date)) continue;

    r[key] = value.toDateString();
  }

  return r as unknown as ProductWithDateLikeString;
}

export function productsPropsWithDateToString(
  products: Prisma.ProductCreateInput[],
): ProductWithDateLikeString[];

export function productsPropsWithDateToString(
  product: Prisma.ProductCreateInput,
): ProductWithDateLikeString;

export function productsPropsWithDateToString(
  products: Prisma.ProductCreateInput[] | Prisma.ProductCreateInput,
) {
  if (!Array.isArray(products)) {
    return productPropsWithDateToString(products);
  }

  return (products as Prisma.ProductCreateInput[]).map((e) => {
    return productPropsWithDateToString(e);
  });
}
