import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

function Loading(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "85vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{
            //   marginTop: 1,
            fontSize: "1rem",
            fontFamily: "Trebuchet MS",
          }}
        >
          {props.firstLine} <br />
          {props.secondLine}
        </Typography>
        <video src="video/hug1.mp4" height="200px" muted autoPlay loop />
        {/* <LinearProgress style={{ backgroundColor: "#5c2971" }} /> */}
        {/* <CircularProgress style={{ color: "#5c2971", marginTop: 20 }} /> */}
      </div>
    </div>
  );
}

export default Loading;
