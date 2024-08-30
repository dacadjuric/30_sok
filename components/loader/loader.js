"use client";

import { useCallback, useState, useRef, useEffect } from "react";
import Script from "next/script";
import Lottie from "react-lottie";

import animation from "./animation.json";
import useScrollLock from "../../hooks/use-scroll-lock";

export default function Loader() {
  const timeoutRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  useScrollLock(isLoading);

  const turnOffLoading = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const loaderStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 9999,
    backgroundColor: "#0e1217",
    overflow: "hidden",
    transition: "opacity 0.5s ease-out",
    opacity: isLoading ? 1 : 0,
    pointerEvents: isLoading ? "auto" : "none",
  };

  return (
    <div style={loaderStyles}>
      <Script
        src="https://gumroad.com/js/gumroad.js"
        onLoad={turnOffLoading}
        onReady={turnOffLoading}
        onError={turnOffLoading}
      />
      <Lottie
        width={320}
        options={{
          loop: true,
          autoplay: true,
          animationData: animation,
        }}
        height="auto"
        ariaRole="img"
        ariaLabel="Loading Animation"
        isClickToPauseDisabled
      />
    </div>
  );
}
