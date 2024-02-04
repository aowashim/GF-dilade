import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      <Typography
        variant="h6"
        align="center"
        sx={{
          //   marginTop: 1,
          fontSize: "3.25rem",
          fontFamily: "Calibri",
        }}
      >
        Welcome!
      </Typography>

      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="image/hug4.png" height="200px" />
      </div> */}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <video src="video/hug1.mp4" height="200px" muted autoPlay loop />
      </div>

      <Typography
        variant="h6"
        align="center"
        sx={{
          //   marginTop: 1,
          fontSize: "3.25rem",
          fontFamily: "Calibri",
        }}
      >
        Bhaiyo aur <br /> unke Beheno!
      </Typography>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        <audio src="audio/Inky-Pinky.mp3" type="audio/mpeg" controls autoplay />
        <Button
          style={{ marginTop: 20, fontFamily: "Calibri", marginBottom: 10 }}
          className="btn-back"
          variant="contained"
          endIcon={<NavigateNextIcon />}
          size="large"
          onClick={() => navigate("/home")}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default Landing;
