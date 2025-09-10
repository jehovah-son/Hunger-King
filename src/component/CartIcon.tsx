import Cart from "../../public/cart.png";
import Image from "next/image";

export default function CartIcon() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src={Cart} alt="cart" fill />
      </div>
      <span>Cart (3)</span>
    </div>
  );
}
