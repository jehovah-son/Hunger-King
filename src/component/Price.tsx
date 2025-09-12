import Button from "./Button";
type Props = {
  price: number;
  options: { title: string; additionalPrice: number }[] | undefined;
};

export default function Price({ price, options }: Props) {
  return (
    <div>
      <h1 className="pb-5">${price.toFixed(2)}</h1>

      <div className="flex gap-5 pb-5">
        {options?.map((option, index) => (
          <button
            className="ring-1 ring-red-500  min-w-[6rem] p-2 rounded-md"
            key={index}
          >
            {option.title}
          </button>
        ))}
      </div>

      <div>
        <div className="w-full ring-1 ring-red-500 flex justify-between p-3">
          {/* Quantity text */}
          <div>
            {" "}
            <h1>Quantity</h1>
          </div>
          {/* Quantity */}
          <div className="flex justify-center gap-3">
            <button>{"<"}</button>
            <span>1</span>
            <button>{">"}</button>
          </div>
        </div>
        {/* button */}
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
