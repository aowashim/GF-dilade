import Typography from "@mui/material/Typography";
import React from "react";

function Aukat() {
  return (
    <div
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
      }}
    >
      <Typography
        variant="h6"
        align="center"
        sx={{
          marginBottom: 1,
          fontSize: "1.3rem",
          fontFamily: "Trebuchet MS",
        }}
      >
        Algorithm ne aukat dikha di! <br /> Koi na.. Tu phir se try kar.
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="image/aukat.jpg"
          height="200px"
          width="300PX"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}

export default Aukat;
