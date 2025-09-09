"use client";
import Countdown from "react-countdown";
import { useEffect, useState } from "react";

const endingDate = new Date("2025-11-31").getTime();

export default function CountDown() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted === false) {
    // Static fallback for SEO + no hydration errors
    return (
      <p className="font-bold text-4xl text-yellow-300">Ends on Dec 31, 2025</p>
    );
  }

  return (
    <Countdown
      className="font-bold text-5xl text-yellow-300"
      date={endingDate}
    />
  );
}
