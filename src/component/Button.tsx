import Link from "next/link";

type Props = {
  href: string;
  text: string;
};

export default function Button({ href, text }: Props) {
  return (
    <Link href={href}>
      <button className=" bg-red-500 text-white px-6 py-3 w-max-content rounded-md hover:bg-red-600 transition cursor-pointer">
        {text}
      </button>
    </Link>
  );
}
