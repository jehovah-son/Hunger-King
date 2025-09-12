import { singleProduct } from "@/data/DummyData";
import Image from "next/image";
import Price from "@/component/Price";

export default function SingleProductPage() {
  return (
    <div className="p-4  md:px-20 flex flex-col h-screen  md:flex-row gap-6 flex-1 justify-around items-center">
      {/* image area */}
      <div
        className=" relative w-full h-[70vh] hover:rotate-[60deg] transition-all duration-500"
        key={singleProduct.id}
      >
        <Image
          src={singleProduct.img}
          alt={singleProduct.title}
          fill
          className="object-contain "
        />
      </div>
      {/* product details area */}
      <div className="flex flex-col gap-5 text-red-500">
        <h1 className="md:text-4xl text-3xl font-bold uppercase ">
          {singleProduct.title}
        </h1>
        <p className="">{singleProduct.desc}</p>
        <Price price={singleProduct.price} options={singleProduct.options} />
      </div>
    </div>
  );
}
