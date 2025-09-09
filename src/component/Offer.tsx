import React from "react";
import Image from "next/image";
import OfferProduct from "../../public/offerProduct.png";

import CountDown from "../component/CountDown";

export default function OfferSection() {
  return (
    <div className="bg-black h-screen flex flex-col justify-center md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[80vh]">
      {/* txt area */}
      <div className="flex-1 flex flex-col text-center justify-center items-center gap-5 px-4 sm:px-6 md:px-10">
        <h1 className="text-white font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight break-words max-w-[90%]">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl max-w-[600px]">
          Progressively simply effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel
        </p>
        <CountDown />
        <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
          Order Now
        </button>
      </div>

      {/* Image area */}
      <div className="relative flex-1 w-full md:h-full">
        <Image
          src={OfferProduct}
          alt="offer product"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
