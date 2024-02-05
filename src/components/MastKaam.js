import Typography from "@mui/material/Typography";
import React from "react";

function MastKaam(props) {
  return (
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
        Jiski bhi name pe <b>{props.first}</b> aur <b>{props.second}</b> ho..{" "}
        <br />
        Propose kar de, pakka <b>yes</b> bolegi...
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="image/mast-kaam.jpg"
          height="300px"
          width="350PX"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}

export default MastKaam;
