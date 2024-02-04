import Typography from "@mui/material/Typography";
import React from "react";
import ImageBtn from "../components/ImageBtn";
import { Box } from "@mui/material";

function Home() {
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
        Are you a <br /> boy or girl?
      </Typography>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ marginTop: 20, marginBottom: 25 }}>
          <ImageBtn imageName="boy" />
        </div>
        <ImageBtn imageName="girl" />
      </div>
    </div>
  );
}

export default Home;
