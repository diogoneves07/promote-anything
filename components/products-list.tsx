import productsListStyles from '../styles/products-list.module.css';

import ProductCard from './product-card';
import { ProductWithDateLikeString } from '../lib/products-props-with-date-to-string';

interface ProductsListProps {
  products: ProductWithDateLikeString[];
}

export default function ProductsList({ products }: ProductsListProps) {
  const productsJSX = products.map((o) => <ProductCard {...o} />);

  return (
    <>
      <div className={productsListStyles.list}>
      <ProductCard
            imageLink="images/photography-g2608df752_1920.jpg"
            createdAt={new Date().toDateString()}
            title="Lorem ipsum dolor sit amet"
            desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        voluptate vitae! Modi quasi reprehenderit dolores aspernatur harum
        aliquid id possimus beatae corrupti laborum, adipisci ad aperiam animi
        deleniti quod repellat."
          />

          <ProductCard
            imageLink="images/vegetables-gf89d10ac6_1920.jpg"
            createdAt={new Date().toDateString()}
            title="Lorem ipsum dolor sit amet"
            desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        voluptate vitae! Modi quasi reprehenderit dolores aspernatur harum
        aliquid id possimus beatae corrupti laborum, adipisci ad aperiam animi
        deleniti quod repellat."
          />

<ProductCard
            imageLink="images/honey-g4fb7259c2_1920.jpg"
            createdAt={new Date().toDateString()}
            title="Lorem ipsum dolor sit amet"
            desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        voluptate vitae! Modi quasi reprehenderit dolores aspernatur harum
        aliquid id possimus beatae corrupti laborum, adipisci ad aperiam animi
        deleniti quod repellat."
          />

          <ProductCard
            imageLink="images/microscope-g68c240232_1920.jpg"
            createdAt={new Date().toDateString()}
            title="Lorem ipsum dolor sit amet"
            desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        voluptate vitae! Modi quasi reprehenderit dolores aspernatur harum
        aliquid id possimus beatae corrupti laborum, adipisci ad aperiam animi
        deleniti quod repellat."
          />




<ProductCard
            imageLink="images/churros-gb0a7c0c33_1920.jpg"
            createdAt={new Date().toDateString()}
            title="Lorem ipsum dolor sit amet"
            desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        voluptate vitae! Modi quasi reprehenderit dolores aspernatur harum
        aliquid id possimus beatae corrupti laborum, adipisci ad aperiam animi
        deleniti quod repellat."
          />

          <ProductCard
            imageLink="images/student-ga9d8a32bf_1920.jpg"
            createdAt={new Date().toDateString()}
            title="Lorem ipsum dolor sit amet"
            desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        voluptate vitae! Modi quasi reprehenderit dolores aspernatur harum
        aliquid id possimus beatae corrupti laborum, adipisci ad aperiam animi
        deleniti quod repellat."
          />
      </div>
    </>
  );
}
