"use client";
import Image from "next/image";
import Open from "../../public/open.png";
import Close from "../../public/close.png";
import { useState } from "react";
import Link from "next/link";
import CartIcon from "@/component/CartIcon";

const Links = [
  {
    id: 1,
    title: "Homepage",
    url: "/",
  },
  {
    id: 2,
    title: "Menu",
    url: "/menu",
  },
  {
    id: 3,
    title: "Working Hours",
    url: "/",
  },
  {
    id: 4,
    title: "Contact",
    url: "/",
  },
];

export default function Menu() {
  const [open, setOpen] = useState(false);

  const User = false;

  return (
    <div>
      {
        //if it not open show this image the ! means not
        !open ? (
          <Image
            src={Open}
            alt="navOpen"
            width={20}
            height={20}
            onClick={() => setOpen(true)}
          />
        ) : (
          // if open show this image
          <Image
            src={Close}
            alt="navClose"
            width={20}
            height={20}
            onClick={() => setOpen(false)}
          />
        )
      }
      {/* create a condition here show all this below if it only open */}
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {Links.map((link) => (
            <Link href={link.url} key={link.id} onClick={() => setOpen(false)}>
              {link.title}
            </Link>
          ))}
          {/* Login and orders */}
          {User ? (
            <Link href="/" onClick={() => setOpen(false)}>
              Orders
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Login
            </Link>
          )}
          {/* cart */}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
}
