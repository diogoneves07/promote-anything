import { NextApiRequest, NextApiResponse } from "next";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../../prisma/product";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  try {
    switch (req.method) {
      case "GET": {
        if (req.query.id) {
          // Get a single product if id is provided is the query
          // api/products?id=1
          const product = await getProduct(req.query.id as string);
          return res.status(200).json(product);
        } else {
          // Otherwise, fetch all products
          const products = await getAllProducts();
          return res.json(products);
        }
      }
      case "POST": {
        const product = await addProduct(JSON.parse(body));
        return res.json(product);
      }
      case "PUT": {
        // Update an existing product
        const { id, ...updateData } = body;
        const product = await updateProduct(id, updateData);
        return res.json(product);
      }
      case "DELETE": {
        // Delete an existing product
        const { id } = body;
        const product = await deleteProduct(id);
        return res.json(product);
      }
      default:
        break;
    }
  } catch (error: any) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
