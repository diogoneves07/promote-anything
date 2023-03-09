import headerStyles from "./header.module.css";
import { ThirtyFpsSelectOutlined } from "@mui/icons-material";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <div>
        <a href=".">
          <ThirtyFpsSelectOutlined />
          Promote everything!
        </a>
      </div>
    </header>
  );
}
