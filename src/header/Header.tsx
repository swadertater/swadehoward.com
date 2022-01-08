import { ReactElement } from "react";
import { AppBar, Toolbar } from "@mui/material";
import './Header.css';

const Header = (): ReactElement => {
  return (
    <header>
      <AppBar position="sticky">
        <Toolbar>About</Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
