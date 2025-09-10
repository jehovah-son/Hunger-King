import Link from "next/link";
import Phone from "../../public/phone.png";
import Image from "next/image";
import MenuPage from "@/app/menu/page";
import CartIcon from "./CartIcon";

export default function Navbar() {
  const user = false;
  return (
    <div className="md:px-16 md:py-6 px-3 py-3 flex justify-between gap-3 items-center shadow-md border-b-2 text-red-500 uppercase border-red-500 ">
      <div className="md:flex gap-5 flex-1 md:block hidden">
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="md:font-bold text-xl md:text-center  flex-1">
        <Link href="/">Hunger Kings</Link>
      </div>
      <div className="md:flex gap-5 flex-1 justify-end  md:block hidden">
        <div className="flex items-center gap-2 bg-orange-300 rounded-md px-1 ">
          <Image src={Phone} alt="phone" width={20} height={20} />
          <span className="truncate">081-184-77-430</span>
        </div>

        {user ? (
          <Link href="/profile">Orders</Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
        <Link href="/cart">
          <CartIcon />
        </Link>
      </div>
      {/* mobile view menu */}
      <div className="md:hidden block">
        <MenuPage />
      </div>
    </div>
  );
}
