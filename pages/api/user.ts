import { NextApiRequest, NextApiResponse } from "next";
import { createUser, getUserBy, updateUser } from "../../prisma/user";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  try {
    switch (req.method) {
      case "GET":
        res.status(401);

      case "POST": {
        const userData = JSON.parse(body);

        if (userData.name) {
          await createUser(userData);

          return res.status(201);
        }

        const user = await getUserBy({ token: userData.token });

        if (user) return res.status(200).json(user);

        return res.status(401);
      }

      case "PUT": {
        // Update an existing user
        const { id, ...updateData } = body;
        const user = await updateUser(id, updateData);
        return res.json(user);
      }

      default:
        break;
    }
  } catch (error: any) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
