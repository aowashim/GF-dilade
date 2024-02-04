import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";

function ForGirls() {
  const [isLoading, setIsLoading] = useState(true);

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
    <div>ForGirls</div>
  );
}

export default ForGirls;
