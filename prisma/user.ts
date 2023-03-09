import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const getUserBy = async (data: Partial<Prisma.UserCreateInput>) => {
  const user = await prisma.user.findUnique({
    where: { ...data },
  });
  return user;
};

export const createUser = async (user: Prisma.UserCreateInput) => {
  const newUser = await prisma.user.create({
    data: {
      ...user,
    },
  });
  return newUser;
};

export const updateUser = async (
  id: string,
  updateData: Prisma.UserCreateInput
) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      ...updateData,
    },
  });
  return user;
};

export const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
};
