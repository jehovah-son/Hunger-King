import Image from "next/image";
import P1 from "../../../public/temporary/p1.png";

export default function CartPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Item on cart (larger side) */}
      <div className="w-full md:h-full text-red-500 h-1/2 md:px-10 px-4 md:w-3/4  overflow-scroll">
        {/* first item */}
        <div className="flex py-5  justify-between items-center ">
          <div>
            <Image
              src={P1}
              width={100}
              height={100}
              alt="cart item"
              className="object-contain"
            />
          </div>
          {/* text item */}
          <div>
            <h1 className="uppercase font-bold">Sicilian</h1>
            <p className="text-base">Large</p>
          </div>
          {/* item price */}
          <div>
            <p className="font-bold">$79.90</p>
          </div>
          {/* delete item */}
          <div>
            <p>X</p>
          </div>
        </div>
        {/* second item */}
        <div className="flex py-5 justify-between items-center ">
          <div>
            <Image
              src={P1}
              width={100}
              height={100}
              alt="cart item"
              className="object-contain"
            />
          </div>
          {/* text item */}
          <div>
            <h1 className="uppercase font-bold">Sicilian</h1>
            <p className="text-base">Large</p>
          </div>
          {/* item price */}
          <div>
            <p className="font-bold">$79.90</p>
          </div>
          {/* delete item */}
          <div>
            <p>X</p>
          </div>
        </div>
        {/* third item */}
        <div className="flex py-5 justify-between items-center ">
          <div>
            <Image
              src={P1}
              width={100}
              height={100}
              alt="cart item"
              className="object-contain"
            />
          </div>
          {/* text item */}
          {/* text item */}
          <div>
            <h1 className="uppercase font-bold">Sicilian</h1>
            <p className="text-base">Large</p>
          </div>
          {/* item price */}
          <div>
            <p className="font-bold">$79.90</p>
          </div>
          {/* delete item */}
          <div>
            <p>X</p>
          </div>
        </div>
        {/* forth item */}
        <div className="flex py-5 justify-between items-center ">
          <div>
            <Image
              src={P1}
              width={100}
              height={100}
              alt="cart item"
              className="object-contain"
            />
          </div>
          {/* text item */}
          <div>
            <h1 className="uppercase font-bold">Sicilian</h1>
            <p className="text-base">Large</p>
          </div>
          {/* item price */}
          <div>
            <p className="font-bold">$79.90</p>
          </div>
          {/* delete item */}
          <div>
            <p>X</p>
          </div>
        </div>
      </div>

      {/* Total price in cart (smaller side) */}
      <div className="w-full md:w-1/4 p-4 md:h-screen h-1/2 justify-center  flex flex-col gap-4 md:gap-6 bg-fuchsia-50">
        <div className="flex justify-between">
          <span className="">Subtotal (4 items)</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">$FREE</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL.VAT)</span>
          <span className="font-bold">$81.70</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end  hover:bg-red-600 transition cursor-pointer">
          CHECKOUT
        </button>
      </div>
    </div>
  );
}
