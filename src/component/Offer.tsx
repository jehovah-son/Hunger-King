import React from "react";
import Image from "next/image";
import OfferProduct from "../../public/offerProduct.png";

export default function OfferSection() {
  return (
    <div className="bg-black h-screen flex flex-col justify-center md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh] ">
      {/* txt area */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-3xl">
          {" "}
          Delicious Burger & French Fry
        </h1>
        <p className="text-gray-400 mt-5 w-3/4">
          {" "}
          Progressively simply effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel
        </p>
      </div>
      {/* Image area */}
      <div className="relative flex-1 w-full  md:h-full">
        <Image
          src={OfferProduct}
          alt="offer  product"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
