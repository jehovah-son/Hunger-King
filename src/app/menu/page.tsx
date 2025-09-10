import React from "react";
import { menu } from "@/data/DummyData";
import Link from "next/link";
import Button from "@/component/Button";

export default function MenuPage() {
  return (
    <div className="p-4 lg:px-20 xl:px-40 flex flex-col md:flex-row gap-6">
      {menu.map((item) => (
        <Link
          href={`/menu/${item.slug}`}
          key={item.id}
          className="relative flex-1 h-64 md:h-96 rounded-lg overflow-hidden group"
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>

          {/* Text content */}
          <div className="relative z-10 flex flex-col justify-center items-start p-6 text-white h-full w-full">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              {item.title}
            </h2>
            <p className="text-sm md:text-base opacity-90 ">{item.desc}</p>
            <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
