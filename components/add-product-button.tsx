import { Button } from '@mui/material';
import Link from 'next/link';
import addProductButtonStyles from '../styles/add-product-button.module.css';
import Add from '@mui/icons-material/Add';

export default function AddProductButton() {
  return (
    <div className={addProductButtonStyles.add}>
      <Button>
        <Link href="/add-product">
          <Add />
        </Link>
      </Button>
    </div>
  );
}


