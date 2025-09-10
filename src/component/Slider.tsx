"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider1 from "../../public/slide1.png";
import Slider2 from "../../public/slide2.png";
import Slider3 from "../../public/slide3.jpg";
import Button from "./Button";

const data = [
  {
    id: 1,
    image: Slider1,
    title: "always fresh & always crispy & always hot",
  },
  {
    id: 2,
    image: Slider2,
    title: "we deliver your order wherever you are in Lagos",
  },
  {
    id: 3,
    image: Slider3,
    title: "the best pizza to share with your family",
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        //         If the index is at the last item (data.length - 1), go back to 0 (start over).
        // Otherwise, increase the index by 1.
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex bg-fuchsia-50 md:flex-row flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
      {/* text area */}
      <div className="flex-1 flex flex-col justify-center items-center gap-5 font-bold text-red-500 ">
        <h1 className="text-4xl sm:text-4xl md:text-5xl xl:text-6xl text-center uppercase  p-2 md:p-5">
          {data[currentIndex].title}
        </h1>
        <Button url="" text=" Order Now" />
      </div>

      {/* Image area */}
      <div className="flex-1 relative w-full h-64 md:h-auto">
        <Image
          src={data[currentIndex].image}
          alt="Slider Image"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
}
