import React from "react";

type Props = {
  price: number;
  options: { title: string; additionalPrice: number }[] | undefined;
};

export default function Price({ price, options }: Props) {
  return <div>Price</div>;
}
