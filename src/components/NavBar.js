import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./custom.css";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";

function NavBar() {
  const instaUrl = "https://www.instagram.com/aowashim/";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="app-bar" position="static">
        <Toolbar>
          <FavoriteIcon
            size="large"
            edge="start"
            sx={{ mr: 2, color: "#a26499" }}
          ></FavoriteIcon>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "Franklin Gothic Medium" }}
          >
            Bhai GF dilade
          </Typography>

          <IconButton
            onClick={() => window.open(instaUrl, "_blank")}
            aria-label="social"
            size="large"
          >
            <InstagramIcon style={{ color: "rgb(209 188 206)" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
