"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreeSample = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
  }, []);

  return <div ref={ref} style={{ width: "100%", height: "100vh" }} />;
};
