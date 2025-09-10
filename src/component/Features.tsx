import { featuredProducts } from "@/data/DummyData";
import Image from "next/image";
import Button from "./Button";

export default function Features() {
  return (
    <div className="overflow-x-auto w-full">
      <div className="flex gap-6 px-4 py-6">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[25%] 
                   bg-white rounded-xl shadow-md p-4 
                   flex flex-col items-center text-center 
                   hover:shadow-lg hover:bg-fuchsia-100 
                   transition-all duration-300"
          >
            <div className="relative w-full md:h-48 h-35  hover:rotate-[60deg] transition-all duration-500">
              {" "}
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-contain "
              />
            </div>

            <h2 className="mt-4 text-lg text-red-500 font-bold">
              {product.title}
            </h2>
            <p className="mt-2 text-red-500 md:text-sm text-base ">
              {product.desc}
            </p>
            <p className="my-4  text-red-500 font-bold">${product.price}</p>

            <Button href="" text="Add to Cart" />
          </div>
        ))}
      </div>
    </div>
  );
}
