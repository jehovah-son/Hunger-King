"use client";
import Button from "./Button";
import { useState, useEffect } from "react";
type Props = {
  price: number;
  options: { title: string; additionalPrice: number }[] | undefined;
};

export default function Price({ price, options }: Props) {
  const [selected, setSelected] = useState(0);
  const [totalPrice, setTotalPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);

  //example

  // quantity = 2;
  // price = 10;
  // options = [{ additionalPrice: 5 }, { additionalPrice: 7 }];
  // selected = 1;

  // Since options exists, it takes:
  // price (10) + options[1].additionalPrice (7) = 17

  // Multiply by quantity: 2 * 17 = 34

  // 👉 setTotal(34)

  useEffect(() => {
    setTotalPrice(
      quantity * (price + (options ? options[selected].additionalPrice : price))
    );
  }, [selected, quantity, options, price]);

  return (
    <div className="flex flex-col gap-5">
      {/* price */}
      <h1 className="">${totalPrice.toFixed(2)}</h1>
      {/* size */}
      <div className="flex gap-5 ">
        {options?.map((option, index) => (
          <button
            className="ring-1 ring-red-500  min-w-[6rem] p-2 rounded-md"
            key={index}
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "rgb(248 113 113)",
            }}
            onClick={() => {
              setSelected(index);
            }}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* border and button  */}
      <div className="flex justify-between">
        <div className="w-full ring-1 ring-red-500 flex  justify-between p-3">
          {/* Quantity text */}
          <span>Quantity</span>

          {/* Quantity */}
          <div className="flex justify-center item-center gap-4">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* button */}
        <button className="bg-red-500 text-white p-3 ring-1 ring-red-500  w-56 hover:bg-red-600 transition cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
