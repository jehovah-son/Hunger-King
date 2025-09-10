import Link from "next/link";

type ButtonProps = {
  url: string;
  text: string;
};

export default function Button({ url, text }: ButtonProps) {
  return (
    <Link href={url}>
      <button className=" bg-red-500 text-white px-6 py-3 w-max-content rounded-md hover:bg-red-600 transition cursor-pointer">
        {text}
      </button>
    </Link>
  );
}
