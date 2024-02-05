import React, { useEffect, useState } from "react";
import Aukat from "../components/Aukat";
import MastKaam from "../components/MastKaam";
import Kat from "../components/Kat";
import { CircularProgress } from "@mui/material";

function ForBoys() {
  const [letter1, setLetter1] = useState("");
  const [letter2, setLetter2] = useState("");
  const [componentNum, setComponentNum] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    generateRandomCapitalLetters();
    setTimeout(() => {
      handleSetComponent();
    }, 400);
  }, []);

  const handleSetComponent = () => {
    const randomNum = Math.floor(Math.random() * 100);

    if (randomNum < 49) setComponentNum(1);
    else if (randomNum > 49 && randomNum < 89) setComponentNum(2);
    else setComponentNum(3);

    setIsLoading(false);
  };

  const generateRandomCapitalLetters = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetter1 = alphabet.charAt(
      Math.floor(Math.random() * alphabet.length)
    );
    let randomLetter2 = alphabet.charAt(
      Math.floor(Math.random() * alphabet.length)
    );

    // Ensure randomLetter2 is different from randomLetter1
    while (randomLetter2 === randomLetter1) {
      randomLetter2 = alphabet.charAt(
        Math.floor(Math.random() * alphabet.length)
      );
    }

    setLetter1(randomLetter1);
    setLetter2(randomLetter2);
  };

  return isLoading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "85vh",
      }}
    >
      <CircularProgress style={{ color: "#5c2971", marginTop: 20 }} />
    </div>
  ) : (
    <div>
      {componentNum === 1 ? (
        <Aukat />
      ) : componentNum === 2 ? (
        <MastKaam first={letter1} second={letter2} />
      ) : (
        <Kat />
      )}
    </div>
  );
}

export default ForBoys;
