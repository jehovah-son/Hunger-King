import Button from "./Button";
type Props = {
  price: number;
  options: { title: string; additionalPrice: number }[] | undefined;
};

export default function Price({ price, options }: Props) {
  return (
    <div className="flex flex-col gap-5">
      {/* price */}
      <h1 className="">${price.toFixed(2)}</h1>
      {/* size */}
      <div className="flex gap-5 ">
        {options?.map((option, index) => (
          <button
            className="ring-1 ring-red-500  min-w-[6rem] p-2 rounded-md"
            key={index}
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
            <button>{"<"}</button>
            <span>1</span>
            <button>{">"}</button>
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
