import { Add, Home, ThirtyFpsSelectOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import bottomMenuStyles from "./bottom-menu.module.css";

export default function BottomMenu() {
  return (
    <header className={bottomMenuStyles.header}>
      <div className={bottomMenuStyles.headerFixed}>
        <div>
          <Button>
            <Link href="/">
              <Home /> Home
            </Link>
          </Button>

          <Button>
            <Link href="/register">
              <ThirtyFpsSelectOutlined />
              Login or Register
            </Link>
          </Button>
          <Button>
            <Link href="/products">
              <ThirtyFpsSelectOutlined />
              Products
            </Link>
          </Button>
        </div>
      </div>

      <div className={bottomMenuStyles.addProduct}>
        <Button>
          <Link href="/add-product">
            <Add />
          </Link>
        </Button>
      </div>
    </header>
  );
}
