import productsListStyles from "./products-list.module.css";

import ProductCard from "./product-card";
import { ProductWithDateLikeString } from "../lib/products-props-with-date-to-string";

interface ProductsListProps {
  products: ProductWithDateLikeString[];
}

export default function ProductsList({ products }: ProductsListProps) {
  const productsJSX = products.map((o) => <ProductCard {...o} />);

  return (
    <>
      <div className={productsListStyles.list}>
        {productsJSX} {productsJSX} {productsJSX} {productsJSX}
      </div>
    </>
  );
}
