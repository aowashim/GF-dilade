import Typography from "@mui/material/Typography";
import React from "react";
import ReactConfetti from "react-confetti";
import useWindowDimensions from "../Hooks/useWindowDimensions";

function Kat() {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <ReactConfetti width={width} height={height} />
      <div
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "75vh",
        }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{
            marginBottom: 2,
            fontSize: "1.3rem",
            fontFamily: "Trebuchet MS",
          }}
        >
          Bhadai ho! Apko Katrina mili!
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="image/kat.jpg"
            height="190px"
            width="340PX"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Kat;
