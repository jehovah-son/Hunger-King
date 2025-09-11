import Image from "next/image";
import Link from "next/link";
import { pizzas } from "@/data/DummyData";
import Button from "@/component/Button";

export default function CategoryPage() {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((pizza) => (
        <Link
          href={`/product/${pizza.id}`}
          key={pizza.id}
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 md:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-100 odd:bg-yellow-100"
        >
          <div className="relative flex-1 w-full h-[80%]  hover:rotate-[60deg] transition-all duration-500">
            <Image
              src={pizza.img}
              alt={pizza.title}
              fill
              className=" object-contain "
            />
          </div>
          <div className="flex justify-between items-center mt-5  text-center">
            <h2 className="text-xl font-bold  mb-2">{pizza.title}</h2>
            <p className=" group-hover:hidden">${pizza.price}</p>
            <div className="hidden group-hover:block">
              <Button url="" text="Add to Cart" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
