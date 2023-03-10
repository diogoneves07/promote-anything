import headerStyles from '../styles/header.module.css';
import { ThirtyFpsSelectOutlined } from '@mui/icons-material';

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <div>
        <a href=".">
          <ThirtyFpsSelectOutlined />
          Promote anything!
        </a>
      </div>
    </header>
  );
}
