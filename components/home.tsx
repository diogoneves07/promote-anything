import { Typography } from '@mui/material';
import ExampleProducts from './example-products';

import homeStyles from '../styles/home.module.css';
import ProductCard from './product-card';

export default function Home() {
  return (
    <>
      <div className={homeStyles.home}>
        <Typography variant="h4">Promote anything you want!</Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, voluptate vitae! Modi quasi reprehenderit dolores
          aspernatur harum aliquid id possimus beatae corrupti laborum, adipisci
          ad aperiam animi deleniti quod repellat.
        </Typography>

        <div className={homeStyles.homeProducts}>
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
        </div>

        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, voluptate vitae! Modi quasi reprehenderit dolores
          aspernatur harum aliquid id possimus beatae corrupti laborum, adipisci
          ad aperiam animi deleniti quod repellat.
        </Typography>
      </div>
    </>
  );
}
