import Link from "next/link";

export default function Navbar() {
  return (
    <div className="">
      <div>
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <Link href="/">Hunger Kings</Link>
      </div>
      <div>
        <Link href="/cart">Cart</Link>
        <Link href="/login">Login</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </div>
  );
}
