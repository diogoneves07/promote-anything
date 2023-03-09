import Layout from "../components/layout";
import ProductsList from "../components/products-list";
import {
  productsPropsWithDateToString,
  ProductWithDateLikeString,
} from "../lib/products-props-with-date-to-string";
import { getAllProducts } from "../prisma/product";

export default function Products({
  allProducts,
}: {
  allProducts: ProductWithDateLikeString[];
}) {
  return (
    <Layout>
      <ProductsList products={allProducts} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const allProducts = productsPropsWithDateToString(await getAllProducts());

  return {
    props: {
      allProducts,
    },
  };
}
