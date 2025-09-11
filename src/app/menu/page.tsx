import React from "react";
import { menu } from "@/data/DummyData";
import Link from "next/link";
import Button from "@/component/Button";
import clsx from "clsx";

export default function MenuPage() {
  return (
    <div className="p-4 lg:px-20 xl:px-40 flex flex-col md:flex-row gap-6">
      {menu.map((item) => (
        <Link
          href={`/menu/${item.slug}`}
          key={item.id}
          className="relative md:h-96 h-50 rounded-lg overflow-hidden group"
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0  group-hover:bg-black/30 transition-all"></div>

          {/* Text content */}
          <div
            className={` flex flex-1 flex-col justify-center items-start p-6  h-full w-full text-${item.color}`}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              {item.title}
            </h2>
            <p className=" text-xs font-bold ">{item.desc}</p>
            {/* <button
              className={`mt-4  text-white px-6 py-2 rounded-md hover:bg-${
                item.color
              } transition bg-${item.color}  cursor-pointer text-${
                item.color == "black" ? " blue" : "text-red-500"
              }`}
            >
              Explore
            </button> */}
            <button
              className={clsx(
                "mt-4 px-6 py-2 rounded-md transition cursor-pointer md:block hidden",
                {
                  "bg-black text-white hover:bg-gray-800":
                    item.color === "black",
                  "bg-white text-red-500 hover:bg-red-600":
                    item.color === "white",
                }
              )}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
