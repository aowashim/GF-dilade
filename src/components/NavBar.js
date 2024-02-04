import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./custom.css";

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="app-bar" position="static">
        <Toolbar>
          <FavoriteIcon
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: "#a26499" }}
          ></FavoriteIcon>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "Franklin Gothic Medium" }}
          >
            Bhai GF dilade
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
