import { Add, GitHub, Home } from '@mui/icons-material';
import { Button } from '@mui/material';
import Link from 'next/link';
import bottomMenuStyles from '../styles/bottom-menu.module.css';
import LoginIcon from '@mui/icons-material/Login';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AddProductButton from './add-product-button';

export default function BottomMenu() {
  return (
    <div className={bottomMenuStyles.bottomNavigation}>
      <div className={bottomMenuStyles.bottomNavigationFixed}>
        <div>
          <Button>
            <Link href="/">
              <Home /> Home
            </Link>
          </Button>

          <Button>
            <Link href="/register">
              <LoginIcon />
              Sign in / sign up
            </Link>
          </Button>

          <AddProductButton />

          <Button>
            <Link href="/products">
              <DashboardCustomizeIcon />
              Products
            </Link>
          </Button>
          <Button>
            <Link href="/products">
              <GitHub />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
