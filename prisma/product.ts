import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};

export const getProduct = async (id: string) => {
  const product = await prisma.product.findUnique({
    where: { id },
  });
  return product;
};

export const addProduct = async (product: Prisma.ProductCreateInput) => {
  const newProduct = await prisma.product.create({
    data: {
      ...product,
    },
  });
  return newProduct;
};

export const updateProduct = async (
  id: string,
  updateData: Prisma.ProductCreateInput,
) => {
  const product = await prisma.product.update({
    where: {
      id,
    },
    data: {
      ...updateData,
    },
  });
  return product;
};

export const deleteProduct = async (id: string) => {
  const product = await prisma.product.delete({
    where: {
      id,
    },
  });
  return product;
};
