import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import ReactConfetti from "react-confetti";

function ForGirls() {
  const [isLoading, setIsLoading] = useState(true);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setTimeout(stopLoading, 2000);
  }, []);

  const stopLoading = () => {
    setIsLoading(false);
  };

  return isLoading ? (
    <Loading
      firstLine="Please wait.."
      secondLine="Finding the perfect match for you.."
    />
  ) : (
    <>
      <ReactConfetti width={width} height={height} />

      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <video
          src="video/Owashim.mp4"
          height="600px"
          controls
          muted
          autoPlay
          loop
        />
      </div>
    </>
  );
}

export default ForGirls;
