"use client";

import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(() =>
    typeof window !== "undefined" ? document.body.clientWidth : 1024,
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(document.body.clientWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

export default useWindowWidth;
